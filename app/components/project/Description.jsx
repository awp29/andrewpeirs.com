import classNames from "classnames";

const Description = (props) => {
  const { children } = props;

  return (
    <p
      className={classNames(
        "text-[18px] text-[#000933A3] max-w-[360px] mb-[16px]",
        "md:mb-[32px] md:text-[20px]",
        "lg:mb-[48px]"
      )}
    >
      {children}
    </p>
  );
};

export default Description;
