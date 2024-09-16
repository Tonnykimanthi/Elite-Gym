// Icons
import { GoArrowRight } from "react-icons/go";

const FreeTrial = () => {
  return (
    <div className="rounded-lg bg-slate-800 p-5">
      <h4 className="text-xl font-medium uppercase">We offer</h4>
      <p className="text-sm">Free trial sessions for new members</p>
      <button className="bg-light text-dark hover:bg-light/80 group mt-2 flex items-center gap-x-2 rounded-full px-3 py-1 text-sm transition active:scale-95">
        Sign up
        <span className="bg-primary rounded-full p-1 transition group-hover:translate-x-1">
          <GoArrowRight className="size-5" />
        </span>
      </button>
    </div>
  );
};

export default FreeTrial;
