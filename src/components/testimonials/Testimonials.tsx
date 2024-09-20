// Components
import Story from "./Story";

const Testimonials = () => {
  return (
    <section className="mt-5 bg-primary p-8 pt-10 max-md:px-5 max-sm:px-2">
      <h2 className="text-center text-5xl font-bold uppercase">Testimonials</h2>
      <div className="mt-20 grid grid-cols-4 gap-x-5 gap-y-16 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <Story />
      </div>
    </section>
  );
};

export default Testimonials;
