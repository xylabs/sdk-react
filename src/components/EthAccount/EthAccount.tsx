import { Typography, useTheme } from '@mui/material'
import { MouseEvent, useContext } from 'react'

import { EthersContext } from '../../contexts'
import { useMediaQuery } from '../../hooks'
import { ButtonEx } from '../ButtonEx'
import { FlexGrowRow, FlexRow } from '../FlexBox'
import { Identicon } from '../Identicon'
import { EthAccountProps } from './EthAccountProps'

const EthAccount: React.FC<EthAccountProps> = ({
  address,
  icon = false,
  iconSize = 16,
  iconOnly = false,
  addressLength = 'auto',
  fontFamily = '"Source Code Pro",monospace',
  toEtherScan,
  onButtonClick,
  ...props
}) => {
  const { localAddress } = useContext(EthersContext)
  const theme = useTheme()

  const large = useMediaQuery(theme.breakpoints.up('md'))

  if (address) {
    const isLocalAddress = localAddress?.toString() === address.toString()

    const onClickLocal = (event: MouseEvent<HTMLButtonElement>) => {
      onButtonClick?.(event)
      if (toEtherScan) {
        window.open(`https://etherscan.io/address/${address.toString()}`, '_blank')
      }
    }

    const testToDisplay =
      addressLength === 'long'
        ? address.toString()
        : addressLength === 'short'
        ? address.toShortString()
        : large
        ? address.toString()
        : address.toShortString()

    return (
      <ButtonEx onClick={onClickLocal} title={`0x${address?.toHex()}`} {...props}>
        <FlexGrowRow justifyContent="space-between" alignItems="center">
          {icon ? <Identicon size={iconSize} value={address?.toHex()} /> : null}
          {iconOnly ? null : (
            <Typography marginLeft={icon ? 1 : 0} variant="body1" fontFamily={fontFamily}>
              {testToDisplay}
            </Typography>
          )}
          {isLocalAddress ? <FlexRow marginLeft={0.5}>(You)</FlexRow> : null}
        </FlexGrowRow>
      </ButtonEx>
    )
  } else {
    return <ButtonEx {...props}>{' - - '}</ButtonEx>
  }
}

export { EthAccount }
