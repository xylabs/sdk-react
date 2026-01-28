import { XyPixel } from '@xylabs/pixel'
import type { JsonObject } from '@xylabs/sdk-js'
import { useEffect, useState } from 'react'

export const usePixelAltSendHandler = (altHandler: (event: string, fields?: Record<string, unknown>) => void) => {
  const [pixelSend, setPixelSend] = useState<typeof XyPixel.instance.send>()
  useEffect(() => {
    if (!pixelSend && XyPixel.instance.send) {
      const oldHandler = XyPixel.instance.send.bind(XyPixel.instance)
      // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
      setPixelSend(oldHandler)
    } else {
      XyPixel.instance.send = async (event: string, fields?: JsonObject, eventId?: string) => {
        altHandler(event, fields)
        return await pixelSend?.(event, fields, eventId)
      }
    }
    return () => {
      // restore send on unmount
      if (pixelSend) {
        XyPixel.instance.send = pixelSend
      }
    }
  }, [pixelSend, altHandler])
}
