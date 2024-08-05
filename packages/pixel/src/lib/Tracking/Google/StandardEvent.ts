import { GoogleBaseEvent } from './BaseEvent.ts'

export class GoogleStandardEvent<T extends Record<string, unknown>> extends GoogleBaseEvent<T> {}
