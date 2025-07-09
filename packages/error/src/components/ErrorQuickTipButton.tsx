import { CancelRounded as CancelRoundedIcon, CheckCircleOutlineRounded as CheckCircleOutlineRoundedIcon } from '@mui/icons-material'
import { type SvgIconProps, Typography } from '@mui/material'
import { FlexCol } from '@xylabs/react-flexbox'
import type { QuickTipButtonProps } from '@xylabs/react-quick-tip-button'
import { QuickTipButton } from '@xylabs/react-quick-tip-button'
import { isDefined } from '@xylabs/typeof'
import React from 'react'

import { ErrorRender } from './ErrorRender/index.ts'

const InvalidIcon = ({ ref, ...props }: SvgIconProps
  & { ref?: React.Ref<SVGSVGElement | null> }) => <CancelRoundedIcon color="error" ref={ref} {...props} />
InvalidIcon.displayName = 'InvalidIcon'

export interface ErrorQuickTipButtonProps extends QuickTipButtonProps {
  boundWitnessType?: string
  errors?: Error[]
  iconColors?: boolean
  validateError?: Error
}

export const ErrorQuickTipButton: React.FC<ErrorQuickTipButtonProps> = ({
  boundWitnessType = 'Bound Witness', errors, iconColors, validateError, ...props
}) => {
  const hasErrors = isDefined(errors) && errors.length > 0
  return (
    <QuickTipButton
      Icon={hasErrors
        ? ({ ref, ...props }) => {
            return <InvalidIcon color={iconColors ? 'error' : undefined} ref={ref} {...props} />
          }
        : ({ ref, ...props }) => {
            return <CheckCircleOutlineRoundedIcon color={iconColors ? 'success' : undefined} ref={ref} {...props} />
          }}
      hoverText={hasErrors ? `Invalid ${boundWitnessType}` : 'Valid'}
      {...props}
    >
      {hasErrors
        ? (
            <FlexCol flexWrap="wrap" alignItems="start">
              <ErrorRender error={validateError} scope="VerificationError" />
              {errors.map((error) => {
                return <Typography key={error.name}>{error.toString()}</Typography>
              })}
            </FlexCol>
          )
        : <Typography>No Errors</Typography>}
    </QuickTipButton>
  )
}
