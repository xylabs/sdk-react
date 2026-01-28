import type { EmptyObject } from '@xylabs/sdk-js'

import { GoogleBaseEvent } from './BaseEvent.ts'

export class GoogleStandardEvent<T extends EmptyObject> extends GoogleBaseEvent<T> {}
