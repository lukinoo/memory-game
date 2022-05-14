import { IS_MATCHED, SHUFFLE_CARDS } from "./actions";
import { State, Actions } from "./interface";
import card_data from "../data/cards.json";
import { initial_state } from "./initialState";

export const cardReducer = (
  state: State = initial_state,
  action: Actions
): State => {
  switch (action.type) {
    case SHUFFLE_CARDS:
      return [...card_data, ...card_data]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({
          ...card,
          id: Math.random(),
        }));
    case IS_MATCHED:
      return state.map((card) => {
        if (card.src === action.payload.src) {
          return {
            ...card,
            matched: true,
          };
        }
        return card;
      });
    default:
      return state;
  }
};
