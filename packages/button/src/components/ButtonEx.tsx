import React, { forwardRef } from 'react'

import { ButtonExBase } from './ButtonExBase.tsx'
import type { ButtonExProps } from './ButtonExProps.tsx'
import { ButtonToEx } from './ButtonExTo.tsx'

const ButtonEx = forwardRef<HTMLButtonElement, ButtonExProps>(({ to, ...props }, ref) => {
  return to ? <ButtonToEx to={to} ref={ref} {...props} /> : <ButtonExBase {...props} />
})

ButtonEx.displayName = 'ButtonExXYLabs'

export { ButtonEx }
