import classNames from "classnames";

const TextColumn = (props) => {
  const { children } = props;
  return (
    <div className={classNames("row-start-1", "md:col-span-6 md:row-auto")}>
      {children}
    </div>
  );
};

export default TextColumn;
