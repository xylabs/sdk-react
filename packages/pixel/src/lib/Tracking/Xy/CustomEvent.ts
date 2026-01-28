import type { EmptyObject } from '@xylabs/sdk-js'

import { XyBaseEvent } from './BaseEvent.ts'

class XyCustomEvent<T extends EmptyObject> extends XyBaseEvent<T> {}

export { XyCustomEvent }
