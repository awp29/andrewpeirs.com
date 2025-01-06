import classNames from "classnames";

const Text = (props) => {
  const { children } = props;
  return (
    <p
      className={classNames(
        "text-[18px] text-[#000933A3] max-w-[35ch]",
        "md:text-[20px] md:leading-[1.75rem]"
      )}
    >
      {children}
    </p>
  );
};

export default Text;
