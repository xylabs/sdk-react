import { CreativeWork } from './CreativeWork.ts'
import { MapCategoryType } from './MapCategoryType.ts'

interface Map extends CreativeWork {
  mapType?: MapCategoryType
}

export type { Map }
