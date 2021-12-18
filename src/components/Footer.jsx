import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className="flex footer bg-gray-50 dark:bg-gray-900  text-center justify-center p-3 ">
        <Link to="/dashboard" className="self-center font-logo dark:text-neoblue">
          ©️Stikify
        </Link>
      </footer>
    );
  };
export default Footer;