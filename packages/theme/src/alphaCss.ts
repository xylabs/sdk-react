export const alphaCss = (color: string, value: number) => {
  /**
   * Since we want to mimic the behavior of the alpha function in mui,
   * we need to actually apply the opacity value to the color.
   * That way, the transparent value will be the remaining percentage.
   *
   * i.e. when value = 0.25 then 25% of the color is applied, and 100% - 25% (75%)
   * of transparent is applied.
   *
   * see - https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix#percentage
   */
  return `color-mix(in srgb, ${color} ${value * 100}%, transparent)`
}
