import type { AdministrativeArea } from './AdministrativeArea.ts'
import type { AggregateRating } from './AggregateRating.ts'
import type { CreativeWork } from './CreativeWork.ts'
import type { DateTime } from './DateTime.ts'
import type { GeoShape } from './GeoShape.ts'
import type { Intangible } from './Intangible.ts'
import type { ItemAvailability } from './ItemAvailability.ts'
import type { Organization } from './Organization.ts'
import type { Person } from './Person.ts'
import type { Place } from './Place.ts'
import type { Product } from './Product.ts'
import type { QuantitativeValue } from './QuantitativeValue.ts'
import type { Review } from './Review.ts'
import type { Service } from './Service.ts'
import type { Text } from './Text.ts'
import type { Thing } from './Thing.ts'
import type { Time } from './Time.ts'
import type { URL } from './URL.ts'

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
