import { AggregateRating } from './AggregateRating.ts'
import { Brand } from './Brand.ts'
import { DateTime } from './DateTime.ts'
import { ImageObject } from './ImageObject.ts'
import { Offer } from './Offer.ts'
import { Organization } from './Organization.ts'
import { PropertyValue } from './PropertyValue.ts'
import { QuantitativeValue } from './QuantitativeValue.ts'
import { Review } from './Review.ts'
import { Service } from './Service.ts'
import { Text } from './Text.ts'
import { Thing } from './Thing.ts'
import { URL } from './URL.ts'

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
