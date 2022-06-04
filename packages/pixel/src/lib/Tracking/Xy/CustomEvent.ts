import { XyBaseEvent } from './BaseEvent'

class XyCustomEvent<T extends Record<string, unknown>> extends XyBaseEvent<T> {}

export { XyCustomEvent }
