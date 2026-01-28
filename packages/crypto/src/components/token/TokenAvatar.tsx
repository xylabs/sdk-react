import {
  Avatar, type AvatarProps, type TypographyProps, useTheme,
} from '@mui/material'
import type { ImgHTMLAttributes } from 'react'
import React from 'react'

type Variant = NonNullable<TypographyProps['variant']>

export interface TokenAvatarProps extends AvatarProps {
  imgAlt?: ImgHTMLAttributes<HTMLImageElement>['alt']
  imgSrc?: ImgHTMLAttributes<HTMLImageElement>['src']
  scale?: number
  typographyVariant?: Variant
}

export const TokenAvatar: React.FC<TokenAvatarProps> = ({
  imgSrc,
  imgAlt,
  scale = 1.6,
  sx,
  typographyVariant = 'inherit',
  ...props
}) => {
  const theme = useTheme()
  const v = typographyVariant === 'inherit' ? 'body1' : typographyVariant
  const typ = theme.typography[v as Exclude<Variant, 'inherit'>] as { fontSize?: number | string }
  const base = typeof typ?.fontSize === 'number'
    ? typ.fontSize
    : typeof typ?.fontSize === 'string' && typ.fontSize.endsWith('rem')
      ? Number.parseFloat(typ.fontSize) * (theme.typography.htmlFontSize ?? 16)
      : typeof typ?.fontSize === 'string'
        ? Number.parseFloat(typ.fontSize)
        : 16
  const size = Math.max(0, Math.round(base * scale))

  return (
    <Avatar
      alt={imgAlt}
      src={imgSrc}
      sx={{
        width: size, height: size, ...sx,
      }}
      {...props}
    />
  )
}
