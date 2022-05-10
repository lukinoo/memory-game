import { useContext } from "react";
import {
  StyledContainer,
  StyledContainerTitle,
} from "../styledComponents/Container.styled";
import { UserContext } from "../useContext/Context";
import { ContextType } from "../useContext/interface";
import Card from "./Card";

const Container = () => {
  const { cards, gameEndHandler } = useContext<ContextType>(UserContext);

  return (
    <StyledContainer>
      {gameEndHandler() ? (
        <StyledContainerTitle>Game End 🥳</StyledContainerTitle>
      ) : (
        <>
          {cards.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </>
      )}
    </StyledContainer>
  );
};

export default Container;
