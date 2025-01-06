import classNames from "classnames";
import Text from "./Text";
import Author from "./Author";

const Quote = (props) => {
  const { children } = props;
  return (
    <div
      className={classNames(
        "border-l-4 border-[#4C64D9] flex flex-col my-[48px] px-[24px] py-[12px] mx-[16px]",
        "md:mx-[48px] md:px-[32px] md:py-[16px] md:my-[64px]"
      )}
    >
      {children}
    </div>
  );
};

Quote.Text = Text;
Quote.Author = Author;

export default Quote;
