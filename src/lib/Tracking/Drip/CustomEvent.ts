import { DripBaseEvent } from './BaseEvent'

class DripCustomEvent<T extends Record<string, unknown>> extends DripBaseEvent<T> {}

export { DripCustomEvent }
