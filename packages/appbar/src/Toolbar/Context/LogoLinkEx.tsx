import { Typography, useTheme } from '@mui/material'
import { assertEx } from '@xylabs/assert'
import { FlexRow } from '@xylabs/react-flexbox'
import type { LinkExProps } from '@xylabs/react-link'
import { LinkEx } from '@xylabs/react-link'
import type { ReactNode } from 'react'
import React from 'react'

import { Logo } from './Logo.tsx'

export type LogoLinkExProps = LinkExProps & {
  logo?: ReactNode
  version?: boolean | string
}

export const LogoLinkEx: React.FC<LogoLinkExProps> = ({
  logo, to = '/', href, version = false, ...props
}) => {
  const theme = useTheme()
  assertEx(href === undefined, () => 'href is not supported')
  return (
    <LinkEx to={to} {...props}>
      <FlexRow paddingX="4px">
        {logo ?? (
          <Logo sx={{
            color: theme.palette.primary.contrastText, height: '40px', width: '40px',
          }}
          />
        )}
        {version
          ? (
              <Typography
                position="absolute"
                borderRadius={1}
                right={6}
                color={theme.palette.getContrastText(theme.palette.text.primary)}
                bottom={0}
                bgcolor={theme.palette.text.primary}
                paddingX="2px"
                lineHeight={1}
                variant="caption"
                border={`1px ${theme.palette.getContrastText(theme.palette.primary.main)} solid`}
              >
                {typeof version === 'string' ? version : '2.1'}
              </Typography>
            )
          : null}
      </FlexRow>
    </LinkEx>
  )
}
