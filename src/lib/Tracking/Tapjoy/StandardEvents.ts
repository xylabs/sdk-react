import { TapjoyStandardEvent } from './StandardEvent'

class TapjoyStandardEvents<T extends Record<string, unknown>> {
  public accountCreated() {
    return new TapjoyStandardEvent<T>('Conversion')
  }
}

export { TapjoyStandardEvents }
