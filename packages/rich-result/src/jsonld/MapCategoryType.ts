import type { EnumValue } from '@xylabs/object'
import { Enum } from '@xylabs/object'

export const MapCategoryType = Enum({
  ParkingMap: 'ParkingMap',
  SeatingMap: 'SeatingMap',
  TransitMap: 'TransitMap',
  VenueMap: 'VenueMap',
})

export type MapCategoryType = EnumValue<typeof MapCategoryType>
