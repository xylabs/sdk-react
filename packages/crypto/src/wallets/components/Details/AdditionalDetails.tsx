import { Button, Collapse, List, ListItem } from '@mui/material'
import { EthAddress } from '@xylabs/eth-address'
import { useState } from 'react'

export interface WalletDisplayAdditionalDetailsProps {
  connectErrorMessage?: string
  connectRefused?: boolean
  signer?: boolean
  signerAddress?: EthAddress
}

export const WalletDisplayAdditionalDetails: React.FC<WalletDisplayAdditionalDetailsProps> = ({
  connectErrorMessage,
  connectRefused,
  signer,
  signerAddress,
}) => {
  const [showMore, setShowMore] = useState(false)
  const handleClick = () => setShowMore(!showMore)
  return (
    <>
      <Button size="small" variant="contained" onClick={handleClick}>
        Additional Details
      </Button>
      <Collapse in={showMore}>
        <List sx={{ py: 0 }}>
          <ListItem>Signer: {JSON.stringify(!!signer)}</ListItem>
          <ListItem>Signer Address: {signerAddress?.toShortString()}</ListItem>
          <ListItem>Connection Refused: {JSON.stringify(connectRefused)}</ListItem>
          <ListItem>Error: {connectErrorMessage}</ListItem>
        </List>
      </Collapse>
    </>
  )
}
