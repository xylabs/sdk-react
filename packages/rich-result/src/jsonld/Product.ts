/* eslint-disable import/no-cycle */
import { AggregateRating } from './AggregateRating.js'
import { Brand } from './Brand.js'
import { DateTime } from './DateTime.js'
import { ImageObject } from './ImageObject.js'
import { Offer } from './Offer.js'
import { Organization } from './Organization.js'
import { PropertyValue } from './PropertyValue.js'
import { QuantitativeValue } from './QuantitativeValue.js'
import { Review } from './Review.js'
import { Service } from './Service.js'
import { Text } from './Text.js'
import { Thing } from './Thing.js'
import { URL } from './URL.js'

//TODO: Resolve Anys
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
