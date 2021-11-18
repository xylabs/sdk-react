import { GoogleBaseEvent } from './BaseEvent'

class GoogleStandardEvent<T extends Record<string, unknown>> extends GoogleBaseEvent<T> {}

export { GoogleStandardEvent }
