import { SnapchatBaseEvent } from './BaseEvent'
import { SnapTr } from './Snaptr'
import { SnapchatStandardProperties } from './StandardProperties'

class SnapchatStandardEvent<T extends SnapchatStandardProperties> extends SnapchatBaseEvent<T> {
  async send(data: T) {
    await SnapTr.track(this.name, data)
  }
}

export { SnapchatStandardEvent }
