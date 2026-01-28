import { Cancel, Check } from '@mui/icons-material'
import type { CardContentProps } from '@mui/material'
import {
  Alert, AlertTitle, CardContent, Chip, Divider, styled, Typography,
} from '@mui/material'
import type { EthAddressWrapper } from '@xylabs/eth-address'
import { FlexCol, FlexRow } from '@xylabs/react-flexbox'
import { isDefined } from '@xylabs/typeof'
import type { TypedDataDomain } from 'ethers/hash'
import React, { useMemo } from 'react'

import type {
  EthWallet, TypedDataTypes, TypedDataValues,
} from '../../types/index.ts'

export interface WalletOverviewCardContentProps extends CardContentProps {
  chainName?: string
  connectError?: Error
  connectRefused?: boolean
  currentAccount?: EthAddressWrapper
  domain: TypedDataDomain
  signResponse?: string
  types?: TypedDataTypes
  validateTypedDataSignature?: boolean
  values?: TypedDataValues
  verifyTypedDataSignature?: EthWallet['verifyTypedDataSignature']
}

export const WalletOverviewCardContent: React.FC<WalletOverviewCardContentProps> = ({
  chainName,
  connectError,
  connectRefused,
  currentAccount,
  signResponse,
  domain,
  types,
  values,
  validateTypedDataSignature,
  verifyTypedDataSignature,
  sx,
  ...props
}) => {
  const validSignature = useMemo(() => {
    if (isDefined(signResponse) && isDefined(types) && isDefined(values) && isDefined(currentAccount) && validateTypedDataSignature) {
      return verifyTypedDataSignature?.(domain, types, values, signResponse, currentAccount.toString())
    }
  }, [signResponse, validateTypedDataSignature, domain, types, values, currentAccount, verifyTypedDataSignature])

  return (
    <CardContent
      sx={{
        display: 'flex', flexDirection: 'column', gap: 2, ...sx,
      }}
      {...props}
    >
      {window.parent === globalThis as unknown as Window
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
      {isDefined(signResponse)
        ? (
            <Alert severity="success">
              <AlertTitle>Sign Response</AlertTitle>
              {signResponse}
              {validateTypedDataSignature
                ? validSignature
                  ? (
                      <span>
                        <Check />
                        {' '}
                        Verified Signature
                      </span>
                    )
                  : (
                      <span>
                        <Cancel color="error" />
                        {' '}
                        Could not verify signature
                      </span>
                    )
                : null}
            </Alert>
          )
        : null}
    </CardContent>
  )
}

const StyledTypographyHeading = styled(Typography, { name: 'StyledTypographyHeading' })(() => ({ opacity: 0.7 }))
