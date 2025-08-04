import '@mui/material/themeCssVarsAugmentation'

import type { Eip1193Provider } from 'ethers'

declare global {
  var ethereum: Eip1193Provider | undefined
  var phantom: {
    ethereum: {
      isPhantom: boolean
    }
  } | undefined
}
