import { delay } from '@xylabs/delay'
import { useAsyncEffect } from '@xylabs/react-async-effect'
import { useCallback, useMemo, useState } from 'react'

export const useBusyTiming = (busy?: boolean, busyMinimum = 0) => {
  const [internalBusy, setInternalBusy] = useState(false)
  const [busyStart, setBusyStart] = useState(0)

  const timer = useMemo(
    () => ({
      evaluate: !busy && busyStart > 0,
      initialize: busy && busyStart === 0,
      terminated: !busy && busyStart === 0,
    }),
    [busy, busyStart],
  )

  const evaluateTimer = useCallback(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async (mounted: () => boolean) => {
      const busyDuration = Date.now() - busyStart
      if (busyDuration < busyMinimum) {
        await delay(busyMinimum - busyDuration)
        // Verify busy hasn't changed to true during the delay
        if (!busy && internalBusy && mounted()) {
          setBusyStart(0)
          setInternalBusy(false)
        }
      } else if (mounted()) {
        // busyMinimum exceeded
        setBusyStart(0)
      }
    },
    [busy, busyMinimum, busyStart, internalBusy],
  )

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async (mounted) => {
      if (mounted() && busyMinimum === 0) {
        // sync busy values if no minimum is set
        setInternalBusy(!!busy)
        return
      }

      if (busyMinimum) {
        const { initialize, evaluate, terminated } = timer
        if (initialize && mounted()) {
          setBusyStart(Date.now())
          setInternalBusy(true)
          return
        }

        if (evaluate) {
          await evaluateTimer(mounted)
          return
        }

        if (terminated) {
          setInternalBusy(false)
          return
        }
      }
    },
    [busy, busyStart, busyMinimum, internalBusy, evaluateTimer, timer],
  )

  return internalBusy
}
