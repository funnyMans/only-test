'use client';

import { ThemeProvider } from 'styled-components';
import lightTheme, { darkTheme } from './theme';
import GlobalStyles from './GlobalStyles';
import { useDarkMode } from 'usehooks-ts';
import ThemeToggler from '@/shared/ui/buttons/ThemeToggler';
import HomePageBtn from '@/shared/ui/buttons/HomePageBtn';

const StyledProvider = (props: React.PropsWithChildren) => {
  const { isDarkMode } = useDarkMode({ initializeWithValue: false });
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HomePageBtn />
      <ThemeToggler />
      {props.children}
    </ThemeProvider>
  );
};

export default StyledProvider;
