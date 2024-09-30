import {
  useEffect, useMemo, useState,
} from 'react'

export interface RenderSpinCheckConfig {
  maxRate?: number
  minSamples?: number
  noThrow?: boolean
  reportOnce?: boolean
}

export interface RenderSpinCheckBounce {
  name: string
}

// this is external to prevent us from creating our own spin
const spinCountMap = new Map<number, number>()

export const useRenderSpinCheck = (bounce: RenderSpinCheckBounce, config?: RenderSpinCheckConfig) => {
  const startTime = useMemo(() => Date.now(), [])
  const [error, setError] = useState<Error>()

  useEffect(() => {
    if (error) {
      if (!config?.reportOnce) {
        console.warn(error.message)
      }
    } else {
      const spinCount = spinCountMap.get(startTime) ?? 0
      if (spinCount > (config?.minSamples ?? 20)) {
        const elapsedTime = Date.now() - startTime
        const refreshRate = elapsedTime / spinCount
        if (refreshRate < (config?.maxRate ?? 1000)) {
          const error = new Error(`Spinning [${bounce.name}] [Rate=${refreshRate.toFixed(2)}ms, Samples=${spinCount}]`)
          console.warn(error.message)
          // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
          setError(error)
          if (!config?.noThrow) {
            throw error
          }
        }
      }
      spinCountMap.set(startTime, spinCount + 1)
    }

    return () => {
      spinCountMap.delete(startTime)
    }
  }, [bounce, config, error, startTime])
}
