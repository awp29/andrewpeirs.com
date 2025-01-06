import { twMerge } from "tailwind-merge";

const Header = (props) => {
  const { children } = props;
  return (
    <div
      className={twMerge(
        "m-auto px-[16px] mb-[48px] mt-[96px]",
        "md:max-w-[800px] md:px-[32px] md:mb-[96px] md:mt-[144px]"
      )}
    >
      {children}
    </div>
  );
};

export default Header;
