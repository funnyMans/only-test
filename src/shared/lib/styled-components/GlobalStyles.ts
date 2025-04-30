import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
    transition: all 0.7s ease-in-out;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}

`;

export default GlobalStyles;
