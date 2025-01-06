import classNames from "classnames";

const TwoColumns = (props) => {
  const { children } = props;
  return (
    <div
      className={classNames(
        "mt-[32px] mb-[32px] grid gap-[16px]",
        "md:grid-cols-12 md:gap-[32px] md:items-center"
      )}
    >
      {children}
    </div>
  );
};

export default TwoColumns;
