import { SITE_NAME } from "../../config";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-5">
      <Link to="/" className="text-2xl font-black uppercase">
        {SITE_NAME}
      </Link>
      <ThemeToggle />
    </header>
  );
}
