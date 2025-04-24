export const darkenCss = (color: string, value: number) => {
  return `color-mix(in srgb, ${color}, black ${value * 100}%)`
}
