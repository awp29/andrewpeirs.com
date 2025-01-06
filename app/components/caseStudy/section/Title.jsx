import classNames from "classnames";

const Title = (props) => {
  const { children } = props;
  return (
    <h2
      className={classNames(
        "text-[32px] font-bold text-[#000626E3] mb-[16px] leading-[2.5rem]",
        "md:text-[40px] md:mb-[24px] md:leading-[3rem]"
      )}
    >
      {children}
    </h2>
  );
};

Title.displayName = "Title";

export default Title;
