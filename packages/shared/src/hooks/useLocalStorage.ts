import { useCallback, useState } from 'react'

import { getLocalStorageObject, setLocalStorageObject } from '../lib'

export const useLocalStorage = <T>(key: string, defaultValue: T): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = getLocalStorageObject<T>(key)
      if (typeof item === 'boolean' || typeof item === 'string' || typeof item === 'number') {
        return item
      } else if (Array.isArray(item)) {
        return item
      } else if (Object.keys(item as object).length > 0) {
        return item
      } else {
        setLocalStorageObject(key, defaultValue)
        return defaultValue
      }
    } catch {
      //Error is already logged
      return defaultValue
    }
  })
  const setValue = useCallback(
    (value: T) => {
      setStoredValue(value)
      setLocalStorageObject(key, value)
    },
    [setStoredValue, key],
  )

  return [storedValue, setValue]
}
