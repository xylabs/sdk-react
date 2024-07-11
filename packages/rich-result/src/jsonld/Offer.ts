/* eslint-disable import/no-cycle */
import { AdministrativeArea } from './AdministrativeArea.js'
import { AggregateRating } from './AggregateRating.js'
import { CreativeWork } from './CreativeWork.js'
import { DateTime } from './DateTime.js'
import { GeoShape } from './GeoShape.js'
import { Intangible } from './Intangible.js'
import { ItemAvailability } from './ItemAvailability.js'
import { Organization } from './Organization.js'
import { Person } from './Person.js'
import { Place } from './Place.js'
import { Product } from './Product.js'
import { QuantitativeValue } from './QuantitativeValue.js'
import { Review } from './Review.js'
import { Service } from './Service.js'
import { Text } from './Text.js'
import { Thing } from './Thing.js'
import { Time } from './Time.js'
import { URL } from './URL.js'

interface Offer extends Intangible {
  acceptedPaymentMethod?: unknown
  addOn?: Offer
  advanceBookingRequirement?: QuantitativeValue
  aggrigateRating?: AggregateRating
  areaServed?: AdministrativeArea | GeoShape | Place | Text
  availability?: ItemAvailability
  availabilityAtOrFrom?: Place
  availabilityEnds?: DateTime | Time
  availabilityStarts?: DateTime | Time
  availableDeliveryMethod?: unknown
  businessFunction?: unknown
  category?: unknown | Text | Thing | URL
  deliveryLeadTime?: QuantitativeValue
  eligibleCustomerType?: unknown
  eligibleDuration?: QuantitativeValue
  eligibleQuantity?: QuantitativeValue
  eligibleRegion?: GeoShape | Place | Text
  eligibleTransactionVolume?: unknown
  gtin?: Text
  gtin12?: Text
  gtin13?: Text
  gtin14?: Text
  gtin8?: Text
  includesObject?: unknown
  ineligibleRegion?: GeoShape | Place | Text
  inventoryLevel?: QuantitativeValue
  itemCondition?: unknown
  itemOffered?: unknown | CreativeWork | Event | unknown | Product | Service | unknown
  leaseLength?: unknown | QuantitativeValue
  mpn?: Text
  offeredBy?: Organization | Person
  price?: number | Text
  priceCurrency?: Text
  priceSpecification?: unknown
  priceValidUntil?: DateTime
  review?: Review
  seller?: Organization | Person
  serialNumber?: Text
  shippingDetails?: unknown
  sku?: Text
  validFrom?: DateTime
  validThrough?: DateTime
  warranty?: unknown
}

export type { Offer }
