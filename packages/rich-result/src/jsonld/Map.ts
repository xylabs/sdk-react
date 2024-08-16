import type { CreativeWork } from './CreativeWork.ts'
import type { MapCategoryType } from './MapCategoryType.ts'

interface Map extends CreativeWork {
  mapType?: MapCategoryType
}

export type { Map }
