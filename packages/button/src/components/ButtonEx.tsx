import { forwardRef } from 'react'

import { ButtonExBase } from './ButtonExBase.jsx'
import { ButtonExProps } from './ButtonExProps.jsx'
import { ButtonToEx } from './ButtonExTo.jsx'

const ButtonEx = forwardRef<HTMLButtonElement, ButtonExProps>(({ to, ...props }, ref) => {
  return to ? <ButtonToEx to={to} ref={ref} {...props} /> : <ButtonExBase {...props} />
})

ButtonEx.displayName = 'ButtonExXYLabs'

export { ButtonEx }
