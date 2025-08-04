import React from 'react'

import { ButtonExBase } from './ButtonExBase.tsx'
import type { ButtonExProps } from './ButtonExProps.tsx'
import { ButtonToEx } from './ButtonExTo.tsx'

const ButtonEx = ({ ref, ...props }: ButtonExProps) => {
  if (props.to === undefined) {
    return <ButtonExBase {...props} />
  } else {
    const { to, ...additionalProps } = props
    return <ButtonToEx to={to} ref={ref} {...additionalProps} />
  }
}

ButtonEx.displayName = 'ButtonExXYLabs'

export { ButtonEx }
