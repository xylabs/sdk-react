import type { EnumValue } from '@xylabs/sdk-js'
import { Enum } from '@xylabs/sdk-js'

export const MapCategoryType = Enum({
  ParkingMap: 'ParkingMap',
  SeatingMap: 'SeatingMap',
  TransitMap: 'TransitMap',
  VenueMap: 'VenueMap',
})

export type MapCategoryType = EnumValue<typeof MapCategoryType>
