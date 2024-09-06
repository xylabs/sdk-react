import type { EmptyObject } from '@xylabs/object'

import { GoogleBaseEvent } from './BaseEvent.ts'

export class GoogleStandardEvent<T extends EmptyObject> extends GoogleBaseEvent<T> {}
