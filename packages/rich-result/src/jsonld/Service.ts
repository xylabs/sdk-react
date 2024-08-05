import { AdministrativeArea } from './AdministrativeArea.ts'
import { AggregateRating } from './AggregateRating.ts'
import { GeoShape } from './GeoShape.ts'
import { ImageObject } from './ImageObject.ts'
import { Intangible } from './Intangible.ts'
import { Offer } from './Offer.ts'
import { Organization } from './Organization.ts'
import { Person } from './Person.ts'
import { Place } from './Place.ts'
import { Product } from './Product.ts'
import { Review } from './Review.ts'
import { Text } from './Text.ts'
import { Thing } from './Thing.ts'
import { URL } from './URL.ts'

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
