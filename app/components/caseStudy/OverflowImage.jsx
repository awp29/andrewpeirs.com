import { twMerge } from "tailwind-merge";
import Image from "next/image";

const OverflowImage = (props) => {
  const { className, src } = props;
  return (
    <div className={twMerge("overflow-hidden mb-[96px]", "md:mb-[192px]")}>
      <Image
        className={twMerge(
          "w-full h-auto mx-auto min-w-[600px] relative ml-[50%] translate-x-[-50%] md:min-w-[1440px] md:px-[32px]",
          className
        )}
        src={src}
        width="0"
        height="0"
        sizes="100vw"
        alt="Four screenshots of the Easy Park app"
      />
    </div>
  );
};

export default OverflowImage;
