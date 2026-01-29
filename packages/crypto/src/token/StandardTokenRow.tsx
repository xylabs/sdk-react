import {
  Stack,
  Typography,
  type TypographyProps,
} from '@mui/material'
import { isUndefinedOrNull } from '@xylabs/sdk-js'
import React, { PropsWithChildren } from 'react'

import { XL1ColorLogoIconSvg, XYOColorLogoIconSvg } from './img/index.ts'
import type { TokenAvatarProps } from './TokenAvatar.tsx'
import { TokenAvatar } from './TokenAvatar.tsx'

type StandardTokenRowProps = PropsWithChildren<{
  currency: 'xyo' | 'xl1' | null
  customSymbol?: string
  symbolOverride?: React.ReactNode
  textVariant?: TypographyProps['variant']
  textWeight?: React.CSSProperties['fontWeight']
  tokenAvatarProps?: TokenAvatarProps
  value: React.ReactNode
  valueOverride?: React.ReactNode
}>

export const StandardTokenRow: React.FC<StandardTokenRowProps> = ({
  currency,
  customSymbol,
  value,
  textVariant,
  textWeight = 300,
  children,
  tokenAvatarProps,
  valueOverride,
  symbolOverride,
}) => {
  return (
    <Stack direction="row" spacing={0.5} alignItems="center">
      {currency === 'xyo'
        ? (
            <TokenAvatar
              imgAlt="xyo-token-logo"
              imgSrc={XYOColorLogoIconSvg}
              {...tokenAvatarProps}
            />
          )
        : (
            <TokenAvatar
              imgAlt="xl1-token-logo"
              imgSrc={XL1ColorLogoIconSvg}
              {...tokenAvatarProps}
            />
          )}
      {valueOverride ?? (
        <Typography
          variant={isUndefinedOrNull(textVariant) ? 'body1' : textVariant}
          fontWeight={textWeight}
          lineHeight={1}
        >
          {value}
        </Typography>
      )}
      {symbolOverride ?? (
        <Typography
          variant={isUndefinedOrNull(textVariant) ? 'body1' : textVariant}
          fontWeight={textWeight}
          color="textSecondary"
          lineHeight={1}
          sx={{ textTransform: 'uppercase' }}
        >
          {customSymbol ?? currency}
        </Typography>
      )}
      {children}
    </Stack>
  )
}
