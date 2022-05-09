import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTitle = styled.h2`
  font-size: 2rem;
  padding: 0.1rem;
  letter-spacing: 1.3px;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid #cdcdcd;
`;

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: none;
  color: #fff;
  font-size: 1rem;
  border-radius: 2px;
  text-transform: capitalize;
  letter-spacing: 1.3px;
  font-family: inherit;
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  transition: all 0.2s ease;
  svg {
    margin-left: 0.2rem;
    fill: #ddd;
    transition: transform 0.3s ease;
  }
  &:hover {
    svg {
      transform: rotate(1turn);
    }
  }
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;
