// Components
import Plan from "./Plan";

const Membership = () => {
  return (
    <section className="mt-5 bg-slate-800 p-8 pt-10 max-md:px-5 max-sm:px-2">
      <h2 className="text-center text-5xl font-bold uppercase max-sm:text-4xl">
        Membership plans
      </h2>
      <div className="m-5 grid grid-cols-3 place-items-center gap-5 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:[&>*:nth-child(3)]:col-span-2 max-md:[&>*:nth-child(3)]:col-span-1">
        <Plan />
      </div>
    </section>
  );
};

export default Membership;
