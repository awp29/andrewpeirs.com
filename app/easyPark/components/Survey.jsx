import classNames from "classnames";
import Percent from "./Percent";
import Stat from "./Stat";
import Text from "./Text";

const Survey = (props) => {
  const { children } = props;
  return (
    <div
      className={classNames(
        "flex flex-col gap-[16px] max-w-[1024px] mb-[96px] mx-0",
        "md:flex-row md:gap-[16px] md:mb-[128px] md:mx-[16px]",
        "lg:gap-[32px] lg:mx-auto lg:px-[32px]"
      )}
    >
      {children}
    </div>
  );
};

Survey.Stat = Stat;
Survey.Percent = Percent;
Survey.Text = Text;

export default Survey;
