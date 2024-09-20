import Newsleter from "./Newsleter";

const NewsletterSection = () => (
  <section className="grid gap-5 grid-cols-2 p-10 max-md:p-5 max-sm:p-2 max-md:grid-cols-1 max-md:place-items-center">
    <Newsleter />
    <div className="overflow-hidden rounded-xl">
      <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1682310071124-33632135b2ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwbWFwc3xlbnwwfHwwfHx8MA%3D%3D" alt="Location image" />
    </div>
  </section>
);

export default NewsletterSection;
