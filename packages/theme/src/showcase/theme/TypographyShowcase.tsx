import {
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import React from 'react'

export const TypographyShowcase: React.FC = () => {
  const theme = useTheme()
  return (
    <Stack flexDirection="column" gap={2}>
      <Typography variant="h5" gutterBottom>
        Font Family:
        <strong>{theme.typography.h1.fontFamily?.toString()}</strong>
      </Typography>
      <Stack gap={2} flexDirection="row" flexGrow={1}>
        <Stack gap={1} flexDirection="column" sx={{ width: '50%' }}>
          <Stack gap={0.25}>
            <Typography variant="subtitle2">
              H1
            </Typography>
            <Typography variant="h1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Stack>
          <Stack gap={0.25}>
            <Typography variant="subtitle2">
              H2
            </Typography>
            <Typography variant="h2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Stack>
          <Stack gap={0.25}>
            <Typography variant="subtitle2">
              H3
            </Typography>
            <Typography variant="h3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Stack>
          <Stack gap={0.25}>
            <Typography variant="subtitle2">
              H4
            </Typography>
            <Typography variant="h4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Stack>
          <Stack gap={0.25}>
            <Typography variant="subtitle2">
              H5
            </Typography>
            <Typography variant="h5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Stack>
        </Stack>
        <Stack gap={1} flexDirection="column" sx={{ width: '50%' }}>
          <Stack gap={0.25}>
            <Typography variant="subtitle2">
              H6
            </Typography>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Stack>
          <Stack gap={0.25}>
            <Typography variant="subtitle2">
              Body1
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laudantium dolore magni esse nihil quasi ex maiores sunt rem, dicta vitae reprehenderit animi, exercitationem fugit. Consequuntur tenetur adipisci natus eius?
            </Typography>
          </Stack>
          <Stack gap={0.25}>
            <Typography variant="subtitle2">
              Body2
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laudantium dolore magni esse nihil quasi ex maiores sunt rem, dicta vitae reprehenderit animi, exercitationem fugit. Consequuntur tenetur adipisci natus eius?
            </Typography>
          </Stack>
          <Stack gap={0.25}>
            <Typography variant="subtitle2">
              Subtitle1
            </Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laudantium dolore magni esse nihil quasi ex maiores sunt rem, dicta vitae reprehenderit animi, exercitationem fugit. Consequuntur tenetur adipisci natus eius?
            </Typography>
          </Stack>
          <Stack gap={0.25}>
            <Typography variant="subtitle2">
              Subtitle2
            </Typography>
            <Typography variant="subtitle2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laudantium dolore magni esse nihil quasi ex maiores sunt rem, dicta vitae reprehenderit animi, exercitationem fugit. Consequuntur tenetur adipisci natus eius?
            </Typography>
          </Stack>
          <Stack gap={0.25}>
            <Typography variant="subtitle2">
              Caption
            </Typography>
            <Typography variant="caption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laudantium dolore magni esse nihil quasi ex maiores sunt rem, dicta vitae reprehenderit animi, exercitationem fugit. Consequuntur tenetur adipisci natus eius?
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
