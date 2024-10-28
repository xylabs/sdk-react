import { createContextEx } from '../contextEx/index.ts'
import type { CollapsibleState } from './State.ts'

export const CollapsibleContext = createContextEx<CollapsibleState>()
