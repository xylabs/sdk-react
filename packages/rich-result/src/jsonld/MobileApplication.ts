import { SoftwareApplication } from './SoftwareApplication.ts'
import { Text } from './Text.ts'

interface MobileApplication extends SoftwareApplication {
  carrierRequirements?: Text
}

export type { MobileApplication }
