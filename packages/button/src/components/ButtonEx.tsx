import { forwardRef } from 'react'

import { ButtonExBase } from './ButtonExBase'
import { ButtonExProps } from './ButtonExProps'
import { ButtonToEx } from './ButtonExTo'

const ButtonEx = forwardRef<HTMLButtonElement, ButtonExProps>(({ to, ...props }, ref) => {
  if (to) {
    return <ButtonToEx to={to} ref={ref} {...props} />
  } else {
    return <ButtonExBase {...props} />
  }
})

ButtonEx.displayName = 'ButtonExXYLabs'

export { ButtonEx }
