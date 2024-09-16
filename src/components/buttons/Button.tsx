import { GoArrowRight } from "react-icons/go";

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <div
      className={`bg-primary hover:bg-primary/80 group flex items-center gap-x-2 rounded px-4 py-2 text-black transition active:scale-95`}
    >
      <span>{text}</span>
      <GoArrowRight className="size-6 transition group-hover:translate-x-1" />
    </div>
  );
};

export default Button;
