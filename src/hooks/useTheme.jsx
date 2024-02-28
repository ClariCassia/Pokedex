import { useContext } from "react";
import { ThemesContext } from "../context/theme-context";

export const useTheme =() => useContext(ThemesContext)