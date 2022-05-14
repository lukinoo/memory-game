import { Cards } from "../../interfaces";
import { Actions } from "../../reducer/interface";

type choices = Cards | null;

export type ContextType = {
  cards: Array<Cards>;
  choiceOne: choices;
  choiceTwo: choices;
  turns: number;
  cardDisabled: boolean;
  setTurns: React.Dispatch<React.SetStateAction<number>>;
  gameEndHandler: () => boolean;
  dispatch: React.Dispatch<Actions>;
  handleChoice: (card: Cards) => void;
};
