// Constants
import planList from "./planList";
// Icons
import { FaRegCheckCircle } from "react-icons/fa";

const Plan = () => {
  return (
    <>
      {planList.map((item, index) => (
        <div
          key={index}
          className="h-full w-full max-w-lg rounded-lg bg-light p-5 text-dark"
        >
          <div className="flex justify-between">
            <h4 className="text-xl font-bold">{item.title}</h4>
            <p className="flex flex-col items-end">
              <span className="text-2xl font-bold">Ksh {item.price}</span>
              <span className="-mt-1 text-xs">/month</span>
            </p>
          </div>
          <button className="rounded border border-secondary px-5 py-2 text-secondary transition hover:bg-secondary hover:text-light active:scale-95">
            Order now
          </button>
          <div className="mt-8 space-y-2">
            {item.plans.map((plan, i) => (
              <div key={i} className="flex items-center gap-x-5">
                <FaRegCheckCircle className="size-6 flex-shrink-0 text-dark" />
                <span>{plan}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Plan;
