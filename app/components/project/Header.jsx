import classNames from "classnames";

const Header = (props) => {
  const { children } = props;

  return (
    <h3
      className={classNames(
        "text-[#C73A3A] text-[16px] font-mono mb-[8px]",
        "md:mb-[12px]"
      )}
    >
      {children}
    </h3>
  );
};

export default Header;
