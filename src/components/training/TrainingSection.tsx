// Components
import FreeTrial from "./FreeTrial";
import TrainersCard from "./TrainersCard";
// Images
import trainingImage from "../../assets/training1.avif";

const TrainingSection = () => {
  return (
    <section className="grid grid-cols-3 gap-5 p-8 pt-10 max-md:grid-cols-1">
      <div className="flex flex-col justify-between">
        <h2 className="uppecase text-5xl font-bold">Personal Training</h2>
        <div className="max-md:hidden size-40">
          <FreeTrial />
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl">
        <img
          className="h-full w-full object-cover"
          src={trainingImage}
          alt="A lady training in the gym"
        />
      </div>
      <div className="mx-auto hidden max-md:block">
        <FreeTrial />
      </div>
      <TrainersCard />
    </section>
  );
};

export default TrainingSection;
