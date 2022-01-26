import { useState } from 'react'

import { getLocalStorageObject, setLocalStorageObject } from '../lib'

export const useLocalStorage = <T>(key: string, defaultValue: T): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = getLocalStorageObject<T>(key)
      return item || defaultValue
    } catch (ex) {
      //Error is already logged
      return defaultValue
    }
  })

  const setValue = (value: T) => {
    console.log('setValue', value)
    setStoredValue(value)
    setLocalStorageObject(key, value)
    console.log('getValue from ls', getLocalStorageObject(key))
  }

  return [storedValue, setValue]
}