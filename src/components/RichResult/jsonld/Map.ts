/* eslint-disable import/no-cycle */
import { CreativeWork } from './CreativeWork'
import { MapCategoryType } from './MapCategoryType'

interface Map extends CreativeWork {
  mapType?: MapCategoryType
}

export type { Map }
