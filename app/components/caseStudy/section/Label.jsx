import classNames from "classnames";
import { ibm } from "app/fonts";

const Label = (props) => {
  const { children } = props;

  console.log("ibm", ibm);

  return (
    <span
      className={classNames(
        ibm.className,
        "block text-[14px] text-[#000933A3] border-b-4 border-[#4C64D9] mb-[24px] w-fit",
        "md:text-[16px] md:mb-[32px]"
      )}
    >
      {children}
    </span>
  );
};

export default Label;
