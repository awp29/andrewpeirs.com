import classNames from "classnames";

const ImageColumn = (props) => {
  const { children } = props;
  return <div className={classNames("md:col-span-6")}>{children}</div>;
};

export default ImageColumn;
