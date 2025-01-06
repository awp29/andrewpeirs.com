import classNames from "classnames";

const DetailsText = (props) => {
  const { children } = props;
  return (
    <span
      className={classNames("text-[16px] text-[#000626E3] leading-[1.5rem]")}
    >
      {children}
    </span>
  );
};

export default DetailsText;
