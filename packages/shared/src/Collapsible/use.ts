import { useContextEx } from '../contextEx/index.ts'
import { CollapsibleContext } from './context.ts'

export const useCollapsible = () => useContextEx(CollapsibleContext, 'Collapsible', false)
