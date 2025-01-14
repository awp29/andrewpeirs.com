import Label from "./Label";
import Title from "./Title";
import Text from "./Text";
import TwoColumns from "./TwoColumns";
import TextColumn from "./ColumnOne";
import ImageColumn from "./ImageColumn";
import FullWidthImage from "./FullWidthImage";
import H3 from "./H3";
import BulletList from "./BulletList";
import React from "react";
import JumpToFinalDesignsButton from "./JumpToFinalDesigns";
import { twMerge } from "tailwind-merge";
import Image from "./Image";

const Section = React.forwardRef((props, ref) => {
  const { className, children } = props;
  return (
    <div
      ref={ref}
      className={twMerge(
        "m-auto px-[16px] mb-[96px]",
        "md:max-w-[800px] md:mb-[128px]",
        className
      )}
    >
      {children}
    </div>
  );
});

Section.displayName = "Section";

Section.Label = Label;
Section.Title = Title;
Section.Text = Text;
Section.TwoColumns = TwoColumns;
Section.TextColumn = TextColumn;
Section.ImageColumn = ImageColumn;
Section.FullWidthImage = FullWidthImage;
Section.Image = Image;
Section.H3 = H3;
Section.BulletList = BulletList;
Section.JumpToFinalDesignsButton = JumpToFinalDesignsButton;

export default Section;
