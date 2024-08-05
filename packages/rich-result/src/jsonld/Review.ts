import { CreativeWork } from './CreativeWork.ts'
import { Rating } from './Rating.ts'
import { Thing } from './Thing.ts'

interface Review extends CreativeWork {
  itemReviewed?: Thing
  reviewAspect?: Text
  reviewBody?: Text
  reviewRating?: Rating
}

export type { Review }
