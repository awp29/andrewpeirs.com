import classNames from "classnames";
import Image from "next/image";

const ScrollToTopButton = (props) => {
  const { opacity } = props;

  return (
    <button
      style={{ opacity }}
      className={classNames(
        "group",
        "fixed bottom-[32px] right-[32px] min-w-[48px] h-[48px] z-10",
        "md:w-[56px] md:h-[56px]",
        "bg-[#4C64D9] text-white items-center w-fit text-[14px] px-[12px] py-[8px] drop-shadow-md",
        "hover:brightness-95",
        "active:brightness-90 active:drop-shadow-none"
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="block relative overflow-clip">
        <span
          className={classNames(
            "flex gap-[8px] items-center transition-transform",
            "group-hover:translate-y-[calc(-100%+-0.25rem)]"
          )}
        >
          <Image
            className={classNames(
              "w-[24px] h-[24px]",
              "md:w-[32px] md:h-[32px]"
            )}
            src="/icons/arrowUp.svg"
            width={32}
            height={32}
            alt="an arrow pointing right"
          />
        </span>

        <span
          className={classNames(
            "flex gap-[8px] items-center transition-transform absolute top-[calc(100%+0.25rem)] left-0",
            "group-hover:translate-y-[calc(-100%+-0.25rem)]"
          )}
        >
          <Image
            className={classNames(
              "w-[24px] h-[24px]",
              "md:w-[32px] md:h-[32px]"
            )}
            src="/icons/arrowUp.svg"
            width={32}
            height={32}
            alt="an arrow pointing right"
          />
        </span>
      </span>
    </button>
  );
};

export default ScrollToTopButton;
