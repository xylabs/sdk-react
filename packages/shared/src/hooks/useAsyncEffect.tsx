import { useEffect, useRef } from 'react'

export type EffectFuncWithMounted = (isMounted: () => boolean) => Promise<(() => void) | void>
export type EffectFuncWithoutMounted = () => Promise<(() => void) | void>
export type EffectFunc = EffectFuncWithMounted | EffectFuncWithoutMounted

export type EffectCallback = () => void | undefined

export function useAsyncEffect(effect: EffectFunc, inputs: unknown[] = []) {
  const _callback = useRef<EffectCallback>()
  const mounted = useRef(true)

  //this useEffect's return should only ever get called once
  //since it has no dependencies
  useEffect(() => {
    return () => {
      mounted.current = false
    }
  }, [])

  useEffect(function () {
    const promise: Promise<(() => void) | void> = effect(() => {
      return mounted.current
    })

    Promise.resolve(promise)
      .then((callback /* return value from passed async function*/) => {
        if (callback) {
          _callback.current = callback
        }
      })
      .catch((reason) => {
        console.log(`useAsyncEffect Excepted: ${reason}`)
      })

    return function () {
      _callback.current?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, inputs)
}
