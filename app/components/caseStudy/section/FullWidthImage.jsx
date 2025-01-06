import Image from "next/image";
import { twMerge } from "tailwind-merge";

const FullWidthImage = (props) => {
  const { className, src } = props;
  return (
    <Image
      className={twMerge(
        "mt-[32px] mb-[96px]",
        "md:mb-[128px] md:max-w-[840px] mx-auto",
        className
      )}
      src={src}
      width={2000}
      height={1638}
    />
  );
};

export default FullWidthImage;
