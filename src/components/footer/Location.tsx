// Icons
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Location = () => {
  return (
    <div className="max-sm:text-center">
      <div className="text-4xl font-bold">LOGO</div>
      <p className="mt-2">123 CBD.</p>
      <p>Nairobi, Moi avenue</p>
      <p>123@gmail.com</p>
      <div className="mt-2 space-x-2">
        <button className="rounded-full border border-secondary p-2 transition hover:bg-secondary hover:text-light">
          <FaXTwitter className="size-4" />
        </button>
        <button className="rounded-full border border-secondary p-2 transition hover:bg-secondary hover:text-light">
          <FaFacebookF className="size-4" />
        </button>
        <button className="rounded-full border border-secondary p-2 transition hover:bg-secondary hover:text-light">
          <FaInstagram className="size-4" />
        </button>
        <button className="rounded-full border border-secondary p-2 transition hover:bg-secondary hover:text-light">
          <FaLinkedinIn className="size-4" />
        </button>
      </div>
    </div>
  );
};

export default Location;
