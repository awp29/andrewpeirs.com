import classNames from "classnames";
import { ibm } from "app/fonts";

const DetailsLabel = (props) => {
  const { children } = props;
  return (
    <div className={classNames(ibm.className, "text-[14px] text-[#000933A3]")}>
      {children}
    </div>
  );
};

export default DetailsLabel;
