import { forwardRef } from 'react'

import { ButtonExBase } from './ButtonExBase'
import { ButtonExProps } from './ButtonExProps'
import { ButtonExTo } from './ButtonExTo'

const ButtonEx = forwardRef<HTMLButtonElement, ButtonExProps>(({ to, ...props }, ref) => {
  if (to) {
    return <ButtonExTo to={to} ref={ref} {...props} />
  } else {
    return <ButtonExBase {...props} />
  }
})

ButtonEx.displayName = 'ButtonEx [XY Labs]'

export { ButtonEx }
