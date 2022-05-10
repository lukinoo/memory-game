import gsap from "gsap";
import { FC, useContext, useEffect } from "react";
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

  useEffect(() => {
    gsap.fromTo(
      ".card",
      0.5,
      { transform: "translateY(-50%)", opacity: 0 },
      { transform: "translateY(0)", opacity: 1, stagger: 0.5 }
    );
  }, []);

  return (
    <StyledCard className="card">
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
