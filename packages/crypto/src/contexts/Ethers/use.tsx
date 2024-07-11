/* eslint-disable import/no-deprecated */
import { useContext } from 'react'

import { EthersContext } from './Context.js'

export const useEthersContext = () => useContext(EthersContext)
