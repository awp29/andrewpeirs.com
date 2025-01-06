import classNames from "classnames";

const ExternalLink = (props) => {
  const { to, children } = props;

  return (
    <a
      className={classNames(
        "group",
        "inline-block relative overflow-clip text-[#4C64D9]",
        "border-b-2 border-[#4C64D9] border-dashed"
      )}
      href={to}
    >
      <span
        className={classNames(
          "block relative transition-transform",
          "group-hover:translate-y-[calc(-100%+-0.25rem)]"
        )}
      >
        {children}
      </span>

      <span
        className={classNames(
          "block transition-transform absolute top-[calc(100%+0.25rem)]",
          "group-hover:translate-y-[calc(-100%+-0.25rem)]"
        )}
      >
        {children}
      </span>
    </a>
  );
};

export default ExternalLink;
