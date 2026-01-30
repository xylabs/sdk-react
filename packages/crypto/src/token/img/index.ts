export { default as XL1ColorLogoIconSvg } from './XL1_Logo_Icon_Mainnet.svg'
export { default as XYOColorLogoIconSvg } from './XYO_Logo_Icon.svg'

import XL1ColorLogoIconSvg from './XL1_Logo_Icon_Mainnet.svg'
import XYOColorLogoIconSvg from './XYO_Logo_Icon.svg'

export const formatSvgAsDataUrl = (svgString: string): string => {
  const base64ImagePrefix = 'data:image/svg+xml;utf8,'
  return typeof svgString === 'string' && svgString.trim().startsWith('<svg')
    ? `${base64ImagePrefix}${encodeURIComponent(svgString)}`
    : svgString
}

// Convert SVG string to data URL if needed
export const imgXYOLogoSrcDataUrl = formatSvgAsDataUrl(XYOColorLogoIconSvg)
export const imgXL1LogoSrcDataUrl = formatSvgAsDataUrl(XL1ColorLogoIconSvg)
