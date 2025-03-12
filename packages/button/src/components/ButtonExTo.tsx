import type { MouseEvent } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ButtonExBase } from './ButtonExBase.tsx'
import type { ButtonExProps } from './ButtonExProps.tsx'

const ButtonToEx = ({
  ref, to, toOptions, onClick, ...props
}: ButtonExProps & { ref?: React.RefObject<HTMLButtonElement | null> }) => {
  const navigate = useNavigate()
  const localOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event)
    if (to) {
      void navigate(to, toOptions)
    }
  }

  return <ButtonExBase ref={ref} onClick={localOnClick} {...props} />
}

ButtonToEx.displayName = 'ButtonToExXYLabs'

export { ButtonToEx }
