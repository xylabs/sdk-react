class Fbq {
  static instance: Fbq
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fbq?: any
  pixelId?: string

  private constructor(pixelId: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const global = globalThis as any
    this.pixelId = pixelId

    this.fbq = function () {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      this.fbq.callMethod ? this.fbq.callMethod.apply(this.fbq, arguments) : this.fbq.queue.push(arguments)
    }

    this.fbq.push = this.fbq
    this.fbq.loaded = true
    this.fbq.version = '2.0'
    this.fbq.queue = []

    // we have to set these to globals because that is where the facebook script looks for them
    global.fbq = this.fbq
    global._fbq = this.fbq

    this.fbq('init', pixelId)
    this.fbq('track', 'PageView')
  }

  static init(pixelId: string) {
    if (!this.instance) {
      this.instance = new Fbq(pixelId)
    }
    return this.instance
  }

  track(event: string, data: Record<string, unknown>, eventID?: string) {
    this.fbq(
      'track',
      event,
      { ...data },
      { eventID },
    )
  }

  trackCustom(event: string, data: Record<string, unknown>, eventID?: string) {
    this.fbq(
      'trackCustom',
      event,
      { ...data },
      { eventID },
    )
  }
}

export { Fbq }
