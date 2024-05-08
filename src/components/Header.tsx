import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <div id="header" className="border-b-2 border-b-blue-500 py-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-blue-500 transition-colors duration-300 hover:text-gray-400"
        >
          AD
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="flex items-center hidden md:block">
          <div className="ml-auto flex space-x-4">
            <Link
              className="text-gray-500 px-3 py-1 bg-gradient-to-r from-blue-600 via-fuchsia-500 to-indigo-700 bg-no-repeat bg-bottom bg-[length:60%_2px] hover:bg-[length:100%_2px] font-bold transition-colors duration-300 hover:text-blue-500"
              to="/projects"
            >
              Projekty
            </Link>
            <Link
              className="text-gray-500 px-3 py-1 bg-gradient-to-r from-blue-600 via-fuchsia-500 to-indigo-700 bg-no-repeat bg-bottom bg-[length:60%_2px] hover:bg-[length:100%_2px] font-bold transition-colors duration-300 hover:text-blue-500"
              to="/about"
            >
              O mnie
            </Link>
            <Link
              className="text-gray-500 px-3 py-1 bg-gradient-to-r from-blue-600 via-fuchsia-500 to-indigo-700 bg-no-repeat bg-bottom bg-[length:60%_2px] hover:bg-[length:100%_2px] font-bold transition-colors duration-300 hover:text-blue-500"
              to="/#contact"
            >
              Kontakt
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
