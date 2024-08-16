import type { MediaObject } from './MediaObject.ts'
import type { Text } from './Text.ts'

interface ImageObject extends MediaObject {
  caption?: Text
  exifData?: Text
  representativeOfPage?: boolean
  thumbnail?: ImageObject
}

export type { ImageObject }
