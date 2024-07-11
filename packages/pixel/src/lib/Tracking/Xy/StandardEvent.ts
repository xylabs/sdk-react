import { XyBaseEvent } from './BaseEvent.js'

class XyStandardEvent<T extends Record<string, unknown>> extends XyBaseEvent<T> {}

export { XyStandardEvent }
