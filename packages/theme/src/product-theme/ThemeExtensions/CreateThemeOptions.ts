import type { createTheme } from '@mui/material'

// Ideally, MUI would supply this type as an export but it doesn't.
// This is a workaround to ensure that the type matches the expected structure of createTheme's first argument.
export type CreateThemeOptions = Parameters<typeof createTheme>[0]
