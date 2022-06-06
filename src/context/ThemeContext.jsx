import { createContext, useReducer } from "react";
import ThemeReducer from "./ThemeReducer";

const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(ThemeReducer, "dark");
  const changeTheme = () => {
    dispatch({ type: "theme/toggle" });
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
