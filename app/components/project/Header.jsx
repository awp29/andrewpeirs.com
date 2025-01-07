import classNames from "classnames";
import { ibm } from "app/fonts";

const Header = (props) => {
  const { children } = props;

  return (
    <h3
      className={classNames(
        ibm.className,
        "text-[#C73A3A] text-[16px] mb-[8px]",
        "md:mb-[12px]"
      )}
    >
      {children}
    </h3>
  );
};

export default Header;
