import { createContext } from "react";
import Hero from "../utils/types/hero.interface";

const AppContext = createContext<Hero[] | []>([]);

export default AppContext;

