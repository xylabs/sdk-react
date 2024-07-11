import { GoogleBaseEvent } from './BaseEvent.js'

export class GoogleStandardEvent<T extends Record<string, unknown>> extends GoogleBaseEvent<T> {}
