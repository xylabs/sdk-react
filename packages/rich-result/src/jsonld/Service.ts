import type { AdministrativeArea } from './AdministrativeArea.ts'
import type { AggregateRating } from './AggregateRating.ts'
import type { GeoShape } from './GeoShape.ts'
import type { ImageObject } from './ImageObject.ts'
import type { Intangible } from './Intangible.ts'
import type { Offer } from './Offer.ts'
import type { Organization } from './Organization.ts'
import type { Person } from './Person.ts'
import type { Place } from './Place.ts'
import type { Product } from './Product.ts'
import type { Review } from './Review.ts'
import type { Text } from './Text.ts'
import type { Thing } from './Thing.ts'
import type { URL } from './URL.ts'

// TODO: Resolve Anys
interface Service extends Intangible {
  aggregateRating?: AggregateRating
  areaServed?: AdministrativeArea | GeoShape | Place | Text
  audience?: unknown
  availableChannel?: unknown
  award?: Text
  brand?: unknown | Organization
  broker?: Organization | Person
  category?: unknown | Text | Thing | URL
  hasOfferCatalog?: unknown
  hoursAvailable?: unknown
  isRelatedTo?: Product | Service
  isSimilarTo?: Product | Service
  logo?: ImageObject | URL
  offers?: Offer[]
  provider?: Organization | Person
  providerMobility?: Text
  review?: Review
  serviceOutput?: Thing
  serviceType?: unknown | Text
  slogan?: Text
  termsOfService?: Text | URL
}

export type { Service }
