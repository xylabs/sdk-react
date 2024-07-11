/* eslint-disable import/no-cycle */
import { CreativeWork } from './CreativeWork.js'
import { MapCategoryType } from './MapCategoryType.js'

interface Map extends CreativeWork {
  mapType?: MapCategoryType
}

export type { Map }
