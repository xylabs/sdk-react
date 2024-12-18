import type { EthAddress } from '@xylabs/eth-address'
import type { NavigateOptions, To } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const useNavigateToEthAddress = () => {
  const navigate = useNavigate()
  const navigateToEthAddress = (
    address: EthAddress,
    event: React.MouseEvent,
    page?: string,
    to?: To,
    toOptions?: NavigateOptions,
    toEtherScan?: boolean,
  ) => {
    const openInEtherScan = toEtherScan || (!to && !page)
    if (openInEtherScan) {
      window.open(`https://etherscan.io/address/${address.toString()}`, '_blank')
    } else {
      const path = to?.toString() ?? `/${page}/${address.toString()}`
      if (event.metaKey || toEtherScan) {
        window.open(path, '_blank')
      } else {
        void navigate(to ?? path, toOptions)
      }
    }
  }
  return { navigateToEthAddress }
}
