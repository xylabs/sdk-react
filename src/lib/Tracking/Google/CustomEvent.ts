import { GoogleBaseEvent } from './BaseEvent'

class GoogleCustomEvent<T extends Record<string, unknown>> extends GoogleBaseEvent<T> {}

export { GoogleCustomEvent }
