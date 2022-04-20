import { GoogleBaseEvent } from './BaseEvent'

export class GoogleStandardEvent<T extends Record<string, unknown>> extends GoogleBaseEvent<T> {}
