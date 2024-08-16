import type { AggregateRating } from './AggregateRating.ts'
import type { Brand } from './Brand.ts'
import type { DateTime } from './DateTime.ts'
import type { ImageObject } from './ImageObject.ts'
import type { Offer } from './Offer.ts'
import type { Organization } from './Organization.ts'
import type { PropertyValue } from './PropertyValue.ts'
import type { QuantitativeValue } from './QuantitativeValue.ts'
import type { Review } from './Review.ts'
import type { Service } from './Service.ts'
import type { Text } from './Text.ts'
import type { Thing } from './Thing.ts'
import type { URL } from './URL.ts'

// TODO: Resolve Anys
interface Product extends Thing {
  additionalProperty?: PropertyValue
  aggregateRating?: AggregateRating
  audience?: unknown
  award?: Text
  brand?: Brand | Organization
  category?: unknown | Text | Thing | URL
  color?: Text
  depth?: unknown | QuantitativeValue
  gtin?: Text
  gtin12?: Text
  gtin13?: Text
  gtin14?: Text
  gtin8?: Text
  hasEnergyConsumptionDetails?: unknown
  hasMerchantReturnPolicy?: unknown
  height?: unknown | QuantitativeValue
  inAccessoryOrSparePartFor?: Product
  inProductGroupWithId?: Text
  isConsumableFor?: Product
  isRelatedTo?: Product | Service
  isSimilarTo?: Product | Service
  isVariantOf?: unknown
  itemCondition?: unknown
  logo?: ImageObject | URL
  manufacturer?: Organization
  material?: Product | Text | URL
  model?: unknown | Text
  mpn?: Text
  nsn?: Text
  offers?: Offer[]
  pattern?: unknown | Text
  productID?: Text
  productionDate?: DateTime
  purchaseDate?: DateTime
  review?: Review
  size?: unknown | QuantitativeValue | Text
  sku?: Text
  slogan?: Text
  weight?: QuantitativeValue
  width?: unknown | QuantitativeValue
}

export type { Product }
