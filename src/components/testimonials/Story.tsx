import { testimonialsList } from "./testimonialsList";

const Story = () => {
  return (
    <>
      {testimonialsList.map((item, index) => (
        <div
          key={index}
          className="relative nrounded-xl bg-dark/50 p-5 shadow-lg shadow-dark/50"
        >
          <img
            className="absolute -top-14 left-1/2 size-24 -translate-x-1/2 rounded-full border-4 border-primary object-cover"
            src={item.profilePic}
            alt="Profile image"
          />
          <p className="mt-8 text-center">{item.testimonial}</p>
          <p className="mt-2 text-center font-medium text-primary">
            {item.name},
            <span className="font-normal italic text-light"> Proud Member</span>
          </p>
        </div>
      ))}
    </>
  );
};

export default Story;
