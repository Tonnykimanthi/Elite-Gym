import { useState } from "react";
// Components
import Button from "../buttons/Button";
import Logo from "./Logo";
import Navbar from "./Navbar";
// Icons
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <header className="p-3">
      <div className="flex items-center justify-between">
        <Logo />
        <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
        <button className="bg-primary hover:bg-primary/80 text-dark hidden rounded px-5 py-2 transition active:scale-95 sm:block">
          Sign up
        </button>
        <button
          className={`sm:hidden ${navIsOpen ? "hidden" : ""}`}
          onClick={() => setNavIsOpen(true)}
        >
          <RiMenu3Fill className="size-8" />
        </button>
      </div>
      <div className="mt-20 max-sm:text-center sm:max-w-lg">
        <h1 className="text-5xl font-bold uppercase">
          Your Fitness Journey Begins at EliteGym
        </h1>
        <p className="mt-5">
          Join EliteGym to kickstart a fitness journey that's all about you.
          Experience a blend of personalized training, modern facilities, and a
          vibrant community designed to motivate and empower every step of the
          way.
        </p>
        <button className="mt-5">
          <Button text="Explore more" />
        </button>
      </div>
    </header>
  );
};

export default Header;
