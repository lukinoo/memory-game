import { createContext } from "react";
import { ContextType } from "./interface";

export const UserContext = createContext<ContextType>({} as ContextType);
