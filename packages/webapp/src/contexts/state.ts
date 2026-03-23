import type { ProvidedContextExState } from '@xylabs/react-shared'

export interface TitleTemplateFields {
  titleTemplate: (title: string) => void
}

export type TitleTemplateState = ProvidedContextExState<TitleTemplateFields>
