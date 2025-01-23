const Tags = (props) => {
  const { children } = props;

  return (
    <div className="mb-[16px] flex flex-wrap md:mb-[32px] gap-[4px] md:gap-[6px]">
      {children}
    </div>
  );
};

export default Tags;
