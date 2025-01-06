import classNames from "classnames";

const Author = (props) => {
  const { children } = props;
  return (
    <span
      className={classNames(
        "text-[14px] font-mono text-[#000933A3] mt-[8px]",
        "md:mt-[12px]"
      )}
    >
      {children}
    </span>
  );
};

export default Author;
