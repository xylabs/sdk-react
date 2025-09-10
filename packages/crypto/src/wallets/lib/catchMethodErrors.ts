export function catchMethodErrors<T extends object>(instance: T, onError: (error: Error) => void): T {
  return new Proxy(instance, {
    get(target, prop, receiver) {
      const orig = Reflect.get(target, prop, receiver)
      // Only wrap functions that are not private (do not start with _)
      if (typeof orig === 'function' && typeof prop === 'string' && !prop.startsWith('_')) {
        return async function (...args: unknown[]) {
          try {
            return await orig.apply(instance, args)
          } catch (err) {
            onError(err as Error)
            throw err
          }
        }
      }
      return orig
    },
  })
}
