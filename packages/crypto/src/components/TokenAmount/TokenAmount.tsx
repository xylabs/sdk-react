import { Typography } from '@mui/material'
import { assertEx } from '@xylabs/assert'
import { ButtonEx } from '@xylabs/react-button'
import { FlexRow } from '@xylabs/react-flexbox'
import React from 'react'

// eslint-disable-next-line import-x/no-internal-modules
import xyoLogo from './img/xyo.svg'
import type { TokenAmountProps } from './TokenAmountProps.tsx'

const placesSplit = (value: bigint, places: number): [bigint, bigint] => {
  assertEx(places >= 0, () => 'Places has to be >= 0')
  const factor = BigInt(10 ** Math.abs(places))
  const remainder = value % factor
  const wholeValue = value / factor
  return [wholeValue, remainder]
}

const placesSplitString = (value: bigint, places: number): string => {
  const [wholeValue, remainder] = placesSplit(value, places)
  return `${wholeValue}.${remainder.toString().padStart(Math.abs(places), '0')}`
}

export const TokenAmount: React.FC<TokenAmountProps> = ({
  textFontFamily = '"Source Code Pro",monospace',
  textColor,
  statusColor,
  style,
  amount,
  places = 18,
  logo,
  label,
  onButtonClick,
  ...props
}) => {
  const amountString = amount ? placesSplitString(amount, places) : '-'

  return (
    <ButtonEx
      style={{ backgroundColor: statusColor, ...style }}
      variant="outlined"
      onClick={onButtonClick}
      {...props}
    >
      <FlexRow justifyContent="space-between" width="100%" busy={amount === undefined} busySize={16}>
        <FlexRow>
          {logo
            ? <img src={xyoLogo} height={24} />
            : null}
          {label
            ? (
                <Typography marginRight={1} marginLeft={logo ? 1 : 0} noWrap={true} fontFamily={textFontFamily} variant="caption">
                  {label}
                </Typography>
              )
            : null}
        </FlexRow>
        <Typography color={textColor} noWrap={true} fontFamily={textFontFamily} variant="body1" style={{ textTransform: 'none' }}>
          {amountString}
        </Typography>
      </FlexRow>
    </ButtonEx>
  )
}
