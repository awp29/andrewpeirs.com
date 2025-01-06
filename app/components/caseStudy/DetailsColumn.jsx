import classNames from "classnames";

const DetailsColumn = (props) => {
  const { children } = props;
  return (
    <div className={classNames("flex flex-col gap-[2px]", "md:gap-[4px]")}>
      {children}
    </div>
  );
};

export default DetailsColumn;
