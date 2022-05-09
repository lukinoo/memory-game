import { FC, ReactNode, useEffect, useState } from "react";
import { Cards } from "../interfaces";
import { UserContext } from "./Context";
import cardsData from "../data/cards.json";

interface Props {
  children: ReactNode;
}

const Provider: FC<Props> = ({ children }) => {
  const [cards, setCards] = useState<Cards[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiseOne] = useState<null | Cards>(null);
  const [choiceTwo, setChoiseTwo] = useState<null | Cards>(null);
  const [cardDisabled, setCardDisabled] = useState<boolean>(false);

  const shuffleCards = () => {
    // cards shuffling
    const shuffledCards: Array<Cards> = [...cardsData, ...cardsData]
      .sort(() => Math.random() - 0.5)
      .map((card: Cards) => ({
        ...card,
        id: Math.random(),
      }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card: Cards) => {
    choiceOne ? setChoiseTwo(card) : setChoiseOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setCardDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prev) => {
          return prev.map((card: Cards) => {
            if (card.src === choiceOne.src) {
              return {
                ...card,
                matched: true,
              };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const gameEndHandler = (): boolean => {
    const isFinished = cards.every((card) => card.matched);

    return isFinished;
  };

  const resetTurn = () => {
    setChoiseOne(null);
    setChoiseTwo(null);

    setTurns((c: number) => c + 1);
    setCardDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <UserContext.Provider
      value={{
        cards,
        choiceOne,
        choiceTwo,
        shuffleCards,
        handleChoice,
        turns,
        cardDisabled,
        gameEndHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Provider;
