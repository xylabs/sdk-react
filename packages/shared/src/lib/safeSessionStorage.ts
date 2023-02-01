import { Log } from '@xylabs/log'

export const getSessionStorageObject = <T>(key: string, log?: Log) => {
  let result = {}
  try {
    result = JSON.parse(sessionStorage.getItem(key) ?? '{}')
  } catch (e) {
    log?.error('getSessionStorageObject', e)
  }
  return result
}

export const setSessionStorageObject = <T>(key: string, value: Record<string, unknown>, log?: Log) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    log?.error('setSessionStorageObject', e)
  }
}
