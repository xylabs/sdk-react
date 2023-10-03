import { forwardRef, MouseEvent } from 'react'
import * as ReactRouterDom from 'react-router-dom'
import type { useHistory } from 'react-router-dom-5'

import { ButtonExBase } from './ButtonExBase'
import { ButtonExProps } from './ButtonExProps'

const isReactRouter6 = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return !!(ReactRouterDom as any)?.useNavigate
}

const ButtonToEx6 = forwardRef<HTMLButtonElement, ButtonExProps>(({ to, toOptions, onClick, ...props }, ref) => {
  const navigate = ReactRouterDom.useNavigate()
  const localOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event)
    if (to) {
      navigate(to, toOptions)
    }
  }

  return <ButtonExBase ref={ref} onClick={localOnClick} {...props} />
})

ButtonToEx6.displayName = 'ButtonToExXYLabs'

const ButtonToEx5 = forwardRef<HTMLButtonElement, ButtonExProps>(({ to, toOptions, onClick, ...props }, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const history = ((ReactRouterDom as any).useHistory as typeof useHistory)()
  const localOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event)
    if (to) {
      history.push(to, toOptions?.state)
    }
  }

  return <ButtonExBase ref={ref} onClick={localOnClick} {...props} />
})

ButtonToEx5.displayName = 'ButtonToExXYLabs'

const ButtonToEx = isReactRouter6() ? ButtonToEx6 : ButtonToEx5

export { ButtonToEx }
