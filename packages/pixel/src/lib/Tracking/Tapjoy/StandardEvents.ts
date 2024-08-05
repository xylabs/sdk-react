import { TapjoyStandardEvent } from './StandardEvent.ts'

class TapjoyStandardEvents<T extends Record<string, unknown>> {
  accountCreated() {
    return new TapjoyStandardEvent<T>('Conversion')
  }
}

export { TapjoyStandardEvents }
