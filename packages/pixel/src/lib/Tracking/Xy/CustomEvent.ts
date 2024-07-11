import { XyBaseEvent } from './BaseEvent.js'

class XyCustomEvent<T extends Record<string, unknown>> extends XyBaseEvent<T> {}

export { XyCustomEvent }
