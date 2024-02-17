import { Typography } from '@mui/material'
import { ButtonEx } from '@xylabs/react-button'
import { FlexRow } from '@xylabs/react-flexbox'

// eslint-disable-next-line import/no-internal-modules
import xyoLogo from './img/xyo.svg'
import { TokenAmountProps } from './TokenAmountProps'

const base10Shift = (value: bigint, places: number): bigint => {
  const factor = BigInt(10 ** Math.abs(places))
  return places > 0 ? value * factor : value / factor
}

export const TokenAmount: React.FC<TokenAmountProps> = ({
  textFontFamily = '"Source Code Pro",monospace',
  textColor,
  statusColor,
  style,
  amount,
  places = -18,
  logo,
  label,
  onButtonClick,
  ...props
}) => {
  const amountBigInt = amount ? BigInt(amount) : undefined
  const adjustedAmount = amountBigInt ? base10Shift(amountBigInt, places) : undefined

  const amountString = adjustedAmount === undefined ? '-' : adjustedAmount.toString(10)

  return (
    <ButtonEx style={{ backgroundColor: statusColor, ...style }} variant="outlined" onClick={onButtonClick} {...props}>
      <FlexRow justifyContent="space-between" width="100%" busy={amount === undefined} busySize={16}>
        <FlexRow>
          {logo ?
            <img src={xyoLogo} height={24} />
          : null}
          {label ?
            <Typography marginRight={1} marginLeft={logo ? 1 : 0} noWrap={true} fontFamily={textFontFamily} variant="caption">
              {label}
            </Typography>
          : null}
        </FlexRow>
        <Typography color={textColor} noWrap={true} fontFamily={textFontFamily} variant="body1" style={{ textTransform: 'none' }}>
          {amountString}
        </Typography>
      </FlexRow>
    </ButtonEx>
  )
}
