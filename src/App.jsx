import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Dashboard from "./pages/Dashboard";
import "./styles/global.css";
import bg_light from "./assets/images/bgs/bg_light.png";
import bg_dark from "./assets/images/bgs/bg_dark.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === "dark" ? true : false
  );
  useEffect(() => {
    if (darkMode === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div
      style={{
        backgroundImage: `url(${darkMode === true ? bg_dark : bg_light})`,
        backgroundSize: "cover",
      }}
      className={`transition-colors dark:bg-gray-800 bg-gray-300  dark:text-white bg-fixed`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;