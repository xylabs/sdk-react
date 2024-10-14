import React, { forwardRef } from 'react'

import { ButtonExBase } from './ButtonExBase.tsx'
import type { ButtonExProps } from './ButtonExProps.tsx'
import { ButtonToEx } from './ButtonExTo.tsx'

const ButtonEx = forwardRef<HTMLButtonElement, ButtonExProps>((props, ref) => {
  if (props.to) {
    const { to, ...additionalProps } = props
    return <ButtonToEx to={to} ref={ref} {...additionalProps} />
  } else {
    return <ButtonExBase {...props} />
  }
})

ButtonEx.displayName = 'ButtonExXYLabs'

export { ButtonEx }
