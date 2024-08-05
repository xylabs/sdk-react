import { Intangible } from './Intangible.ts'
import { SoftwareApplication } from './SoftwareApplication.ts'
import { Text } from './Text.ts'
import { URL } from './URL.ts'

interface EntryPoint extends Intangible {
  actionApplication?: SoftwareApplication
  actionPlatform?: Text | URL
  contentType?: Text
  encodingType?: Text
  httpMethod?: Text
  urlTemplate?: Text
}

export type { EntryPoint }
