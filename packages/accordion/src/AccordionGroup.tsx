import { ExpandMoreRounded } from '@mui/icons-material'
import type { AccordionProps } from '@mui/material'
import {
  Accordion, AccordionDetails, AccordionSummary, Typography, useMediaQuery, useTheme,
} from '@mui/material'
import { ButtonEx } from '@xylabs/react-button'
import type { ReactNode } from 'react'
import React, { useState } from 'react'

type Override<T1, T2> = Omit<T1, keyof T2> & T2

interface SimpleAccordionCardAdditionalProps extends AccordionProps {
  description?: string
  expanded?: boolean
  href?: string
  linkText?: string
  name: string
  onChange?: () => void
  to?: string
}

interface OptionalChildren {
  children?: ReactNode
}
// this makes the requirement for children from AccordionProps go away
export type SimpleAccordionCardProps = Override<SimpleAccordionCardAdditionalProps, OptionalChildren>

interface AccordionGroupProps {
  data?: SimpleAccordionCardProps[]
  defaultExpandedIndex?: number
}

export const AccordionGroup: React.FC<AccordionGroupProps> = ({ defaultExpandedIndex, data }) => {
  const [expandedIndex, setExpandedIndex] = useState(defaultExpandedIndex ?? 0)

  return (
    <>
      {data?.map((item, index) => (
        // eslint-disable-next-line @eslint-react/no-duplicate-key
        <SimpleAccordion key={index} {...item} expanded={index === expandedIndex} onChange={() => setExpandedIndex(index)} />
      ))}
    </>
  )
}
export const SimpleAccordion: React.FC<SimpleAccordionCardProps> = ({
  name, linkText, to, href, description, expanded, onChange, children,
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Accordion expanded={expanded} onChange={() => onChange?.()}>
      <AccordionSummary expandIcon={<ExpandMoreRounded />} aria-controls="panel1bh-content" id="panel1bh-header">
        <Typography variant="h6" textAlign="left" gutterBottom={isMobile ? true : false}>
          {name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {description && (
          <Typography variant="body1" fontWeight={400} textAlign="left">
            {description}
          </Typography>
        )}
        {children}
        {(href || to) && (
          <ButtonEx href={href} to={to} target={href ?? '_blank'}>
            {linkText ?? 'Learn More'}
          </ButtonEx>
        )}
      </AccordionDetails>
    </Accordion>
  )
}
