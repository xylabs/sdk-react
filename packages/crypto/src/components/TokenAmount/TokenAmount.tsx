import { Typography } from '@mui/material'
import { ButtonEx } from '@xylabs/react-button'
import { FlexRow } from '@xylabs/react-flexbox'
import { BigNumber } from '@xylabs/sdk-js'

import xyoLogo from './img/xyo.svg'
import { TokenAmountProps } from './TokenAmountProps'

const base10Shift = (bn: BigNumber, places: number) => {
  const factor = new BigNumber(10).pow(new BigNumber(Math.abs(places)))
  if (places > 0) {
    return bn.mul(factor)
  } else {
    return bn.div(factor)
  }
}

const TokenAmount: React.FC<TokenAmountProps> = ({
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
  const adjustedAmount = amount ? base10Shift(amount, places).toNumber() : undefined

  const amountString = adjustedAmount ? Math.trunc(adjustedAmount).toLocaleString() : '-'

  return (
    <ButtonEx style={{ backgroundColor: statusColor, ...style }} variant="outlined" onClick={onButtonClick} {...props}>
      <FlexRow justifyContent="space-between" width="100%" busy={amount === undefined} busySize={16}>
        <FlexRow>
          {logo ? <img src={xyoLogo} height={24} /> : null}
          {label ? (
            <Typography marginRight={1} marginLeft={logo ? 1 : 0} noWrap={true} fontFamily={textFontFamily} variant="caption">
              {label}
            </Typography>
          ) : null}
        </FlexRow>
        <Typography color={textColor} noWrap={true} fontFamily={textFontFamily} variant="body1" style={{ textTransform: 'none' }}>
          {amountString}
        </Typography>
      </FlexRow>
    </ButtonEx>
  )
}

export { TokenAmount }
