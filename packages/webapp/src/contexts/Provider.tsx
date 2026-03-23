import type { PropsWithChildren } from 'react'
import React, { useMemo } from 'react'

import { TitleTemplateContext } from './context.ts'
import type { TitleTemplateState } from './state.ts'

export interface TitleTemplateProviderProps extends PropsWithChildren {
  appName: string
}

export const TitleTemplateProvider: React.FC<TitleTemplateProviderProps> = ({ appName, children }) => {
  const value = useMemo(() => {
    const value: TitleTemplateState = { provided: true, titleTemplate: title => `${title} | ${appName}` }
    return value
  }, [appName])

  return (
    <TitleTemplateContext value={value}>
      {children}
    </TitleTemplateContext>
  )
}
