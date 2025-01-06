import classNames from "classnames";
import { default as NextImage } from "next/image";

const Image = (props) => {
  const { src } = props;

  return (
    <div
      className={classNames(
        "flex bg-[#26B0FF0D] flex-1 p-[32px]",
        "lg:col-span-6"
      )}
    >
      <NextImage
        style={{ width: "100%", height: "auto" }}
        className="object-contain m-auto aspect-video drop-shadow-lg"
        src={src}
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Image;
