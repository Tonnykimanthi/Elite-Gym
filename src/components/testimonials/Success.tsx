import { successList } from "./testimonialsList";

const Success = () => {
  return (
    <div className="grid grid-cols-4 gap-5 text-dark max-md:grid-cols-2">
      {successList.map((item, index) => (
        <div
          key={index}
          className="rounded-lg bg-light/80 p-5 backdrop-blur-md"
        >
          <p className="text-3xl font-bold">{item.amount}</p>
          <p className="text-sm mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Success;
