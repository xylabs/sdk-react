import { XyPixel } from '@xylabs/pixel'
import { useEffect, useState } from 'react'

export const usePixelAltSendHandler = (altHandler: (event: string, fields?: Record<string, unknown>) => void) => {
  const [pixelSend, setPixelSend] = useState<typeof XyPixel.instance.send>()
  useEffect(() => {
    if (!pixelSend && XyPixel.instance.send) {
      const oldHandler = XyPixel.instance.send.bind(XyPixel.instance)
      setPixelSend(oldHandler)
    } else {
      XyPixel.instance.send = async (event: string, fields?: Record<string, unknown>, eventId?: string) => {
        altHandler(event, fields)
        return pixelSend?.(event, fields, eventId)
      }
    }
    return () => {
      //restore send on unmount
      if (pixelSend) {
        XyPixel.instance.send = pixelSend
      }
    }
  }, [pixelSend, altHandler])
}
