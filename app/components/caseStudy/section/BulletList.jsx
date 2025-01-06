const BulletList = (props) => {
  const { children } = props;
  return (
    <ul className="list-disc flex flex-col gap-[8px] py-[8px] pl-[32px]">
      {children}
    </ul>
  );
};

export default BulletList;
