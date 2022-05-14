import { Cards } from "../../interfaces";

export type State = Array<Cards>;

export type Actions = {
  type: "SHUFFLE_CARDS" | "MATCHED";
  payload: {
    src?: string;
    id?: {};
  };
};
