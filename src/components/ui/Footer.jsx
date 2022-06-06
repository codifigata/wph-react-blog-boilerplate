import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { SITE_NAME } from "../../config";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const date = new Date().getFullYear();
  return (
    <footer
      className={`mt-10 flex items-center justify-between border-t py-5 ${
        theme === "dark"
          ? "border-gray-700 text-gray-400"
          : "border-gray-200 text-gray-700"
      }`}
    >
      <small>
        Copyright &copy; {date} {SITE_NAME} - All rights reserved.
      </small>
      <small>Coded with &hearts; by Codifigata</small>
    </footer>
  );
}
