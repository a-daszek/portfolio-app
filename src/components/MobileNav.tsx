import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-blue-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetDescription className="flex flex-col gap-4">
          <Link
            to="/projects"
            className="flex text-gray-500 items-center font-bold"
          >
            Projekty
          </Link>
          <Link
            to="about"
            className="flex text-gray-500 items-center font-bold"
          >
            O mnie
          </Link>
          <Link
            to="/#contact"
            className="flex text-gray-500 items-center font-bold"
          >
            Kontakt
          </Link>
          <div className="flex justify-end">
            <ModeToggle />
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
