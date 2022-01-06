/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

type EffectFuncWithMounted = (isMounted: () => boolean) => Promise<(() => void) | void>
type EffectFuncWithoutMounted = () => Promise<(() => void) | void>
type EffectFunc = EffectFuncWithMounted | EffectFuncWithoutMounted

function useAsyncEffect(effect: EffectFunc, inputs?: unknown[]) {
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

export { useAsyncEffect }
