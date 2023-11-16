import { ExternalProvider } from '@ethersproject/providers'

declare global {
  interface Window {
    ethereum: unknown | ExternalProvider
  }
}
