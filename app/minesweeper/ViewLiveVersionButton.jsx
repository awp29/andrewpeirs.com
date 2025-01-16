import classNames from "classnames";
import Image from "next/image";
import { ibm } from "app/fonts";
import React from "react";

const ViewLiveVersionButton = React.forwardRef((_, ref) => {
  return (
    <a
      className={classNames(
        ibm.className,
        "group block",
        "bg-[#4C64D9] text-white items-center w-fit text-[14px] px-[12px] py-[8px] mt-[24px] drop-shadow-md",
        "hover:brightness-95",
        "active:brightness-90 active:drop-shadow-none"
      )}
      href="https://sm-30.vercel.app/"
    >
      <span className="block relative overflow-clip">
        <span
          className={classNames(
            "flex gap-[8px] items-center transition-transform",
            "group-hover:translate-y-[calc(-100%+-0.25rem)]"
          )}
        >
          View live version
          <Image
            src="/icons/externalLink.svg"
            width={20}
            height={20}
            alt="an arrow pointing right"
          />
        </span>

        <span
          className={classNames(
            "flex gap-[8px] items-center transition-transform absolute top-[calc(100%+0.25rem)] left-0",
            "group-hover:translate-y-[calc(-100%+-0.25rem)]"
          )}
        >
          View live version
          <Image
            src="/icons/externalLink.svg"
            width={20}
            height={20}
            alt="an arrow pointing right"
          />
        </span>
      </span>
    </a>
  );
});

export default ViewLiveVersionButton;
