import { SnapchatBaseEvent } from './BaseEvent.ts'
import { SnapTr } from './Snaptr.ts'
import { SnapchatStandardProperties } from './StandardProperties.ts'

export class SnapchatStandardEvent<T extends SnapchatStandardProperties> extends SnapchatBaseEvent<T> {
  override async send(data: T) {
    await SnapTr.track(this.name, data)
  }
}
