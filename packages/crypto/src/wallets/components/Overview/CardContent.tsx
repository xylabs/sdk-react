import { Alert, AlertTitle, CardContent, CardContentProps, Chip, Divider, styled, Typography } from '@mui/material'
import { EthAddress } from '@xylabs/eth-address'
import { FlexCol, FlexRow } from '@xylabs/react-flexbox'

export interface WalletOverviewCardContentProps extends CardContentProps {
  chainId?: number
  connectError?: Error
  connectRefused?: boolean
  currentAccount?: EthAddress
  signResponse?: EthAddress
}

export const WalletOverviewCardContent: React.FC<WalletOverviewCardContentProps> = ({
  chainId,
  connectError,
  connectRefused,
  currentAccount,
  signResponse,
}) => {
  return (
    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {window.parent !== window ? (
        <Alert severity={'warning'}>
          <AlertTitle>Avoid calling wallets inside of iFrames</AlertTitle>
        </Alert>
      ) : null}
      <FlexRow justifyContent="start" alignItems="start" gap={2}>
        <FlexCol alignItems="start" justifyContent="start">
          <StyledTypographyHeading variant="overline">Approved Address:</StyledTypographyHeading>
          <Chip label={currentAccount ? currentAccount?.toShortString() : 'none'} />
        </FlexCol>
        <FlexCol alignItems="start" justifyContent="start">
          <StyledTypographyHeading variant="overline">Chain Id:</StyledTypographyHeading>
          <Chip label={chainId ? chainId : 'unknown'} />
        </FlexCol>
      </FlexRow>
      <Divider flexItem />

      {connectRefused ? (
        <Alert severity={'error'}>
          <AlertTitle>Connection Refused</AlertTitle>
          Error: {connectError?.message}
        </Alert>
      ) : null}
      {signResponse ? (
        <Alert severity={'success'}>
          <AlertTitle>Sign Response</AlertTitle>
          {signResponse.toShortString()}
        </Alert>
      ) : null}
    </CardContent>
  )
}

const StyledTypographyHeading = styled(Typography, { name: 'StyledTypographyHeading' })(() => ({
  opacity: 0.7,
}))
