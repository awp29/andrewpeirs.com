import Image from "next/image";
import { twMerge } from "tailwind-merge";

const FullWidthImage = (props) => {
  const { className, src } = props;
  return (
    <Image
      className={twMerge(
        "w-full h-auto mt-[32px] mb-[96px]",
        "md:mb-[128px] md:max-w-[840px] mx-auto",
        className
      )}
      src={src}
      width="0"
      height="0"
      sizes="100vw"
    />
  );
};

export default FullWidthImage;
