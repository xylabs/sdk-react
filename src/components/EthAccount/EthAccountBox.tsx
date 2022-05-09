import { Typography, useTheme } from '@mui/material'
import { assertEx, EthAddress } from '@xylabs/sdk-js'
import { useContext } from 'react'

import { EthersContext } from '../../contexts'
import { useMediaQuery } from '../../hooks'
import { FlexBoxProps, FlexRow } from '../FlexBox'
import { Identicon } from '../Identicon'
import { EthAccountProps } from './EthAccountProps'

export const EthAccountBox: React.FC<EthAccountProps & FlexBoxProps> = ({
  address,
  icon = false,
  iconSize = 16,
  iconOnly = false,
  shortenedLength,
  addressLength = 'auto',
  fontFamily = '"Source Code Pro",monospace',
  ...props
}) => {
  const { localAddress } = useContext(EthersContext)
  const theme = useTheme()

  const large = useMediaQuery(theme.breakpoints.up('md'))

  const isLocalAddress = address ? localAddress?.toString() === address.toString() : false

  const addressToDisplay = assertEx(address ?? EthAddress.fromString('0x00'), 'Bad Eth Address')

  const textToDisplay = address
    ? addressLength === 'long'
      ? addressToDisplay.toString()
      : addressLength === 'short'
      ? addressToDisplay.toShortString(shortenedLength)
      : large
      ? addressToDisplay.toString()
      : addressToDisplay.toShortString()
    : '-- --'

  // Note: We use the all zero address for spacing in case it is

  return (
    <FlexRow justifyContent="space-between" alignItems="center" minHeight={theme.spacing(3)} {...props}>
      {icon ? <Identicon minHeight={theme.spacing(3)} minWidth={theme.spacing(3)} bgcolor={theme.palette.secondary.main} size={iconSize} value={address?.toHex()} /> : null}
      {iconOnly ? null : (
        <Typography marginLeft={icon ? 1 : 0} variant="body1" fontFamily={fontFamily}>
          {textToDisplay}
        </Typography>
      )}
      {isLocalAddress ? <FlexRow marginLeft={0.5}>(You)</FlexRow> : null}
    </FlexRow>
  )
}