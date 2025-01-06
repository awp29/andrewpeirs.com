import classNames from "classnames";

const Text = (props) => {
  const { className, children } = props;
  return (
    <p
      className={classNames(
        className,
        "text-[18px] text-[#000933A3] max-w-[70ch]",
        "md:text-[20px] md:leading-[1.75rem]"
      )}
    >
      {children}
    </p>
  );
};

export default Text;
