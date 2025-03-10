import styled from "styled-components";

export const StyledCircle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 3rem;
    border-radius: 50%;
    background-image: linear-gradient(
        ${({ theme }) => theme.colors.violetBlueCircle},
    ${({ theme }) => theme.colors.persianBlueCircle}
  );
`;

export const StyledHeader1 = styled.h1`
    font-size: 4rem;
    font-weight: ${({ theme }) => theme.fontWeights.bolder};
    color: ${({ theme }) => theme.colors.white};
`;
