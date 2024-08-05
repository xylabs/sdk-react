import { CreativeWork } from './CreativeWork.ts'
import { ImageObject } from './ImageObject.ts'
import { Text } from './Text.ts'
import { URL } from './URL.ts'

// TODO: Resolve Anys
interface SoftwareApplication extends CreativeWork {
  applicationCategory?: Text | URL
  applicationSubCategory?: Text | URL
  applicationSuite?: Text
  availableOnDevice?: Text
  countriesNotSupported?: Text
  countriesSupported?: Text
  downloadUrl?: URL
  featureList?: Text | URL
  installUrl?: URL
  memoryRequirements?: Text | URL
  operatingSystem?: Text
  permissions?: Text
  processorRequiremewnts?: Text
  releaseNotes?: Text | URL
  screenshot?: ImageObject | URL
  softwareAddOn?: SoftwareApplication
  softwareHelp?: CreativeWork
  softwareRequirements?: Text | URL
  softwareVersion?: Text
  storageRequirements?: Text | URL
  supportingData?: unknown
}

export type { SoftwareApplication }
