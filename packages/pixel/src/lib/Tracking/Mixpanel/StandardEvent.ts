import type { EmptyObject } from '@xylabs/sdk-js'

import { MixpanelBaseEvent } from './BaseEvent.ts'

export class MixpanelStandardEvent<T extends EmptyObject> extends MixpanelBaseEvent<T> {}
