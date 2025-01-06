import classNames from "classnames";
import Percent from "./Percent";
import Stat from "./Stat";
import Text from "./Text";

const Survey = (props) => {
  const { children } = props;
  return (
    <div
      className={classNames(
        "flex flex-col gap-[16px] mx-[16px] max-w-[1024px] mb-[96px]",
        "md:flex-row md:gap-[32px] md:mb-[128px] mx-auto"
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
