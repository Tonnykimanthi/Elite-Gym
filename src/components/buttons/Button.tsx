import { GoArrowRight } from "react-icons/go";

type ButtonProps = {
  text: string;
  styles?: string;
};

const Button = ({ text, styles }: ButtonProps) => {
  return (
    <div
      className={`group flex items-center gap-x-2 px-4 py-2 active:scale-95 ${styles}`}
    >
      <span>{text}</span>
      <GoArrowRight className="size-6 transition group-hover:translate-x-1" />
    </div>
  );
};

export default Button;
