import { useContextEx } from '@xylabs/react-shared'

import { TitleTemplateContext } from './context.ts'

export const useTitleTemplate = () => useContextEx(TitleTemplateContext, 'TitleTemplate', false)
