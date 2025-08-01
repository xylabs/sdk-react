import { EthAddressWrapper } from '@xylabs/eth-address'
import type { PropsWithChildren } from 'react'
import React, { useMemo } from 'react'

import { NetworkSettingsContext } from './Context.ts'

export interface NetworkSettingsLoaderProps {
  enabled?: boolean
}

export const NetworkSettingsLoader: React.FC<PropsWithChildren<NetworkSettingsLoaderProps>> = (props) => {
  const { children } = props

  const value = useMemo(() => ({
    xyBondAddress: EthAddressWrapper.fromString('0x1a024A698EEBdB86ccf3fCaF2F589839bdc066AD'),
    xyFhrMerkleSendAddress: EthAddressWrapper.fromString('0x46FEEBDffC8076D9E5fd8a11CF1508810472A79f'),
    xyGovernanceAddress: EthAddressWrapper.fromString('0x01925d0fFE4a6a6162B51ba611e3D4780Fc2dF42'),
    xyStakingConsensusAddress: EthAddressWrapper.fromString('0x0242514106114DEaA99Fd81574142c36Edb03B6D'),
  }), [])

  return (
    <NetworkSettingsContext
      value={value}
    >
      {children}
    </NetworkSettingsContext>
  )
}
