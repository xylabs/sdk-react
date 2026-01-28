import type { EmptyObject } from '@xylabs/sdk-js'

import { MixpanelBaseEvent } from './BaseEvent.ts'

export class MixpanelCustomEvent<T extends EmptyObject> extends MixpanelBaseEvent<T> {}
