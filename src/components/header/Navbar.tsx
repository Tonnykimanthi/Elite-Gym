import { navList } from "./navList";

const Navbar = () => {
  return (
    <nav className="rounded-md bg-white/20 p-2 px-4">
      <ul className="flex items-center gap-x-8">
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
