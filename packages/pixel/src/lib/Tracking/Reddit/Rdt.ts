class Rdt {
  public static instance: Rdt
  public static init(pixelId: string) {
    try {
      Rdt.instance = new Rdt()
      Rdt.instance.load(pixelId)
      Rdt.instance.track('PageVisit')
    } catch (ex) {
      console.error(ex)
    }
  }

  private static getRdt() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const global = window as any
    if (global.rdt) {
      return global.rdt
    }
    console.warn('Missing rdt')
  }

  public load(id: string) {
    try {
      Rdt.getRdt()('init', id)
    } catch (ex) {
      console.error(ex)
    }
  }

  public track(event: string, data?: Record<string, unknown>) {
    try {
      Rdt.getRdt()('track', event, {
        ...data,
      })
    } catch (ex) {
      console.error(ex)
    }
  }
}

export { Rdt }
