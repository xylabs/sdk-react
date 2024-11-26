// VerificationList.tsx

import {
  Box, Table, TableBody, TableCell, TableHead, TableRow, Typography, useTheme,
} from '@mui/material'
import React from 'react'

export interface VerificationStep {
  name: string
  time: string
  verified: boolean
}

interface VerificationListProps {
  locationHeader: string
  regions: VerificationStep[]
  statusHeader: string
  timeHeader: string
}

export const VerificationList: React.FC<VerificationListProps> = ({
  regions,
  locationHeader,
  timeHeader,
  statusHeader,
}) => {
  const theme = useTheme()
  return (
    <Box>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="body2" fontWeight="bold">
                {locationHeader}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" fontWeight="bold">
                {timeHeader}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" fontWeight="bold">
                {statusHeader}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {regions.map((region, index) => (
            <TableRow key={index} sx={{ borderBottom: index === regions.length - 1 ? 'none' : 'inherit' }}>
              <TableCell>
                <Typography variant="body2">{region.name}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{region.time}</Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="body2"
                  color={region.verified ? theme.palette.success.main : theme.palette.error.main}
                >
                  {region.verified ? 'Verified' : 'Unverified'}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}
