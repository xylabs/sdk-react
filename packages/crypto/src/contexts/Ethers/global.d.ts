import { ExternalProvider } from 'ethers'

declare global {
  interface Window {
    ethereum: unknown | ExternalProvider
  }
}
