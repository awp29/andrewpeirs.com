import classNames from "classnames";

const DetailsLabel = (props) => {
  const { children } = props;
  return (
    <div className={classNames("text-[14px] font-mono text-[#000933A3]")}>
      {children}
    </div>
  );
};

export default DetailsLabel;
