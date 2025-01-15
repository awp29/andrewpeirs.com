import { twMerge } from "tailwind-merge";

const Image = (props) => {
  const { className, src } = props;
  return (
    <img
      className={twMerge(
        "w-full h-auto mt-[32px] mb-[96px]",
        "md:mb-[128px] md:max-w-[840px] mx-auto",
        "border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg",
        className
      )}
      src={src}
    />
  );
};

export default Image;
