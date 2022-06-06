import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-gray-200" : ""
      }`}
    >
      <div className="container mx-auto py-5 px-2.5 md:px-0">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Post />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
