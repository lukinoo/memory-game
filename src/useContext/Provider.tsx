import { FC, ReactNode, useEffect, useReducer, useState } from "react";
import { Cards } from "../interfaces";
import { UserContext } from "./Context";
import { cardReducer } from "../reducer/reducer";
import { initial_state } from "../reducer/initialState";

interface Props {
  children: ReactNode;
}

const Provider: FC<Props> = ({ children }) => {
  const [cards, dispatch] = useReducer(cardReducer, initial_state);
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiseOne] = useState<null | Cards>(null);
  const [choiceTwo, setChoiseTwo] = useState<null | Cards>(null);
  const [cardDisabled, setCardDisabled] = useState<boolean>(false);

  const handleChoice = (card: Cards) => {
    choiceOne ? setChoiseTwo(card) : setChoiseOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setCardDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        dispatch({ type: "MATCHED", payload: choiceOne });
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
    dispatch({ type: "SHUFFLE_CARDS", payload: {} });
  }, []);

  return (
    <UserContext.Provider
      value={{
        cards,
        choiceOne,
        choiceTwo,
        dispatch,
        handleChoice,
        turns,
        cardDisabled,
        gameEndHandler,
        setTurns,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Provider;
