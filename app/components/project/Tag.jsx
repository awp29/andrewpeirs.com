import { ibm } from "app/fonts";
import classNames from "classnames";

const Tag = (props) => {
  const { children } = props;

  return (
    <div
      className={classNames(
        ibm.className,
        "bg-[#0015800A] border-[#00116619] border-solid border-1 w-fit px-[6px] py-[2px] flex items-center text-[#000626F2] text-[12px]"
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
