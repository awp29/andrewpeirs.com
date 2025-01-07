import classNames from "classnames";
import Image from "next/image";
import { ibm } from "app/fonts";
import React from "react";

const JumpToFinalDesignsButton = React.forwardRef((_, ref) => {
  return (
    <button
      className={classNames(
        ibm.className,
        "group",
        "bg-[#4C64D9] text-white items-center w-fit text-[14px] px-[12px] py-[8px] mt-[24px] drop-shadow-md",
        "hover:brightness-95",
        "active:brightness-90 active:drop-shadow-none"
      )}
      onClick={() => {
        ref.current.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <span className="block relative overflow-clip">
        <span
          className={classNames(
            "flex gap-[8px] items-center transition-transform",
            "group-hover:translate-y-[calc(-100%+-0.25rem)]"
          )}
        >
          Jump to final designs
          <Image
            src="/icons/arrowDown.svg"
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
          Jump to final designs
          <Image
            src="/icons/arrowDown.svg"
            width={20}
            height={20}
            alt="an arrow pointing right"
          />
        </span>
      </span>
    </button>
  );
});

export default JumpToFinalDesignsButton;
