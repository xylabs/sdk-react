import type { EthAddressWrapper } from '@xylabs/eth-address'
import { createContext } from 'react'

const NetworkSettingsContext = createContext<{
  xyBondAddress?: EthAddressWrapper
  xyFhrMerkleSendAddress?: EthAddressWrapper
  xyGovernanceAddress?: EthAddressWrapper
  xyStakingConsensusAddress?: EthAddressWrapper
}>({})
export { NetworkSettingsContext }
