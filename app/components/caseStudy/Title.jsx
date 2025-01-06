import classNames from "classnames";

const Title = (props) => {
  const { children } = props;
  return (
    <h1
      className={classNames(
        "font-bold text-[40px] text-[#000626E3] leading-[3rem]",
        "md:text-[56px] md:leading-[4rem]"
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
