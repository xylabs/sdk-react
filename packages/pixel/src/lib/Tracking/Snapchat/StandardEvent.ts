import { SnapchatBaseEvent } from './BaseEvent.js'
import { SnapTr } from './Snaptr.js'
import { SnapchatStandardProperties } from './StandardProperties.js'

export class SnapchatStandardEvent<T extends SnapchatStandardProperties> extends SnapchatBaseEvent<T> {
  override async send(data: T) {
    await SnapTr.track(this.name, data)
  }
}
