import { useContext } from 'react'

import { EthersContext } from './Context.ts'

export const useEthersContext = () => useContext(EthersContext)
