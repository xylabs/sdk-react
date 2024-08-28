import {
  Badge, Card, Divider, Typography, useTheme,
} from '@mui/material'
import { ButtonEx } from '@xylabs/react-button'
import { FlexCol } from '@xylabs/react-flexbox'
import { DebugUserEventsContext } from '@xylabs/react-pixel'
import { Portal } from '@xylabs/react-portal'
import React, { useContext, useState } from 'react'

import { usePixelAltSendHandler } from '../hooks/index.ts'
import type { PixelEvent } from '../PixelEvent.ts'

export const PixelDebugger: React.FC = () => {
  const { isDebugging } = useContext(DebugUserEventsContext)
  // TODO - when adding in the location hook to detect location change, was dropping the setEvents in usePixelAltSendHand
  const theme = useTheme()
  const [displayEvents, setDisplayEvents] = useState(false)
  const [events, setEvents] = useState<PixelEvent[]>([])

  usePixelAltSendHandler((event: string, fields?: Record<string, unknown>) => {
    setEvents(events => [{ event, fields }, ...events])
  })

  if (!isDebugging) {
    return null
  }

  return (
    <Portal>
      <div style={{
        bottom: 0, left: 0, position: 'fixed', width: 350,
      }}
      >
        <Badge badgeContent={events.length} color="primary" sx={{ width: '100%' }}>
          <Card
            variant="outlined"
            sx={{
              backdropFilter: 'blur(16px) saturate(180%)',
              backgroundColor: 'rgba(18, 18, 18, .70)',
              overflowY: 'auto',
              width: '100%',
            }}
            color={theme.palette.primary.main}
          >
            <FlexCol
              alignItems="stretch"
              sx={{ flexFlow: 'column', maxHeight: 400 }}
            >
              <FlexCol alignItems="stretch" sx={{ flex: '0 1 auto' }}>
                <ButtonEx variant="text" onClick={() => setDisplayEvents(!displayEvents)}>
                  XY Pixel Debugger
                </ButtonEx>
              </FlexCol>
              {displayEvents && events.length > 0 && (
                <FlexCol
                  alignItems="stretch"
                  alignContent="start"
                  padding={2}
                  sx={{
                    cursor: 'pointer', flex: '1 1 auto', overflowY: 'auto', userSelect: 'none',
                  }}
                >
                  {events.map((e, index) => (
                    // eslint-disable-next-line @eslint-react/no-duplicate-key
                    <PixelEventDetails key={`${e.event}-${index}`} events={events} index={index} {...e} />
                  ))}
                </FlexCol>
              )}
              {displayEvents && events.length === 0 && <Typography variant="subtitle2">No Events</Typography>}
            </FlexCol>
          </Card>
        </Badge>
      </div>
    </Portal>
  )
}

const PixelEventDetails: React.FC<PixelEvent & { events: PixelEvent[]; index: number }> = ({
  event, fields, index, events,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <FlexCol alignItems="stretch" marginBottom={0.5} onClick={() => setIsOpen(!isOpen)}>
      <Typography variant="subtitle2">{event}</Typography>
      {isOpen && (
        <Typography marginBottom={0.5} variant="caption">
          {JSON.stringify(fields, null, 2)}
        </Typography>
      )}
      {events[index + 1] && <Divider />}
    </FlexCol>
  )
}
