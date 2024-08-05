import { XyBaseEvent } from './BaseEvent.ts'

class XyStandardEvent<T extends Record<string, unknown>> extends XyBaseEvent<T> {}

export { XyStandardEvent }
