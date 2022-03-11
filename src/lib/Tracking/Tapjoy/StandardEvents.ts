import { TapjoyStandardEvent } from './StandardEvent'

class TapjoyStandardEvents <T extends Record<string, unknown>> {
  public purchase() {
    return new TapjoyStandardEvent<T>('Purchase')
  }
}

export { TapjoyStandardEvents }