import classNames from "classnames";

const H1 = (props) => {
  const { children } = props;
  return (
    <h1
      className={classNames(
        "font-bold text-[40px] text-[#000626E3] mt-[192px] mb-[96px] leading-[3rem] max-w-[800px] mx-[16px] px-0",
        "md:text-[56px] md:mt-[288px] md:mb-[128px] md:leading-[4rem] md:mx-auto md:px-[16px]"
      )}
    >
      {children}
    </h1>
  );
};

export default H1;
