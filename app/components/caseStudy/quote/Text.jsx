import classNames from "classnames";

const Text = (props) => {
  const { children } = props;
  return (
    <p
      className={classNames(
        "text-[24px] text-[#000933A3] max-w-[70ch] leading-[2.5rem]",
        "md:text-[28px] md:leading-[2.5rem]"
      )}
    >
      {children}
    </p>
  );
};

export default Text;
