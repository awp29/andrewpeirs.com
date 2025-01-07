import classNames from "classnames";
import { ibm } from "app/fonts";

const Author = (props) => {
  const { children } = props;
  return (
    <span
      className={classNames(
        ibm.className,
        "text-[14px] text-[#000933A3] mt-[8px]",
        "md:mt-[12px]"
      )}
    >
      {children}
    </span>
  );
};

export default Author;
