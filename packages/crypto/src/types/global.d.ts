import '@mui/material/themeCssVarsAugmentation'

// eslint-disable-next-line import-x/no-internal-modules
import type { Eip1193Provider } from 'ethers/providers'

declare global {
  var ethereum: Eip1193Provider | undefined
  var phantom: {
    ethereum: {
      isPhantom: boolean
    }
  } | undefined
}
