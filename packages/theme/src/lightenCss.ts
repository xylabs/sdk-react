export const lightenCss = (color: string, value: number) => {
  return `color-mix(in srgb, ${color}, white ${value * 100}%)`
}
