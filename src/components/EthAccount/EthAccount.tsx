import { Typography, useTheme } from '@mui/material'
import { assertEx, EthAddress } from '@xylabs/sdk-js'
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
  shortenedLength,
  addressLength = 'auto',
  fontFamily = '"Source Code Pro",monospace',
  toEtherScan,
  onButtonClick,
  ...props
}) => {
  const { localAddress } = useContext(EthersContext)
  const theme = useTheme()

  const large = useMediaQuery(theme.breakpoints.up('md'))

  const isLocalAddress = address ? localAddress?.toString() === address.toString() : false

  const onClickLocal = (event: MouseEvent<HTMLButtonElement>) => {
    onButtonClick?.(event)
    if (toEtherScan && address) {
      window.open(`https://etherscan.io/address/${address.toString()}`, '_blank')
    }
  }

  const addressToDisplay = assertEx(address ?? EthAddress.fromString('0x00'), 'Bad Eth Address')

  const testToDisplay =
    addressLength === 'long'
      ? addressToDisplay.toString()
      : addressLength === 'short'
      ? addressToDisplay.toShortString(shortenedLength)
      : large
      ? addressToDisplay.toString()
      : addressToDisplay.toShortString()

  // Note: We use the all zero address for spacing in case it is

  return (
    <ButtonEx onClick={onClickLocal} title={`0x${address?.toHex()}`} {...props}>
      <FlexGrowRow justifyContent="space-between" alignItems="center">
        {icon && address ? <Identicon size={iconSize} value={address?.toHex()} /> : null}
        {iconOnly ? null : (
          <FlexRow>
            <Typography marginLeft={icon ? 1 : 0} variant="body1" fontFamily={fontFamily} visibility={address ? 'inherit' : 'hidden'}>
              {testToDisplay}
            </Typography>
            {address ? null : (
              <Typography position="absolute" marginLeft={icon ? 1 : 0} variant="body1" fontFamily={fontFamily}>
                -- --
              </Typography>
            )}
          </FlexRow>
        )}
        {isLocalAddress ? <FlexRow marginLeft={0.5}>(You)</FlexRow> : null}
      </FlexGrowRow>
    </ButtonEx>
  )
}

export { EthAccount }
