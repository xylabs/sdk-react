import { createContext } from 'react'

export interface PromiseSettings {
  logErrors: boolean
}

export const defaultPromiseSettings: PromiseSettings = { logErrors: true }

export const PromiseSettingsContext = createContext(defaultPromiseSettings)
