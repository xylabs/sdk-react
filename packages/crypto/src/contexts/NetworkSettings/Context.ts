import { EthAddress } from '@xylabs/eth-address'
import { createContext } from 'react'

const NetworkSettingsContext = createContext<{
  xyBondAddress?: EthAddress
  xyFhrMerkleSendAddress?: EthAddress
  xyGovernanceAddress?: EthAddress
  xyStakingConsensusAddress?: EthAddress
}>({})
export { NetworkSettingsContext }
