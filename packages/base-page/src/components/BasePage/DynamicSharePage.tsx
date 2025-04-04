import type { FC } from 'react'
import React from 'react'

import { BasePage } from './BasePage.tsx'
import type { BasePageProps } from './BasePageProps.ts'

export const DynamicSharePage: FC<BasePageProps> = ({ metaServer, ...props }) => {
  return <BasePage {...props} metaServer={{ ...metaServer, shareMode: 'dynamic' }} />
}
