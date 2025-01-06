import classNames from "classnames";

const Label = (props) => {
  const { children } = props;
  return (
    <span
      className={classNames(
        "block font-mono text-[14px] text-[#000933A3] border-b-4 border-[#4C64D9] mb-[24px] w-fit",
        "md:text-[16px] md:mb-[32px]"
      )}
    >
      {children}
    </span>
  );
};

export default Label;
