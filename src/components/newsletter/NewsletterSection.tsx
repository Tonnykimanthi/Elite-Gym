// Components
import Newsleter from "./Newsleter";
// Images
import MapImage from "../../assets/map.png";

const NewsletterSection = () => (
  <section className="grid grid-cols-2 gap-5 p-10 max-md:grid-cols-1 max-md:place-items-center max-md:p-5 max-sm:p-2">
    <Newsleter />
    <div className="overflow-hidden rounded-xl">
      <img
        className="h-full w-full object-cover"
        src={MapImage}
        alt="Location image"
      />
    </div>
  </section>
);

export default NewsletterSection;
