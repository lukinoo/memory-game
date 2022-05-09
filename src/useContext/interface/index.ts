import { Cards } from "../../interfaces";

type choices = Cards | null;

export type ContextType = {
  cards: Array<Cards>;
  choiceOne: choices;
  choiceTwo: choices;
  turns: number;
  cardDisabled: boolean;
  gameEndHandler: () => boolean;
  shuffleCards: () => void;
  handleChoice: (card: Cards) => void;
};
