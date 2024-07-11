import { DripResult } from './Result.js'

interface DripBaseData extends Record<string, unknown> {
  failure?: (result?: DripResult) => void
  success?: (result?: DripResult) => void
}

export type { DripBaseData }
