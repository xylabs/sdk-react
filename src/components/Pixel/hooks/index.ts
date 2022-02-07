import { XyPixel } from '@xylabs/pixel'
import { useEffect, useState } from 'react'

export const usePixelAltSendHandler = (altHandler: (event: string, fields?: Record<string, unknown>) => void) => {
  const [pixelSend, setPixelSend] = useState<typeof XyPixel.instance.send>()
  useEffect(() => {
    if (!pixelSend) {
      const oldHandler = XyPixel.instance.send.bind(XyPixel.instance)
      setPixelSend(oldHandler)
    } else {
      XyPixel.instance.send = async (event: string, fields?: Record<string, unknown>) => {
        altHandler(event, fields)
        return await pixelSend?.(event, fields)
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