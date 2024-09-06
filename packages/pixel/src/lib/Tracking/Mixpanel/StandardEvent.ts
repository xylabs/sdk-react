import type { EmptyObject } from '@xylabs/object'

import { MixpanelBaseEvent } from './BaseEvent.ts'

export class MixpanelStandardEvent<T extends EmptyObject> extends MixpanelBaseEvent<T> {}
