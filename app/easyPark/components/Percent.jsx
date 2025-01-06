import classNames from "classnames";

const Percent = (props) => {
  const { children } = props;
  return (
    <h4
      className={classNames(
        "text-[#4C64D9] text-[24px] font-mono",
        "md:text-[32px]"
      )}
    >
      {children}
    </h4>
  );
};

export default Percent;
