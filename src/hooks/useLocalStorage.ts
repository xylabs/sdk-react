import { useState } from 'react'

import { getLocalStorageObject, setLocalStorageObject } from '../lib'

export const useLocalStorage = <T>(key: string, defaultValue: T): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = getLocalStorageObject<T>(key)
      if (typeof defaultValue === 'boolean') {
        if (typeof item === 'boolean') {
          return item
        } else {
          return defaultValue
        }
      } else if (Array.isArray(item)) {
        return item
      } else if (Object.keys(item).length) {
        return item
      } else {
        return defaultValue
      }
    } catch (ex) {
      //Error is already logged
      return defaultValue
    }
  })

  const setValue = (value: T) => {
    setStoredValue(value)
    setLocalStorageObject(key, value)
  }

  return [storedValue, setValue]
}
