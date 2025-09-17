import { useMemo, useState } from 'react'

export const useTryMethodCalls = <T extends object>(instance: T): { error: Error | undefined; instance: T } => {
  const [error, setError] = useState<Error>()

  const proxy = useMemo(() => new Proxy(instance, {
    get(target, prop, receiver) {
      const orig = Reflect.get(target, prop, receiver)
      // Only wrap functions that are not private (do not start with _)
      if (typeof orig === 'function' && typeof prop === 'string' && !prop.startsWith('_')) {
        setError(undefined)
        return async function (...args: unknown[]) {
          try {
            return await orig.apply(instance, args)
          } catch (err) {
            setError(err as Error)
            throw err
          }
        }
      }
      return orig
    },
  }), [instance])

  return { instance: proxy, error }
}
