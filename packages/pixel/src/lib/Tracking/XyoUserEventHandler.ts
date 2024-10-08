import type { EmptyObject } from '@xylabs/object'
import type {
  FunnelStartedFields, TestStartedFields, UserClickFields, ViewContentFields,
} from '@xylabs/pixel'
import { UserEventHandler } from '@xylabs/pixel'

import { FacebookUserEventHandler } from './Facebook/index.ts'
import { GoogleUserEventHandler } from './Google/index.ts'

class XyoUserEventHandler<T extends EmptyObject> extends UserEventHandler<T> {
  static instance: XyoUserEventHandler<EmptyObject>

  protected handlers: UserEventHandler<T>[]

  private constructor(handlers: UserEventHandler<T>[] = []) {
    super()
    this.handlers = handlers ?? [new FacebookUserEventHandler<T>(), new GoogleUserEventHandler<T>()]
  }

  static get() {
    this.instance = this.instance ?? new XyoUserEventHandler()
    return this.instance
  }

  async funnelStarted(data: T | FunnelStartedFields) {
    await Promise.allSettled(this.handlers.map(handler => handler.funnelStarted(data)))
  }

  async testStarted(data: T | TestStartedFields) {
    await Promise.allSettled(this.handlers.map(handler => handler.testStarted(data)))
  }

  async userClick(data: T | UserClickFields) {
    await Promise.allSettled(this.handlers.map(handler => handler.userClick(data)))
  }

  async viewContent(data: T | ViewContentFields) {
    await Promise.allSettled(this.handlers.map(handler => handler.viewContent(data)))
  }
}

export { XyoUserEventHandler }
