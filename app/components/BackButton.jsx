import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { ibm } from "app/fonts";

const BackButton = () => {
  return (
    <Link
      className={classNames(
        ibm.className,
        "group block",
        " text-[#000933A3] items-center w-fit text-[14px] py-[8px] drop-shadow-md",
        "hover:brightness-95",
        "active:brightness-90 active:drop-shadow-none",
        "mb-[32px] md:mb-[48px]"
      )}
      href={"/"}
    >
      <span className="block relative overflow-clip">
        <span
          className={classNames(
            "flex gap-[8px] items-center transition-transform",
            "group-hover:translate-y-[calc(-100%+-0.25rem)]"
          )}
        >
          <Image
            src="/icons/arrowLeft.svg"
            width={20}
            height={20}
            alt="an arrow pointing right"
          />
          Back
        </span>

        <span
          className={classNames(
            "flex gap-[8px] items-center transition-transform absolute top-[calc(100%+0.25rem)] left-0",
            "group-hover:translate-y-[calc(-100%+-0.25rem)]"
          )}
        >
          <Image
            src="/icons/arrowLeft.svg"
            width={20}
            height={20}
            alt="an arrow pointing right"
          />
          Back
        </span>
      </span>
    </Link>
  );
};

export default BackButton;
