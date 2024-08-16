import type { SoftwareApplication } from './SoftwareApplication.ts'
import type { Text } from './Text.ts'

interface MobileApplication extends SoftwareApplication {
  carrierRequirements?: Text
}

export type { MobileApplication }
