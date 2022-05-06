import { MouseEvent } from 'react'

import { ButtonEx, ButtonExProps } from '../ButtonEx'
import { EthAccountBox } from './EthAccountBox'
import { EthAccountProps } from './EthAccountProps'

export interface EthAccountButtonProps extends EthAccountProps {
  toEtherScan?: boolean
}

export const EthAccountButton: React.FC<EthAccountButtonProps & ButtonExProps> = ({
  address,
  full,
  icon = false,
  iconSize = 16,
  iconOnly = false,
  shortenedLength,
  addressLength = 'auto',
  fontFamily = '"Source Code Pro",monospace',
  toEtherScan,
  onClick,
  ...props
}) => {
  const onClickLocal = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event)
    if (toEtherScan && address) {
      window.open(`https://etherscan.io/address/${address.toString()}`, '_blank')
    }
  }

  return (
    <ButtonEx onClick={onClickLocal} title={`0x${address?.toHex()}`} {...props}>
      <EthAccountBox
        address={address}
        addressLength={addressLength}
        shortenedLength={shortenedLength}
        full={full}
        icon={icon}
        iconSize={iconSize}
        iconOnly={iconOnly}
        fontFamily={fontFamily}
      />
    </ButtonEx>
  )
}

/** @deprecated use EthAccountButton or EthAccountBox */
export const EthAccount = EthAccountButton
