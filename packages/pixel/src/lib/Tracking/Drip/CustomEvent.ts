import { DripBaseEvent } from './BaseEvent.ts'

class DripCustomEvent<T extends Record<string, unknown>> extends DripBaseEvent<T> {}

export { DripCustomEvent }
