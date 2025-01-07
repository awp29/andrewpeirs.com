import { twMerge } from "tailwind-merge";

const Header = (props) => {
  const { children } = props;
  return (
    <div
      className={twMerge(
        "m-auto px-[16px] mb-[48px] mt-[48px]",
        "md:max-w-[800px] md:px-[16px] md:mb-[96px] md:mt-[96px]"
      )}
    >
      {children}
    </div>
  );
};

export default Header;
