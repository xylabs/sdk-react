import { Eip1193Provider } from 'ethers'

declare global {
  interface Window {
    // For easily passing to Ether's BrowserProvider which takes an Eip11993Provider
    ethereum?: Eip1193Provider
    phantom?: {
      ethereum: {
        isPhantom: boolean
      }
    }
  }
}
