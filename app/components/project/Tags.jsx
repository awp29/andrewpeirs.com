const Tags = (props) => {
  const { children } = props;

  return (
    <div className="mb-[16px] flex flex-wrap md:mb-[32px] gap-[8px] md:gap-[12px]">
      {children}
    </div>
  );
};

export default Tags;
