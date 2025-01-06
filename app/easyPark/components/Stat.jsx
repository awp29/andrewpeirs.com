import classNames from "classnames";

const Stat = (props) => {
  const { children } = props;
  return (
    <div
      className={classNames(
        "bg-[#0015800A] flex flex-col gap-[4px] p-[16px] flex-1",
        "md:p-[24px]"
      )}
    >
      {children}
    </div>
  );
};

export default Stat;
