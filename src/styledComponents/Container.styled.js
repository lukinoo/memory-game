import styled from "styled-components";

export const StyledContainer = styled.div`
  min-height: 88vh;
  width: 60%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
`;

export const StyledContainerTitle = styled.h2`
  font-size: 2rem;
  justify-self: center;
  align-self: center;
  grid-column: 1/5;
`;
