import { EthAddress } from '@xylabs/sdk-js'
import { createContext } from 'react'

const NetworkSettingsContext = createContext<{
  xyStakingConsensusAddress?: EthAddress
  xyBondAddress?: EthAddress
  xyGovernanceAddress?: EthAddress
  xyFhrMerkleSendAddress?: EthAddress
}>({})
export { NetworkSettingsContext }
