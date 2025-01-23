import classNames from "classnames";
import CaseStudyLink from "./CaseStudyLink";
import Description from "./Description";
import DetailsColumn from "./DetailsColumn";
import Header from "./Header";
import Image from "./Image";
import Title from "./Title";
import Tag from "./Tag";
import Tags from "./Tags";

const Project = (props) => {
  const { children } = props;

  return (
    <div
      className={classNames(
        "grid grid-cols-1 gap-[32px]",
        "md:gap-[64px] mb-[128px]",
        "lg:grid-cols-10 lg:gap-[32px]"
      )}
    >
      {children}
    </div>
  );
};

Project.Header = Header;
Project.Title = Title;
Project.Description = Description;
Project.CaseStudyLink = CaseStudyLink;
Project.DetailsColumn = DetailsColumn;
Project.Image = Image;
Project.Tags = Tags;
Project.Tag = Tag;

export default Project;
