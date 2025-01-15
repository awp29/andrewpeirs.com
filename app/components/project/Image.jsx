import classNames from "classnames";
import { default as NextImage } from "next/image";

const Image = (props) => {
  const { src } = props;

  return (
    <div
      className={classNames(
        "flex bg-[#26B0FF0D] flex-1 p-[8px]",
        "md:p-[16px]",
        "lg:col-span-6"
      )}
    >
      <NextImage
        className="w-full h-auto object-contain m-auto aspect-video drop-shadow-lg"
        src={src}
        width="0"
        height="0"
        sizes="100vw"
      />
    </div>
  );
};

export default Image;
