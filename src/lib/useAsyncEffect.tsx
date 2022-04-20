/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

export type EffectFuncWithMounted = (isMounted: () => boolean) => Promise<(() => void) | void>
export type EffectFuncWithoutMounted = () => Promise<(() => void) | void>
export type EffectFunc = EffectFuncWithMounted | EffectFuncWithoutMounted

export function useAsyncEffect(effect: EffectFunc, inputs?: unknown[]) {
  useEffect(function () {
    let mounted = true
    const promise: Promise<(() => void) | void> = effect(() => {
      return mounted
    })

    Promise.resolve(promise)
      .then((callback) => {
        if (callback) {
          callback?.()
        }
      })
      .catch((reason) => {
        console.log(`useAsyncEffect Excepted: ${reason}`)
      })

    return function () {
      mounted = false
    }
  }, inputs ?? [])
}
