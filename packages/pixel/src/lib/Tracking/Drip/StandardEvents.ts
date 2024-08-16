import { DripBaseEvent } from './BaseEvent.ts'
import type { DripIdentifyData } from './Data/index.ts'

class DripStandardEvents<T extends Record<string, unknown>> {
  identify() {
    return new DripBaseEvent<DripIdentifyData | T>('identify')
  }
}

export { DripStandardEvents }
