import classNames from "classnames";

// AP-TODO - DON'T LIKE THIS NAME
const Details = (props) => {
  const { children } = props;
  return (
    <div
      className={classNames(
        "mt-[32px] flex flex-col gap-[12px]",
        "sm:flex-row sm:gap-[24px]",
        "md:mt-[48px] md:gap-[32px]",
        "lg:gap-[40px]"
      )}
    >
      {children}
    </div>
  );
};

export default Details;
