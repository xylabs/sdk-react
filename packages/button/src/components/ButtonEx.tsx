import { forwardRef } from 'react'

import { ButtonExBase } from './ButtonExBase'
import { ButtonExProps } from './ButtonExProps'
import { ButtonToEx } from './ButtonExTo'

const ButtonEx = forwardRef<HTMLButtonElement, ButtonExProps>(({ to, ...props }, ref) => {
  return to ? <ButtonToEx to={to} ref={ref} {...props} /> : <ButtonExBase {...props} />
})

ButtonEx.displayName = 'ButtonExXYLabs'

export { ButtonEx }
