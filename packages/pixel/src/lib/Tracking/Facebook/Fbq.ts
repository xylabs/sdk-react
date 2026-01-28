import type { JsonObject } from '@xylabs/sdk-js'

export type FacebookStandardEventNames
  = | 'PageView'
    | 'ViewContent'
    | 'Search'
    | 'AddToCart'
    | 'AddToWishlist'
    | 'InitiateCheckout'
    | 'AddPaymentInfo'
    | 'Purchase'
    | 'Lead'
    | 'CompleteRegistration'
    | 'Contact'
    | 'CustomizeProduct'
    | 'Donate'
    | 'FindLocation'
    | 'Schedule'
    | 'StartTrial'
    | 'SubmitApplication'
    | 'Subscribe'

type FbqFunction = {
  (command: 'init', pixelId: string): void
  (command: 'track',
    eventName: FacebookStandardEventNames,
    parameters?: JsonObject,
    options?: { eventID?: string }
  ): void
  (command: 'trackCustom', eventName: string, parameters?: JsonObject, options?: { eventID?: string }): void
  (command: 'trackSingle',
    pixelId: string,
    eventName: FacebookStandardEventNames,
    parameters?: JsonObject,
    options?: { eventID?: string }
  ): void
  (command: 'trackSingleCustom',
    pixelId: string,
    eventName: string,
    parameters?: JsonObject,
    options?: { eventID?: string }
  ): void
}

declare global {
  var fbq: FbqFunction
}

export interface FbqCaller {
  track(event: FacebookStandardEventNames, data: JsonObject, eventID?: string): void
  trackCustom(event: string, data: JsonObject, eventID?: string): void
}

export class Fbq implements FbqCaller {
  protected pixelId: string

  private constructor(pixelId: string) {
    this.pixelId = pixelId
    this.fbq('init', pixelId)
    this.track('PageView')
  }

  /**
   * Gets the instance of the Facebook Pixel (fbq).
   *
   * @returns {FbqFunction} The global fbq instance.
   * @throws Will throw an error if the Fbq instance is not initialized.
   */
  static get fbq(): FbqFunction {
    if (!globalThis.fbq) {
      throw new Error('Fbq instance not initialized')
    }
    return globalThis.fbq
  }

  /**
   * Gets the instance of the Facebook Pixel (fbq).
   *
   * @returns {FbqFunction} The global fbq instance.
   * @throws Will throw an error if the Fbq instance is not initialized.
   */
  get fbq(): FbqFunction {
    return Fbq.fbq
  }

  /**
   * Initializes the Fbq instance with the given pixel ID.
   *
   * @param pixelId - The Facebook Pixel ID to initialize the Fbq instance with.
   * @returns A new instance of Fbq.
   * @throws Will throw an error if the Fbq instance is not initialized.
   */
  static init(pixelId: string) {
    if (!globalThis.fbq) {
      throw new Error('Fbq instance not initialized')
    }
    return new Fbq(pixelId)
  }

  /**
   * Tracks a Facebook standard event using the Facebook Pixel.
   * This will call all initialized pixels.
   *
   * @param event - The Facebook standard event to track.
   * @param data - Optional additional data to send with the event.
   * @param eventID - An optional unique identifier for the event.
   */
  static track(event: FacebookStandardEventNames, data?: JsonObject, eventID?: string) {
    this.fbq(
      'track',
      event,
      data,
      { eventID },
    )
  }

  /**
   * Tracks a custom event using Facebook's tracking pixel.
   * This will call all initialized pixels.
   *
   * @param event - The name of the custom event to track.
   * @param data - An object containing additional data to send with the event.
   * @param eventID - An optional unique identifier for the event.
   */
  static trackCustom(event: string, data: JsonObject, eventID?: string) {
    this.fbq(
      'trackCustom',
      event,
      data,
      { eventID },
    )
  }

  /**
   * Tracks a specified Facebook standard event using the Facebook Pixel.
   * This will only call the pixel with the specified eventID.
   *
   * @param event - The Facebook standard event to track.
   * @param data - Optional additional data to send with the event.
   * @param eventID - An optional unique identifier for the event.
   */
  track(event: FacebookStandardEventNames, data?: JsonObject, eventID?: string) {
    this.fbq(
      'trackSingle',
      this.pixelId,
      event,
      data,
      { eventID },
    )
  }

  /**
   * Tracks a custom event using Facebook's tracking pixel.
   * This will only call the pixel with the specified eventID.
   *
   * @param event - The name of the custom event to track.
   * @param data - An object containing additional data to send with the event.
   * @param eventID - An optional unique identifier for the event.
   */
  trackCustom(event: string, data: JsonObject, eventID?: string) {
    this.fbq(
      'trackSingleCustom',
      this.pixelId,
      event,
      data,
      { eventID },
    )
  }
}
