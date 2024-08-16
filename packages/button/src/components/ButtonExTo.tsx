import type { MouseEvent } from 'react'
import React, { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { ButtonExBase } from './ButtonExBase.tsx'
import type { ButtonExProps } from './ButtonExProps.tsx'

const ButtonToEx = forwardRef<HTMLButtonElement, ButtonExProps>(({ to, toOptions, onClick, ...props }, ref) => {
  const navigate = useNavigate()
  const localOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event)
    if (to) {
      navigate(to, toOptions)
    }
  }

  return <ButtonExBase ref={ref} onClick={localOnClick} {...props} />
})

ButtonToEx.displayName = 'ButtonToExXYLabs'

export { ButtonToEx }
