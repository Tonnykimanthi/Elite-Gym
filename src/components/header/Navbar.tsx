// Components
import { navList } from "./navList";
// Icons
import { MdOutlineClose } from "react-icons/md";

type NavbarProps = {
  navIsOpen: boolean;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ navIsOpen, setNavIsOpen }: NavbarProps) => {
  return (
    <nav
      className={`bg-light/20 max-sm:bg-dark/80 inset-0 origin-top-right rounded-md p-2 px-4 transition max-sm:absolute ${navIsOpen ? "" : "max-sm:scale-0 max-sm:opacity-0"}`}
    >
      <button
        className="absolute right-3 top-3 sm:hidden"
        onClick={() => setNavIsOpen(false)}
      >
        <MdOutlineClose className="size-8"/>
      </button>
      <ul className="flex items-center gap-8 max-sm:mt-10 max-sm:flex-col">
        {navList.map((item, index) => (
          <li
            key={index}
            className={`hover:text-primary cursor-pointer transition ${index === 0 ? "text-primary" : ""}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
