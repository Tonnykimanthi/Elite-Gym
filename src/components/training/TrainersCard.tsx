// Components
import Button from "../buttons/Button";
// Images
import trainingImage2 from "../../assets/training2.avif";

const TrainersCard = () => {
  return (
    <div className="space-y-5 max-md:text-center">
      <div className="overflow-hidden rounded-2xl">
        <img src={trainingImage2} alt="Trainers" />
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
        assumenda.
      </p>
      <button>
        <Button text="Explore more" />
      </button>
    </div>
  );
};

export default TrainersCard;
