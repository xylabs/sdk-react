import type { EmptyObject } from '@xylabs/sdk-js'

import { GoogleBaseEvent } from './BaseEvent.ts'

class GoogleCustomEvent<T extends EmptyObject> extends GoogleBaseEvent<T> {}

export { GoogleCustomEvent }
