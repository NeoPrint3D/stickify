import { Link } from "react-router-dom";
import { Moon, Sun } from "../assets/svg/Icons";
const Header = (props) => {
  const { darkMode, setDarkMode } = props;
  return (
    <header
      id="header"
      className="grid grid-cols-2 outer-color p-5 top border-b-4 border-neoblue "
    >
      <div className="flex justify-start text-center align-middle">
        <Link
          to="/"
          className="text-3xl self-center font-logo dark:text-neoblue "
        >
          Stikify
        </Link>
      </div>
      <div className="flex justify-end gap-3 sm:gap-5 text-center place-items-center text-xs sm:text-sm">
        <button
          className="p-3 rounded-full"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
        <Link to="/" className="text-base sm:text-lg underline-neoblue">
          Home
        </Link>
        <Link to="/about" className="text-base sm:text-lg underline-neoblue">
          About
        </Link>
        <Link to="/shop" className="text-base sm:text-lg underline-neoblue">
          Store
        </Link>
      </div>
    </header>
  );
};
export default Header;
