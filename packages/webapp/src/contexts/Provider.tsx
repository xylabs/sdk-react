import type { PropsWithChildren } from 'react'
import React, {
  useLayoutEffect, useMemo, useState,
} from 'react'

import { TitleTemplateContext } from './context.ts'
import type { TitleTemplateState } from './state.ts'

export interface TitleTemplateProviderProps extends PropsWithChildren {
  appName: string
}

export const TitleTemplateProvider: React.FC<TitleTemplateProviderProps> = ({ appName, children }) => {
  const [title, setTitle] = useState('')
  const value = useMemo(() => {
    const value: TitleTemplateState = { provided: true, titleTemplate: title => setTitle(`${title} | ${appName}`) }
    return value
  }, [appName])

  useLayoutEffect(() => {
    if (title) {
      const existing = document.querySelector('title')
      if (existing) {
        existing.textContent = title
      } else {
        const el = document.createElement('title')
        el.textContent = title
        document.head.append(el)
      }
    }
  }, [title])

  return (
    <TitleTemplateContext value={value}>
      {children}
    </TitleTemplateContext>
  )
}
