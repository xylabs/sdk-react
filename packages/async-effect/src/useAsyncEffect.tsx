import { usePromise } from '@xylabs/react-promise'
import { DependencyList, useEffect, useRef } from 'react'

export type EffectFuncWithMounted = (isMounted: () => boolean) => Promise<(() => void) | void>
export type EffectFuncWithoutMounted = () => Promise<(() => void) | void>
export type EffectFunc = EffectFuncWithMounted | EffectFuncWithoutMounted

export type EffectCallback = () => void | undefined

export function useAsyncEffect(effect: EffectFunc, dependencies: DependencyList = []) {
  const mounted = useRef(true)

  //this useEffect's return should only ever get called once
  //since it has no dependencies
  useEffect(() => {
    // ensure mount is true during development mode when the
    // cleanup function is called after the initial render
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  usePromise(async () => {
    await effect(() => mounted.current)
  }, dependencies)
}
