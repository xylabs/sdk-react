import { useContext } from 'react'

import { EthersContext } from './Context'

export const useEthersContext = () => useContext(EthersContext)
