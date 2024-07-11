/* eslint-disable import/no-cycle */
import { AdministrativeArea } from './AdministrativeArea.js'
import { AggregateRating } from './AggregateRating.js'
import { GeoShape } from './GeoShape.js'
import { ImageObject } from './ImageObject.js'
import { Intangible } from './Intangible.js'
import { Offer } from './Offer.js'
import { Organization } from './Organization.js'
import { Person } from './Person.js'
import { Place } from './Place.js'
import { Product } from './Product.js'
import { Review } from './Review.js'
import { Text } from './Text.js'
import { Thing } from './Thing.js'
import { URL } from './URL.js'

//TODO: Resolve Anys
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
