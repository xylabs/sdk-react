import { RenderSpinCheckBounce, RenderSpinCheckConfig, useRenderSpinCheck } from '../hooks/index.js'

export type RenderSpinCheckProps = {
  bounce: RenderSpinCheckBounce
} & RenderSpinCheckConfig

export const RenderSpinCheck: React.FC<RenderSpinCheckProps> = ({ minSamples = 20, bounce, maxRate = 1000, noThrow = false, reportOnce }) => {
  useRenderSpinCheck(bounce, { maxRate, minSamples, noThrow, reportOnce })

  return null
}
