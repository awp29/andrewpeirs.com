import classNames from "classnames";
import { ibm } from "app/fonts";

const Percent = (props) => {
  const { children } = props;
  return (
    <h4
      className={classNames(
        ibm.className,
        "text-[#4C64D9] text-[24px]",
        "md:text-[32px]"
      )}
    >
      {children}
    </h4>
  );
};

export default Percent;
