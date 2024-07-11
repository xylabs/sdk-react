import { DripBaseEvent } from './BaseEvent.js'

class DripCustomEvent<T extends Record<string, unknown>> extends DripBaseEvent<T> {}

export { DripCustomEvent }
