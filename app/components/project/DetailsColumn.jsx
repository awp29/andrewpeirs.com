const DetailsColumn = (props) => {
  const { children } = props;

  return <div className="lg:col-span-4">{children}</div>;
};

export default DetailsColumn;
