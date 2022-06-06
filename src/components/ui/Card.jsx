import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

export default function Card({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-lg py-5 px-8 ${
        theme === "dark" ? "bg-gray-400" : "bg-gray-200"
      }`}
    >
      {children}
    </div>
  );
}
