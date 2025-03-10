import styled from "styled-components";
import { mobile } from "./mixins";

export const StyledContainer = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 2rem;

    ${mobile`
    flex-direction: column;
    border-radius: 0;
  `}
`;

export const StyledHeader3 = styled.h3`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
