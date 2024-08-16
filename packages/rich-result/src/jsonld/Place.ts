import type { AggregateRating } from './AggregateRating.ts'
import type { GeospatialGeometry } from './GeospatialGeometry.ts'
import type { ImageObject } from './ImageObject.ts'
import type { Integer } from './Integer.ts'
import type { Map } from './Map.ts'
import type { Photograph } from './Photograph.ts'
import type { PostalAddress } from './PostalAddress.ts'
import type { PropertyValue } from './PropertyValue.ts'
import type { Review } from './Review.ts'
import type { Text } from './Text.ts'
import type { Thing } from './Thing.ts'
import type { URL } from './URL.ts'

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
