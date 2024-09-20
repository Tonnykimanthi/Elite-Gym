import { successList } from "./testimonialsList";

const Success = () => {
  return (
    <div className="grid grid-cols-4 gap-5 p-10 text-light max-md:grid-cols-2 max-md:p-5 max-sm:p-2">
      {successList.map((item, index) => (
        <div
          key={index}
          className="rounded-lg bg-secondary/20 p-5 backdrop-blur-md"
        >
          <p className="text-3xl font-bold">{item.amount}</p>
          <p className="mt-2 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Success;
