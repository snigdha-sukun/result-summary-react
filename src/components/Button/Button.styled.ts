import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.darkGrayBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightRoyalBlueBackground};
  }
`;