export const alphaCss = (color: string, value: number) => {
  return `color-mix(in srgb, ${color}, transparent ${value * 100}%)`
}
