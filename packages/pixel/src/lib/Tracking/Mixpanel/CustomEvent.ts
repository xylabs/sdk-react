import type { EmptyObject } from '@xylabs/object'

import { MixpanelBaseEvent } from './BaseEvent.ts'

export class MixpanelCustomEvent<T extends EmptyObject> extends MixpanelBaseEvent<T> {}
