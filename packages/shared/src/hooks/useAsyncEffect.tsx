/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

export type EffectFuncWithMounted = (isMounted: () => boolean) => Promise<(() => void) | void>
export type EffectFuncWithoutMounted = () => Promise<(() => void) | void>
export type EffectFunc = EffectFuncWithMounted | EffectFuncWithoutMounted

export function useAsyncEffect(effect: EffectFunc, inputs?: unknown[]) {
  let _callback: () => void | undefined

  useEffect(function () {
    let mounted = true
    const promise: Promise<(() => void) | void> = effect(() => {
      return mounted
    })

    Promise.resolve(promise)
      .then((callback /* return value from passed async function*/) => {
        if (callback) {
          _callback = callback
        }
      })
      .catch((reason) => {
        console.log(`useAsyncEffect Excepted: ${reason}`)
      })

    return function () {
      mounted = false
      _callback?.()
    }
  }, inputs ?? [])
}
