import type { FlexBoxProps } from '@xylabs/react-flexbox'
import { FlexRow } from '@xylabs/react-flexbox'
import md5 from 'md5'
import React, { useEffect, useRef } from 'react'

const range = (n: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
  return ((n - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

export interface IdenticonProps extends FlexBoxProps {
  bg?: string
  className?: string
  count?: number
  fg?: string
  iconPadding?: number
  palette?: string[]
  size?: number
  value?: string
}

const updateCanvas = (canvas: React.RefObject<HTMLCanvasElement | null>, props: IdenticonProps) => {
  const {
    value = '', size = 400, bg = 'transparent', count = 5, palette, iconPadding = 0,
  } = props
  let { fg } = props
  const hash = md5(value)
  const block = Math.floor(size / count)
  const hashColor = hash.slice(0, 6)

  const current = canvas?.current

  if (!current) {
    return
  }

  if (palette && palette.length > 0) {
    const index = Math.floor(range(Number.parseInt(hash.slice(-3), 16), 0, 4095, 0, palette.length))
    fg = palette[index]
  }

  current.width = block * count + iconPadding
  current.height = block * count + iconPadding
  const arr = [...hash].map((el) => {
    const parsedEl = Number.parseInt(el, 16)
    return parsedEl < 8 ? 0 : 1
  })

  const map = []

  map[0] = map[4] = arr.slice(0, 5)
  map[1] = map[3] = arr.slice(5, 10)
  map[2] = arr.slice(10, 15)

  const ctx = current.getContext('2d')
  if (ctx) {
    ctx.imageSmoothingEnabled = false
    ctx.clearRect(0, 0, current.width, current.height)

    for (const [i, row] of map.entries()) {
      for (const [j, el] of row.entries()) {
        if (el) {
          ctx.fillStyle = fg ?? '#' + hashColor
          ctx.fillRect(block * i + iconPadding, block * j + iconPadding, block - iconPadding, block - iconPadding)
        } else {
          ctx.fillStyle = bg
          ctx.fillRect(block * i + iconPadding, block * j + iconPadding, block - iconPadding, block - iconPadding)
        }
      }
    }
  }
}

export const Identicon: React.FC<IdenticonProps> = ({
  size = 400,
  className = 'identicon',
  bg,
  count,
  fg,
  iconPadding,
  palette,
  value,
  ...props
}) => {
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    updateCanvas(canvas, {
      bg, className, count, fg, iconPadding, palette, size, value,
    })
  })

  return (
    <FlexRow {...props}>
      {value
        ? (
            <canvas
              className={className}
              ref={canvas}
              style={{ height: size, width: size }}
            />
          )
        : null}
    </FlexRow>
  )
}
