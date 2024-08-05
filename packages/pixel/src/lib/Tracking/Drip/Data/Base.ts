import { DripResult } from './Result.ts'

interface DripBaseData extends Record<string, unknown> {
  failure?: (result?: DripResult) => void
  success?: (result?: DripResult) => void
}

export type { DripBaseData }
