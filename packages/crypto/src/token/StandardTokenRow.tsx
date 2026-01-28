import {
  Stack,
  Typography,
  type TypographyProps,
} from '@mui/material'
import { isUndefinedOrNull } from '@xylabs/typeof'
import * as React from 'react'

import { XL1ColorLogoIconSvg, XYOColorLogoIconSvg } from './img/index.ts'
import type { TokenAvatarProps } from './TokenAvatar.tsx'
import { TokenAvatar } from './TokenAvatar.tsx'

type StandardTokenRowProps = TokenAvatarProps & {
  currency: 'xyo' | 'xl1' | null
  customSymbol?: string
  showLabel?: boolean
  textVariant?: TypographyProps['variant']
  textWeight?: React.CSSProperties['fontWeight']
  value: React.ReactNode
}

export const StandardTokenRow: React.FC<StandardTokenRowProps> = ({
  currency,
  customSymbol,
  value,
  textVariant,
  textWeight = 300,
  children,
  sx,
  ...avatarProps
}) => {
  return (
    <Stack direction="row" spacing={0.5} alignItems="center" sx={sx}>
      <Stack direction="row" spacing={0.5} alignItems="center" sx={sx}>
        {currency === 'xyo'
          ? (
              <TokenAvatar
                imgAlt="xyo-token-logo"
                imgSrc={XYOColorLogoIconSvg}
                {...avatarProps}
              />
            )
          : (
              <TokenAvatar
                imgAlt="xl1-token-logo"
                imgSrc={XL1ColorLogoIconSvg}
                {...avatarProps}
              />
            )}
        <Typography
          variant={isUndefinedOrNull(textVariant) ? 'body1' : textVariant}
          fontWeight={textWeight}
        >
          {value}
        </Typography>
        <Typography
          variant={isUndefinedOrNull(textVariant) ? 'body1' : textVariant}
          fontWeight={textWeight}
          color="textSecondary"
          sx={{ textTransform: 'uppercase' }}
        >
          {customSymbol ?? currency}
        </Typography>
        {children}
      </Stack>
    </Stack>
  )
}
