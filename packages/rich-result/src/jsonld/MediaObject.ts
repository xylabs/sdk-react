import type { CreativeWork } from './CreativeWork.ts'
import type { Text } from './Text.ts'
import type { URL } from './URL.ts'

interface MediaObject extends CreativeWork {
  contentSize?: Text
  contentUrl?: URL
  height?: unknown
  width?: unknown
}

export type { MediaObject }
