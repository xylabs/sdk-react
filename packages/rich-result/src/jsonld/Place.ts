/* eslint-disable import/no-cycle */

import { AggregateRating } from './AggregateRating.js'
import { GeospatialGeometry } from './GeospatialGeometry.js'
import { ImageObject } from './ImageObject.js'
import { Integer } from './Integer.js'
import { Map } from './Map.js'
import { Photograph } from './Photograph.js'
import { PostalAddress } from './PostalAddress.js'
import { PropertyValue } from './PropertyValue.js'
import { Review } from './Review.js'
import { Text } from './Text.js'
import { Thing } from './Thing.js'
import { URL } from './URL.js'

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
