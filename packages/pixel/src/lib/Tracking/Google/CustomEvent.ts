import type { EmptyObject } from '@xylabs/object'

import { GoogleBaseEvent } from './BaseEvent.ts'

class GoogleCustomEvent<T extends EmptyObject> extends GoogleBaseEvent<T> {}

export { GoogleCustomEvent }
