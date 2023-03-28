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
  const [spinCount, setSpinCount] = useState(0)
  const startTime = useMemo(() => Date.now(), [])
  const [error, setError] = useState<Error>()

  useEffect(() => {
    if (!error) {
      const newSpinCount = spinCount + 1
      if (spinCount > (config?.minSamples ?? 20)) {
        const elapsedTime = Date.now() - startTime
        const refreshRate = elapsedTime / spinCount
        if (refreshRate < (config?.maxRate ?? 1000)) {
          const error = Error(`Spinning [${bounce.name}] [Rate=${refreshRate.toFixed(2)}ms, Samples=${newSpinCount}]`)
          console.warn(error.message)
          setError(error)
          if (!config?.noThrow) {
            throw error
          }
        }
      }
      setSpinCount(newSpinCount)
    } else {
      if (!config?.reportOnce) {
        console.warn(error.message)
      }
    }
    // Intentionally only listening to bounce & config
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bounce, config])
}
