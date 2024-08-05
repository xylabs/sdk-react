import { AggregateRating } from './AggregateRating.ts'
import { GeospatialGeometry } from './GeospatialGeometry.ts'
import { ImageObject } from './ImageObject.ts'
import { Integer } from './Integer.ts'
import { Map } from './Map.ts'
import { Photograph } from './Photograph.ts'
import { PostalAddress } from './PostalAddress.ts'
import { PropertyValue } from './PropertyValue.ts'
import { Review } from './Review.ts'
import { Text } from './Text.ts'
import { Thing } from './Thing.ts'
import { URL } from './URL.ts'

interface Place extends Thing, GeospatialGeometry {
  additionalProperty?: PropertyValue
  address?: PostalAddress | Text
  aggregateRating?: AggregateRating
  amenityFeature?: unknown
  branchCode?: Text
  containedInPlace?: Place
  containsPlace?: Place
  event?: Event
  geo?: unknown
  geoLocationNumber?: Text
  hasDriveThroughService?: boolean
  hasMap?: Map | URL
  isAccessibleForFree?: boolean
  isicV4?: Text
  latitude?: number | Text
  logo?: ImageObject | URL
  longitude?: number | Text
  maximumAttendeeCapacity?: Integer
  openingHoursSpecification?: unknown
  photo?: ImageObject | Photograph
  publicAccess?: boolean
  review?: Review
  slogan?: Text
  smokingAllowed?: boolean
  specialOpeningHoursSpecification?: unknown
  telephone?: Text
  tourBookingPage?: URL
}

export type { Place }
