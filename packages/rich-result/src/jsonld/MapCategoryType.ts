import type { EnumValue } from '@xylabs/enum'
import { Enum } from '@xylabs/enum'

export const MapCategoryType = Enum({
  ParkingMap: 'ParkingMap',
  SeatingMap: 'SeatingMap',
  TransitMap: 'TransitMap',
  VenueMap: 'VenueMap',
})

export type MapCategoryType = EnumValue<typeof MapCategoryType>
