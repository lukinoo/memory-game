import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  div {
    img {
      width: 100%;
      transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
      &.front {
        transform: rotateY(90deg);
        position: absolute;
      }
      &.back {
        transform: rotateY(0);
      }
    }
    &.flipped {
      img {
        &.front {
          transform: rotateY(0deg);
          transition-delay: 0.2s;
        }
        &.back {
          transform: rotateY(90deg);
          transition-delay: 0s;
        }
      }
    }
  }
`;
