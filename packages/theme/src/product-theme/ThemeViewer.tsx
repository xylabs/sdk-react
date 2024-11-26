import { ExpandMoreRounded } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import type { Theme } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import React from 'react'

interface RecursiveAccordionProps {
  data: Record<string, unknown>
  path?: string
}

const RecursiveAccordion: React.FC<RecursiveAccordionProps> = ({
  data,
  path = '',
}) => {
  return (
    <>
      {Object.entries(data).map(([key, value]) => {
        const currentPath = path ? `${path}.${key}` : key
        const isObject = typeof value === 'object' && value !== null

        return (
          <Accordion disableGutters elevation={0} key={currentPath}>
            <AccordionSummary
              expandIcon={<ExpandMoreRounded />}
            >
              <Typography
                variant="body2"
                style={{
                  marginTop: 0.25, marginBottom: 0.25, paddingLeft: 0.25, paddingRight: 0.25,
                }}
              >
                {key}
                {isObject && ':'}
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ margin: 0.25, padding: 0.5 }}>
              {isObject
                ? (
                    <RecursiveAccordion data={value as Record<string, unknown>} path={currentPath} />
                  )
                : (
                    <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                      {JSON.stringify(value, null, 2)}
                    </Typography>
                  )}
            </AccordionDetails>
          </Accordion>
        )
      })}
    </>
  )
}

export const ThemeViewer: React.FC = () => {
  const theme: Theme = useTheme()

  return (
    <div style={{ margin: 2 }}>
      <Typography variant="h4" gutterBottom>
        Material-UI Theme Viewer
      </Typography>
      <RecursiveAccordion data={theme as unknown as Record<string, unknown>} />
    </div>
  )
}
