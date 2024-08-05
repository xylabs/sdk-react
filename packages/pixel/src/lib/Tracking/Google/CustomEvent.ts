import { GoogleBaseEvent } from './BaseEvent.ts'

class GoogleCustomEvent<T extends Record<string, unknown>> extends GoogleBaseEvent<T> {}

export { GoogleCustomEvent }
