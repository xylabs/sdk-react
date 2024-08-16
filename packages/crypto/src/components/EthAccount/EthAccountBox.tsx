import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { assertEx } from '@xylabs/assert'
import { EthAddress } from '@xylabs/eth-address'
import type { FlexBoxProps } from '@xylabs/react-flexbox'
import { FlexRow } from '@xylabs/react-flexbox'
import { Identicon } from '@xylabs/react-identicon'
import React, { useContext } from 'react'

import { EthersContext } from '../../contexts/index.ts'
import type { EthAccountProps } from './EthAccountProps.tsx'

export const EthAccountBox: React.FC<EthAccountProps & FlexBoxProps> = ({
  address,
  icon = false,
  iconSize = 16,
  iconOnly = false,
  shortenedLength,
  height,
  addressLength = 'auto',
  fontFamily = '"Source Code Pro",monospace',
  removeMargin,
  ...props
}) => {
  const { localAddress } = useContext(EthersContext)
  const theme = useTheme()

  const large = useMediaQuery(theme.breakpoints.up('md'))

  const isLocalAddress = address ? localAddress?.toString() === address.toString() : false

  const addressToDisplay = assertEx(address ?? EthAddress.fromString('0x00'), () => 'Bad Eth Address')

  const textToDisplay
    = address
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
    <FlexRow height={height} justifyContent="space-between" alignItems="stretch" {...props}>
      {icon
        ? (
            <Identicon
              minWidth={iconSize + Number.parseInt(theme.spacing(1))}
              bgcolor={theme.palette.secondary.main}
              size={iconSize}
              value={address?.toHex()}
            />
          )
        : null}
      {iconOnly
        ? null
        : (
            <Typography alignSelf="center" marginX={removeMargin ? 0 : 1} variant="body1" fontFamily={fontFamily}>
              {textToDisplay}
            </Typography>
          )}
      {isLocalAddress
        ? <FlexRow marginLeft={0.5}>(You)</FlexRow>
        : null}
    </FlexRow>
  )
}
