import { createContextEx } from '@xylabs/react-shared'

import type { TitleTemplateState } from './state.ts'

export const TitleTemplateContext = createContextEx<TitleTemplateState>()
