"use client";

import classNames from "classnames";
import { useRef } from "react";
import FloatingProfileImage from "./components/floatingProfileImage";
import EmailLink from "./components/emailLink";
import ExternalLink from "./components/externalLink";
import Project from "./components/project/Project";
import { ibm } from "app/fonts";

export default function Page() {
  const headerRef = useRef(null);

  return (
    <div
      className={classNames(
        "max-w-[1240px] m-auto px-[16px]",
        "md:px-[32px]",
        "lg:px-[64px]"
      )}
    >
      <div ref={headerRef}>
        <div
          className={classNames(
            "max-w-[540px] mt-[96px]",
            "md:max-w-[816px] md:mt-64"
          )}
        >
          <h2
            className={classNames(
              ibm.className,
              "text-[#C73A3A] text-[20px] md:text-[32px]"
            )}
          >
            Hey! I'm Andrew.
          </h2>
          <h1 className="font-bold text-[40px] md:text-[56px] text-[#000626F2]">
            I make accessible, pixel perfect web apps.
          </h1>
        </div>

        <FloatingProfileImage ref={headerRef} />
      </div>

      <div className="flex gap-[12px] mt-[24px]">
        <EmailLink />
        <ExternalLink to="https://www.linkedin.com/in/andrew-peirs">
          LinkedIn
        </ExternalLink>
        <ExternalLink to="test">CV</ExternalLink>
      </div>

      <div className="mt-[96px] md:mt-64">
        <Project>
          <Project.DetailsColumn>
            <Project.Header>01</Project.Header>
            <Project.Title>EasyPark</Project.Title>
            <Project.Description>
              A learning project to get my head into user-centered design
            </Project.Description>

            <Project.CaseStudyLink to="/easyPark" />
          </Project.DetailsColumn>

          <Project.Image src="/images/easyParkProjectImage.png" />
        </Project>

        <Project>
          <Project.DetailsColumn>
            <Project.Header>02</Project.Header>
            <Project.Title>NordPass Redesign</Project.Title>
            <Project.Description>
              An update to the NordPass web app to give it a modern look and
              feel
            </Project.Description>

            <Project.CaseStudyLink to="/nordPass" />
          </Project.DetailsColumn>

          <Project.Image src="/images/nordPassRedesignProjectImage.png" />
        </Project>

        <Project>
          <Project.DetailsColumn>
            <Project.Header>03</Project.Header>
            <Project.Title>SM-30</Project.Title>
            <Project.Description>
              Minesweeper clone inspired by the BraUn products of Dieter Rams
            </Project.Description>

            <Project.CaseStudyLink to="/minesweeper" />
          </Project.DetailsColumn>

          <Project.Image src="/images/superMinesweeperProjectImage.jpg" />
        </Project>
      </div>
    </div>
  );
}
