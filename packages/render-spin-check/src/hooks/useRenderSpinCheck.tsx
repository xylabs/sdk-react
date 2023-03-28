import { useEffect, useMemo, useState } from 'react'

export interface RenderSpinCheckConfig {
  maxRate?: number
  minSamples?: number
  noThrow?: boolean
  reportOnce?: boolean
}

export interface RenderSpinCheckBounce {
  name: string
}

export const useRenderSpinCheck = (bounce: RenderSpinCheckBounce, config?: RenderSpinCheckConfig) => {
  const { minSamples = 20, maxRate = 1000, noThrow = false, reportOnce = false } = useMemo(() => config ?? {}, [config])
  const [spinCount, setSpinCount] = useState(0)
  const [startTime] = useState(Date.now())
  const [error, setError] = useState<Error>()

  useEffect(() => {
    if (!error) {
      const newSpinCount = spinCount + 1
      if (spinCount > minSamples) {
        const elapsedTime = Date.now() - startTime
        const refreshRate = elapsedTime / spinCount
        if (refreshRate < maxRate) {
          const error = Error(`Spinning [${bounce.name}] [Rate=${refreshRate.toFixed(2)}ms, Samples=${newSpinCount}]`)
          console.warn(error.message)
          setError(error)
          if (!noThrow) {
            throw error
          }
        }
      }
      setSpinCount(newSpinCount)
    } else {
      if (!reportOnce) {
        console.warn(error.message)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTime, maxRate, bounce, minSamples])
}
