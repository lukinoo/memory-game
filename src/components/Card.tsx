import { FC, useContext } from "react";
import { Cards } from "../interfaces";
import { StyledCard } from "../styledComponents/Card.styled";
import { UserContext } from "../useContext/Context";
import { ContextType } from "../useContext/interface";

interface Props {
  card: Cards;
}

const Card: FC<Props> = ({ card }) => {
  const { choiceOne, choiceTwo, handleChoice, cardDisabled } =
    useContext<ContextType>(UserContext);

  const isFlipped: boolean =
    card === choiceOne || card === choiceTwo || card.matched;

  return (
    <StyledCard>
      <div className={isFlipped ? "flipped" : ""}>
        <img src={card.src} className="front" alt="card front" />
        <img
          onClick={() => {
            if (!cardDisabled) {
              handleChoice(card);
            }
          }}
          src="../assets/cover.png"
          className="back"
          alt="card back"
        />
      </div>
    </StyledCard>
  );
};

export default Card;
