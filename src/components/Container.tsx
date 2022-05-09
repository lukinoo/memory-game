import { useContext } from "react";
import { StyledContainer } from "../styledComponents/Container.styled";
import { UserContext } from "../useContext/Context";
import { ContextType } from "../useContext/interface";
import Card from "./Card";

const Container = () => {
  const { cards } = useContext<ContextType>(UserContext);

  return (
    <StyledContainer>
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </StyledContainer>
  );
};

export default Container;
