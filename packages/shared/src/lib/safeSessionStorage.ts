import type { Log } from '@xylabs/log'

export const getSessionStorageObject = <T>(key: string, log?: Log): T => {
  let result = {} as T
  try {
    result = JSON.parse(sessionStorage.getItem(key) ?? '{}') as T
  } catch (e) {
    log?.error('getSessionStorageObject', e)
  }
  return result
}

export const setSessionStorageObject = <T>(key: string, value: T, log?: Log) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    log?.error('setSessionStorageObject', e)
  }
}
