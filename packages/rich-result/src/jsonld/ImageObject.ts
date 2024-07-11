/* eslint-disable import/no-cycle */
import { MediaObject } from './MediaObject.js'
import { Text } from './Text.js'

interface ImageObject extends MediaObject {
  caption?: Text
  exifData?: Text
  representativeOfPage?: boolean
  thumbnail?: ImageObject
}

export type { ImageObject }
