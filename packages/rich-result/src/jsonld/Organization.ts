/* eslint-disable import/no-cycle */
import { AdministrativeArea } from './AdministrativeArea.js'
import { AggregateRating } from './AggregateRating.js'
import { Article } from './Article.js'
import { Brand } from './Brand.js'
import { ContactPoint } from './ContactPoint.js'
import { CreativeWork } from './CreativeWork.js'
import { DateTime } from './DateTime.js'
import { GeoShape } from './GeoShape.js'
import { Language } from './Language.js'
import { Offer } from './Offer.js'
import { Person } from './Person.js'
import { Place } from './Place.js'
import { PostalAddress } from './PostalAddress.js'
import { Product } from './Product.js'
import { QuantitativeValue } from './QuantitativeValue.js'
import { Review } from './Review.js'
import { Text } from './Text.js'
import { Thing } from './Thing.js'
import { VirtualLocation } from './VirtualLocation.js'

//TODO: Resolve Anys
interface Organization extends Thing {
  actionableFeedbackPolicy?: CreativeWork | URL
  address?: PostalAddress | Text
  aggregateRating?: AggregateRating
  alumni?: Person
  areaServed?: AdministrativeArea | GeoShape | Place | Text
  award?: Text
  brand?: Brand
  contactPoint?: ContactPoint
  correctionsPolicy?: CreativeWork | URL
  department?: Organization
  dissolutionDate?: DateTime
  diversityPolicy?: CreativeWork | URL
  diversityStaffingReport?: Article | URL
  duns?: Text
  email?: Text
  employee?: Person | Person[]
  ethicsPolicy?: CreativeWork | URL
  event?: Event
  faxNumber?: Text
  founder?: Person | Text
  founders?: (Person | Text)[]
  foundingDate?: DateTime
  foundingLocation?: Place
  funder?: Organization | Person
  globalLocationNumber?: Text
  hasCredential?: unknown
  hasMerchantReturnPolicy?: unknown
  hasOfferCatalog?: unknown
  hasPOS?: Place
  interactionStatistic?: unknown
  isicV4?: Text
  knowsAbout?: Text | Thing | URL
  knowsLanguage?: Language | Text
  legalName?: Text
  location?: Place | PostalAddress | Text | VirtualLocation
  logo?: unknown
  makesOffer?: Offer
  member?: Organization | Person
  memberOf?: Organization | unknown
  naics?: Text
  nonprofitStatus?: unknown
  numberOfEmployees?: QuantitativeValue
  ownershipFundingInfo?: unknown | CreativeWork | Text | URL
  owns?: unknown | Product
  parentOrganization?: Organization
  publishingPrinciples?: CreativeWork | URL
  review?: Review
  seeks?: unknown
  slogan?: Text
  sponsor?: Organization | Person
  subOrganization?: Organization
  taxID?: Text
  telephone?: Text
  unnamedSourcesPolicy?: CreativeWork | URL
  vatID?: Text
}

export type { Organization }
