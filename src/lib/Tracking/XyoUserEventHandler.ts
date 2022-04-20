import { FunnelStartedFields, TestStartedFields, UserClickFields, UserEventHandler, ViewContentFields } from '@xylabs/pixel'

import { FacebookUserEventHandler } from './Facebook'
import { GoogleUserEventHandler } from './Google'

class XyoUserEventHandler<T extends Record<string, unknown>> extends UserEventHandler<T> {
  protected handlers: UserEventHandler<T>[]
  private constructor(handlers: UserEventHandler<T>[] = []) {
    super()
    this.handlers = handlers ?? [new FacebookUserEventHandler<T>(), new GoogleUserEventHandler<T>()]
  }

  async testStarted(data: T | TestStartedFields) {
    await Promise.allSettled(this.handlers.map((handler) => handler.testStarted(data)))
  }

  async funnelStarted(data: T | FunnelStartedFields) {
    await Promise.allSettled(this.handlers.map((handler) => handler.funnelStarted(data)))
  }

  async viewContent(data: T | ViewContentFields) {
    await Promise.allSettled(this.handlers.map((handler) => handler.viewContent(data)))
  }

  async userClick(data: T | UserClickFields) {
    await Promise.allSettled(this.handlers.map((handler) => handler.userClick(data)))
  }

  static instance: XyoUserEventHandler<Record<string, unknown>>
  static get() {
    this.instance = this.instance ?? new XyoUserEventHandler()
    return this.instance
  }
}

export { XyoUserEventHandler }
