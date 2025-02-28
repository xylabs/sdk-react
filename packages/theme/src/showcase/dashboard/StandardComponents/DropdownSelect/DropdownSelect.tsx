import { KeyboardArrowDownRounded } from '@mui/icons-material'
import type { SelectChangeEvent, SelectProps } from '@mui/material'
import {
  alpha,
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from '@mui/material'
import { FlexRow } from '@xylabs/react-flexbox'
import React, { useMemo, useState } from 'react'

export interface DropdownItem {
  icon: React.ReactNode
  text: string
  value: string
}

export interface DropdownSelectProps {
  items: DropdownItem[]
  onChange: (value: string) => void
  selectedValue: string
  size?: SelectProps['size']
}

export const DropdownSelect: React.FC<DropdownSelectProps> = ({
  items,
  onChange,
  selectedValue,
  size,
}) => {
  const theme = useTheme()
  const [localSelectedValue, setLocalSelectedValue] = useState(selectedValue)

  useMemo(() => {
    setLocalSelectedValue(selectedValue)
  }, [selectedValue])

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value
    setLocalSelectedValue(newValue)
    onChange(newValue)
  }

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <Select
          color="secondary"
          labelId="styled-select-label"
          id="styled-select"
          size={size}
          value={localSelectedValue}
          onChange={handleChange}
          IconComponent={KeyboardArrowDownRounded}
          inputProps={{ color: theme.palette.text.primary }}
          MenuProps={{
            PaperProps: {
              sx: {
                'marginTop': 1,
                '& .Mui-selected': {
                  backgroundColor: alpha(theme.palette.secondary.main, 0.1) + ' !important',
                  color: theme.palette.secondary.main,
                },
                '& .MuiList-root': { padding: 0 },
                '& .MuiMenuItem-root': {
                  'display': 'flex',
                  'alignItems': 'center',
                  'gap': 1,
                  'marginX': size === 'small' ? 0.5 : 1,
                  'marginY': size === 'small' ? 0.5 : 1,
                  'padding': size === 'small' ? 0.75 : 1,
                  'borderRadius': 1,
                  'border': `${alpha(theme.palette.secondary.main, 0)} 2px solid`,
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.secondary.main, 0),
                    border: `${theme.palette.secondary.main} 2px solid`,
                    color: theme.palette.secondary.main,
                  },
                },
              },
            },
          }}
        >
          {items.map(item => (
            <MenuItem key={item.value} value={item.value}>
              <FlexRow gap={1} justifyContent="flex-start">
                {item.icon}
                <Typography variant="body1" fontWeight={400}>{item.text}</Typography>
              </FlexRow>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
