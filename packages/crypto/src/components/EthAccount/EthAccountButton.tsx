import { useTheme } from '@mui/material'
import { ButtonEx, ButtonExProps } from '@xylabs/react-button'
import { FlexRow } from '@xylabs/react-flexbox'
import { Identicon } from '@xylabs/react-identicon'
import { MouseEvent } from 'react'

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

  const theme = useTheme()

  return (
    <ButtonEx onClick={onClickLocal} title={`0x${address?.toHex()}`} {...props}>
      {icon ? (
        <FlexRow position="absolute" top={0} left={0} bottom={0} paddingX={0.5} bgcolor={theme.palette.secondary.main}>
          <Identicon
            minHeight={theme.spacing(3)}
            minWidth={theme.spacing(3)}
            bgcolor={theme.palette.secondary.main}
            size={iconSize}
            value={address?.toHex()}
          />
        </FlexRow>
      ) : null}
      <EthAccountBox
        marginLeft={icon ? 3 : 0}
        address={address}
        addressLength={addressLength}
        shortenedLength={shortenedLength}
        full={full}
        iconSize={iconSize}
        iconOnly={iconOnly}
        fontFamily={fontFamily}
      />
    </ButtonEx>
  )
}

/** @deprecated use EthAccountButton or EthAccountBox */
export const EthAccount = EthAccountButton
