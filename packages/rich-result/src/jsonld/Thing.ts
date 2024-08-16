import type { Action } from './Action.ts'
import type { Base } from './Base.ts'
import type { CreativeWork } from './CreativeWork.ts'
import type { ImageObject } from './ImageObject.ts'
import type { PropertyValue } from './PropertyValue.ts'
import type { Text } from './Text.ts'
import type { URL } from './URL.ts'

interface Thing extends Base {
  additionalType?: URL
  alternateName?: Text
  description?: Text
  disambiguatingDescription?: Text
  identifier?: PropertyValue | Text | URL
  image?: ImageObject | URL
  mainIdentityOfPage?: CreativeWork | URL
  name?: Text
  potentialAction?: Action
  sameAs?: URL
  subjectOf?: CreativeWork | Event
  url?: URL
}

export type { Thing }
