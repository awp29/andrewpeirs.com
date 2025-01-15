import { twMerge } from "tailwind-merge";

const FullWidthImage = (props) => {
  const { className, src } = props;
  return (
    <div className="px-[16px] md:mx-auto md:max-w-[840px]">
      <img
        className={twMerge(
          "border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg",
          "w-full h-auto mt-[32px] mb-[96px]",
          "md:mb-[128px] md:max-w-[840px]",
          className
        )}
        src={src}
      />
    </div>
  );
};

export default FullWidthImage;
