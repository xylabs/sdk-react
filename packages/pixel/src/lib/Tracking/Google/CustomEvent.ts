import { GoogleBaseEvent } from './BaseEvent.js'

class GoogleCustomEvent<T extends Record<string, unknown>> extends GoogleBaseEvent<T> {}

export { GoogleCustomEvent }
