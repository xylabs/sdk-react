// Inspired from https://github.com/bsonntag/react-use-promise

import { Mutex } from 'async-mutex'
import type { DependencyList } from 'react'
import {
  useEffect, useMemo, useState,
} from 'react'

import { usePromiseSettings } from './context/index.ts'
import type { UsePromiseConfig, UsePromiseState } from './model.ts'

/**
 * A custom hook that manages the state of a promise, including its result, error, and state.
 *
 * @template TResult - The type of the result that the promise resolves to.
 *
 * @param {() => Promise<TResult | undefined>} promise - A function that returns a promise.
 * @param {DependencyList} dependencies - An array of dependencies that will trigger the promise to be re-evaluated when changed.
 * @param {UsePromiseConfig<TResult>} [config] - Optional configuration for the hook.
 * @param {TResult} [config.defaultValue] - The default value to be used before the promise resolves.
 * @param {boolean} [config.debug] - If true, debug information will be logged to the console.
 *
 * @returns {[TResult | undefined, Error | undefined, UsePromiseState | undefined]}
 * An array containing the result of the promise, any error that occurred, and the current state of the promise.
 */
export const usePromise = <TResult>(
  promise: () => Promise<TResult | undefined>,
  dependencies: DependencyList,
  config?: UsePromiseConfig<TResult>,
): [TResult | undefined, Error | undefined, UsePromiseState | undefined] => {
  const { logErrors = true } = usePromiseSettings()
  const [result, setResult] = useState<TResult | undefined>(config?.defaultValue)
  const [error, setError] = useState<Error>()
  const [state, setState] = useState<UsePromiseState>('pending')
  const mutex = useMemo(() => {
    return new Mutex()
  }, [])

  if (config?.debug) console.log(`usePromise [${config?.debug}]: started [${typeof promise}]`)

  const promiseMemo: Promise<TResult | undefined> | undefined = useMemo(() => {
    try {
      if (config?.debug) console.log(`usePromise [${config?.debug}]: re-memo [${typeof promise}]`)
      setState('pending')
      return promise?.()
    } catch (ex) {
      const error = ex as Error
      if (logErrors) {
        console.error(`usePromise-memo: ${error}`)
        globalThis?.rollbar?.error(error)
      }
      if (config?.debug) console.log(`usePromise [${config?.debug}]: useMemo rejection [${typeof promise}]`)
      setResult(undefined)
      setError(error)
      setState('rejected')
    }
  }, dependencies)

  if (config?.debug) console.log(`usePromise [${config?.debug}] Main Function`)

  useEffect(() => {
    let loaded = true
    if (config?.debug) console.log(`usePromise [${config?.debug}] useEffect`)
    mutex
      ?.acquire()
      .then(() => {
        promiseMemo
          ?.then((payload) => {
            if (config?.debug) console.log(`usePromise [${config?.debug}] then`)
            if (loaded) {
              setResult(payload)
              setError(undefined)
              setState('resolved')
            }
            mutex?.release()
          })
          .catch((e) => {
            const error = e as Error
            if (logErrors) {
              console.error(error)
              globalThis?.rollbar?.error(error)
            }
            if (loaded) {
              setResult(undefined)
              setError(error)
              setState('resolved')
            }
            mutex?.release()
          })
      })
      .catch((ex) => {
        const error = ex as Error
        if (logErrors) {
          console.error(`usePromise-memo: ${error}`)
          globalThis?.rollbar?.error(error)
        }
        if (loaded) {
          setResult(undefined)
          setError(error)
          setState('rejected')
        }
        mutex?.release()
      })
    return () => {
      loaded = false
      if (config?.debug) console.log(`usePromise [${config?.debug}] useEffect callback`)
    }
  }, [...dependencies, promiseMemo])
  if (config?.debug) console.log(`usePromise [${config?.debug}] returning ${JSON.stringify([result, error, state], null, 2)}`)
  return [result, error, state]
}
