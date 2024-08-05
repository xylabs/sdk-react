import { AdministrativeArea } from './AdministrativeArea.ts'
import { AggregateRating } from './AggregateRating.ts'
import { Article } from './Article.ts'
import { Brand } from './Brand.ts'
import { ContactPoint } from './ContactPoint.ts'
import { CreativeWork } from './CreativeWork.ts'
import { DateTime } from './DateTime.ts'
import { GeoShape } from './GeoShape.ts'
import { Language } from './Language.ts'
import { Offer } from './Offer.ts'
import { Person } from './Person.ts'
import { Place } from './Place.ts'
import { PostalAddress } from './PostalAddress.ts'
import { Product } from './Product.ts'
import { QuantitativeValue } from './QuantitativeValue.ts'
import { Review } from './Review.ts'
import { Text } from './Text.ts'
import { Thing } from './Thing.ts'
import { VirtualLocation } from './VirtualLocation.ts'

// TODO: Resolve Anys
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
