import type { CreativeWork } from './CreativeWork.ts'
import type { Rating } from './Rating.ts'
import type { Thing } from './Thing.ts'

interface Review extends CreativeWork {
  itemReviewed?: Thing
  reviewAspect?: Text
  reviewBody?: Text
  reviewRating?: Rating
}

export type { Review }
