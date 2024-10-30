import { Mutex } from 'async-mutex'
import type { DependencyList } from 'react'

import type { UsePromiseConfig, UsePromiseState } from './model.ts'
import { usePromise } from './usePromise.ts'

const mutexDictionary: Record<string, Mutex> = {}

/**
 * A custom hook that ensures a promise is executed atomically, using a mutex to prevent concurrent executions.
 *
 * @template TResult - The type of the result that the promise resolves to.
 * @param {string} name - A unique name for the mutex to ensure atomic execution.
 * @param {() => Promise<TResult | undefined>} promise - A function that returns the promise to be executed.
 * @param {DependencyList} dependencies - An array of dependencies that will trigger the promise execution when changed.
 * @param {UsePromiseConfig<TResult>} [config] - Optional configuration for the promise execution.
 * @returns {[TResult | undefined, Error | undefined, UsePromiseState | undefined]}
 * An array containing the result of the promise, any error that occurred, and the state of the promise.
 */
export const useAtomicPromise = <TResult>(
  name: string,
  promise: () => Promise<TResult | undefined>,
  dependencies: DependencyList,
  config?: UsePromiseConfig<TResult>,
): [TResult | undefined, Error | undefined, UsePromiseState | undefined] => {
  mutexDictionary[name] = mutexDictionary[name] ?? new Mutex()
  return usePromise(() => mutexDictionary[name].runExclusive(promise), dependencies, config)
}
