import type { CardContentProps } from '@mui/material'
import {
  Alert, AlertTitle, CardContent, Chip, Divider, styled, Typography,
} from '@mui/material'
import type { EthAddress } from '@xylabs/eth-address'
import { FlexCol, FlexRow } from '@xylabs/react-flexbox'
import React from 'react'

export interface WalletOverviewCardContentProps extends CardContentProps {
  chainName?: string
  connectError?: Error
  connectRefused?: boolean
  currentAccount?: EthAddress
  signResponse?: EthAddress
}

export const WalletOverviewCardContent: React.FC<WalletOverviewCardContentProps> = ({
  chainName,
  connectError,
  connectRefused,
  currentAccount,
  signResponse,
}) => {
  return (
    <CardContent sx={{
      display: 'flex', flexDirection: 'column', gap: 2,
    }}
    >
      {window.parent === window
        ? null
        : (
            <Alert severity="warning">
              <AlertTitle>Avoid calling wallets inside of iFrames</AlertTitle>
            </Alert>
          )}
      <FlexRow justifyContent="space-between" alignItems="start" gap={2}>
        <FlexCol alignItems="start" justifyContent="start">
          <StyledTypographyHeading variant="overline">Approved Address:</StyledTypographyHeading>
          <Chip label={currentAccount ? currentAccount?.toShortString() : 'none'} />
        </FlexCol>
        <FlexCol alignItems="start" justifyContent="start">
          <StyledTypographyHeading variant="overline">Chain:</StyledTypographyHeading>
          <Chip label={chainName ?? 'unknown'} />
        </FlexCol>
      </FlexRow>
      <Divider flexItem />

      {connectRefused
        ? (
            <Alert severity="error">
              <AlertTitle>Connection Refused</AlertTitle>
              Error:
              {' '}
              {connectError?.message}
            </Alert>
          )
        : null}
      {signResponse
        ? (
            <Alert severity="success">
              <AlertTitle>Sign Response</AlertTitle>
              {signResponse.toShortString()}
            </Alert>
          )
        : null}
    </CardContent>
  )
}

const StyledTypographyHeading = styled(Typography, { name: 'StyledTypographyHeading' })(() => ({
  opacity: 0.7,
}))
