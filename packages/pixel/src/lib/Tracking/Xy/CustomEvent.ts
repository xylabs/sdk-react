import { XyBaseEvent } from './BaseEvent.ts'

class XyCustomEvent<T extends Record<string, unknown>> extends XyBaseEvent<T> {}

export { XyCustomEvent }
