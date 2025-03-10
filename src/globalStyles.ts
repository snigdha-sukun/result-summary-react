import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  body {
    font-size: ${({ theme }) => theme.fontSizes.base};
    background-color: ${({ theme }) => theme.colors.paleBlue};
    font-weight: ${({ theme }) => theme.fontWeights.base};
    color: ${({ theme }) => theme.colors.darkGrayBlue};
  }
`;
