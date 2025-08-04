import {
  Link, Paper, Typography,
} from '@mui/material'
import { ButtonEx } from '@xylabs/react-button'
import { FlexRow } from '@xylabs/react-flexbox'
import { isString } from '@xylabs/typeof'
import React, { useEffect } from 'react'

import { useCookieConsent } from '../contexts/index.ts'
import type { CookieConsentProps } from './CookieConsentProps.tsx'

export const CookieConsentBody: React.FC<CookieConsentProps> = ({
  acceptOnScroll, acceptOnTimer = 0, onAccept, ...props
}) => {
  const {
    accepted, setAccepted, storageName,
  } = useCookieConsent()

  const onScroll = () => {
    // hide it one the user has scrolled at least one page
    if (window.scrollY > window.innerHeight && !accepted) {
      onAcceptClick()
    }
  }

  useEffect(() => {
    if (acceptOnScroll) {
      window.addEventListener('scroll', onScroll)

      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }
  })

  const onAcceptClick = () => {
    if (setAccepted) {
      setAccepted?.(true)
    } else {
      localStorage.setItem(storageName ?? 'CookiesAccepted', 'true')
    }
    onAccept?.(true)
  }

  if (acceptOnTimer > 0 && !accepted) {
    setTimeout(() => {
      onAcceptClick()
    }, acceptOnTimer)
  }

  if (isString(storageName)) {
    return (
      <FlexRow justifyContent="center" paddingY={2} {...props}>
        <Typography color="error" variant="body1">
          Missing CookieConsentContext
        </Typography>
      </FlexRow>
    )
  }

  return accepted
    ? null
    : (
        <Paper
          elevation={24}
          sx={{
            borderRadius: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'fixed',
            bottom: 0,
            maxWidth: '100vw',
            width: '100%',
            zIndex: 1000,
          }}
          {...props}
        >
          <Typography variant="body2" margin={2}>
            {'This site uses '}
            <Link
              href="https://cookiesandyou.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              cookies
            </Link>
            {' and '}
            <Link
              href="https://policies.google.com/technologies/partner-sites"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google&nbsp;tools
            </Link>
            {' to analyze traffic and for ads measurement purposes.'}
          </Typography>
          <ButtonEx disableUserEvents variant="contained" color="primary" onClick={onAcceptClick} margin={2}>
            Accept
          </ButtonEx>
        </Paper>
      )
}
