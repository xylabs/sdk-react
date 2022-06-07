import { CssBaseline } from '@mui/material';
import { InvertableThemeProvider } from '@xylabs/react-common';
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
  localStorage.setItem('AuthState', null)

  const darkMode = useDarkMode()

  return (
    <InvertableThemeProvider dark={darkMode} darkTheme={{}} options={{}}>
      <CssBaseline enableColorScheme />
      <FlexCol alignItems="unset">
        <Story {...context}/>
      </FlexCol>
    </InvertableThemeProvider>
  );
};

export const decorators = [withThemeProvider];