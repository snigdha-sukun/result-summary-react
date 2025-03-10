import styled from "styled-components";
import { mobile } from "../../mixins";

export const StyledResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 2rem;
    border-radius: 2rem;
    width: 25rem;
    background-image: linear-gradient(
    ${({ theme }) => theme.colors.lightSlateBlueBackground},
    ${({ theme }) => theme.colors.lightRoyalBlueBackground}
  );
    color: ${({ theme }) => theme.colors.lightLavender};

    ${mobile`
        border-radius: 0 0 2rem 2rem;
      `}
`;

export const StyledHeader2 = styled.h2`
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
`;

export const StyledParagraph = styled.p`
    text-align: center;
    padding: 0 1rem;
`

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
`;
