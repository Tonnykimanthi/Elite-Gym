// Components
import Button from "../buttons/Button";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="p-3">
      <div className="flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
      <div className="mt-20 max-w-lg">
        <h1 className="text-5xl font-bold uppercase">
          Your Fitness Journey Begins at EliteGym
        </h1>
        <p className="mt-5">
          Join EliteGym to kickstart a fitness journey that's all about you.
          Experience a blend of personalized training, modern facilities, and a
          vibrant community designed to motivate and empower every step of the
          way.
        </p>
        <button>
          <Button
            text="Explore more"
            styles="bg-primary text-black mt-2 rounded hover:bg-primary/80 transition"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
