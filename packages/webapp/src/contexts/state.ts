import type { ProvidedContextExState } from '@xylabs/react-shared'

export interface TitleTemplateFields {
  titleTemplate: (title: string) => string
}

export type TitleTemplateState = ProvidedContextExState<TitleTemplateFields>
