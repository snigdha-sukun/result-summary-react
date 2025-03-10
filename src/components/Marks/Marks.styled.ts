import styled from "styled-components";

export const StyledLi = styled.li<{ color: string }>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 5rem;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme, color }) => theme.colors[color as keyof typeof theme.colors]};
    background-color: ${({ theme, color }) => theme.colors[`${color}Bg` as keyof typeof theme.colors]};
`;

export const StyledMarks = styled.span`
    color: ${({ theme }) => theme.colors.darkGrayBlue};
`;

export const StyledTotal = styled.span`
    color: ${({ theme }) => theme.colors.lightGrayBlue};
`;

export const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`;