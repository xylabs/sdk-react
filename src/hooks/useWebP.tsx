import { useState } from 'react'

import { useAsyncEffect } from '../lib'

let supportsWebP: boolean | undefined = undefined

export const useWebP = (webp: string, alt: string) => {
  const [img, setImg] = useState<string | undefined>(
    supportsWebP === true ? webp : supportsWebP === false ? alt : undefined
  )
  useAsyncEffect(
    async (mounted) => {
      if (supportsWebP === undefined) {
        supportsWebP = await getSupportsWebP()
        if (mounted()) {
          setImg(supportsWebP ? webp : alt)
        }
      }
    },
    [supportsWebP]
  )
  return img
}

const getSupportsWebP = async () => {
  return await new Promise<boolean>((resolve) => {
    const image = new Image()
    image.onerror = () => resolve(false)
    image.onload = () => resolve(image.width === 1)
    image.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA='
  }).catch(() => false)
}
