import classNames from "classnames";

const Title = (props) => {
  const { children } = props;

  return (
    <h2
      className={classNames(
        "text-[32px] font-bold mb-[8px]",
        "md:mb-[12px] md:text-[40px]"
      )}
    >
      {children}
    </h2>
  );
};

export default Title;
