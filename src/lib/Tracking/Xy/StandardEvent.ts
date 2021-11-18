import { XyBaseEvent } from './BaseEvent'

class XyStandardEvent<T extends Record<string, unknown>> extends XyBaseEvent<T> {}

export { XyStandardEvent }
