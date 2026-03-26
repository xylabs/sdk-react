/* eslint-disable @typescript-eslint/no-deprecated, sonarjs/deprecation */
import { use } from 'react'

import { EthersContext } from './Context.ts'

export const useEthersContext = () => use(EthersContext)
