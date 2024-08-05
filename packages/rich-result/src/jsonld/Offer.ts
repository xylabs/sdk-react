import { AdministrativeArea } from './AdministrativeArea.ts'
import { AggregateRating } from './AggregateRating.ts'
import { CreativeWork } from './CreativeWork.ts'
import { DateTime } from './DateTime.ts'
import { GeoShape } from './GeoShape.ts'
import { Intangible } from './Intangible.ts'
import { ItemAvailability } from './ItemAvailability.ts'
import { Organization } from './Organization.ts'
import { Person } from './Person.ts'
import { Place } from './Place.ts'
import { Product } from './Product.ts'
import { QuantitativeValue } from './QuantitativeValue.ts'
import { Review } from './Review.ts'
import { Service } from './Service.ts'
import { Text } from './Text.ts'
import { Thing } from './Thing.ts'
import { Time } from './Time.ts'
import { URL } from './URL.ts'

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
