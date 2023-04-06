import { CssBaseline } from '@mui/material';
import { InvertibleThemeProvider } from '@xylabs/react-invertible-theme';
import { FlexCol } from '@xylabs/react-flexbox';
import { useDarkMode } from 'storybook-dark-mode';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withThemeProvider = (Story, context) => {
  // Clear the auth state with each story
  localStorage.removeItem('AuthState')

  const darkMode = useDarkMode()

  return (
    <InvertibleThemeProvider dark={darkMode} darkTheme={{}} options={{}}>
      <CssBaseline enableColorScheme />
      <FlexCol alignItems="unset">
        <Story {...context}/>
      </FlexCol>
    </InvertibleThemeProvider>
  );
};

export const decorators = [withThemeProvider];