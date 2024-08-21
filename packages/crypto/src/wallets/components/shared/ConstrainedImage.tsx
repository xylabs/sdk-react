import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import React from 'react'

export interface ConstrainedImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  /** use a CSS Height or Width value i.e. '42px' */
  constrainedValue: string
}

/**
 * Useful when you have various square-ish images and want to ensure they occupy the same height (but not necessarily
 * the same width) within a fixed container
 */
export const ConstrainedImage: React.FC<ConstrainedImageProps> = ({
  constrainedValue = '42px', ...props
}) => {
  return (
    <span style={{
      height: constrainedValue, width: constrainedValue,
    }}
    >
      <img style={{ maxWidth: constrainedValue }} {...props} />
    </span>
  )
}
