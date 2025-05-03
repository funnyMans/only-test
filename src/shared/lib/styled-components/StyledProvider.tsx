'use client';

import { useDarkMode } from 'usehooks-ts';
import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from './registry';
import lightTheme, { darkTheme } from './theme';
import GlobalStyles from './GlobalStyles';

import HomePageBtn from '@/shared/ui/buttons/HomePageBtn';
import ThemeToggler from '@/shared/ui/buttons/ThemeToggler';

const StyledProvider = (props: React.PropsWithChildren) => {
  const { isDarkMode } = useDarkMode({ initializeWithValue: false });
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <StyledComponentsRegistry>
        <GlobalStyles />
        <HomePageBtn />
        <ThemeToggler />
        {props.children}
      </StyledComponentsRegistry>
    </ThemeProvider>
  );
};

export default StyledProvider;
