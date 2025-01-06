import classNames from "classnames";

const H3 = (props) => {
  const { className, children } = props;
  return (
    <h3
      className={classNames(
        className,
        "text-[24px] font-bold text-[#000626E3] mb-[8px] mt-[16px]",
        "md:text-[32px md:mb-[12px] md:mt-[32px]"
      )}
    >
      {children}
    </h3>
  );
};

export default H3;
