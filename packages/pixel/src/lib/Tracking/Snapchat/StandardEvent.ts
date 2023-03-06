import { SnapchatBaseEvent } from './BaseEvent'
import { SnapTr } from './Snaptr'
import { SnapchatStandardProperties } from './StandardProperties'

export class SnapchatStandardEvent<T extends SnapchatStandardProperties> extends SnapchatBaseEvent<T> {
  override async send(data: T) {
    await SnapTr.track(this.name, data)
  }
}
