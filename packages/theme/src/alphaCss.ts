export const alphaCss = (color: string, value: number) => {
  return `color-mix(in srgb, ${color} ${value * 100}%, transparent)`
}
