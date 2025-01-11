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
            Hello world!
          </h2>
          <h1 className="font-bold text-[40px] md:text-[56px]">
            {`I'm Andrew. I like to design web products and and I'm not to bad at coidng either`}
          </h1>
        </div>

        <FloatingProfileImage ref={headerRef} />
      </div>

      <div className="flex gap-[12px] mt-[24px]">
        <EmailLink />
        <ExternalLink to="https://www.linkedin.com/in/andrew-peirs">
          LinkedIn
        </ExternalLink>
        {/* <ExternalLink to="test">CV</ExternalLink> */}
      </div>

      <div className="mt-[96px] md:mt-64">
        <Project>
          <Project.DetailsColumn>
            <Project.Header>01</Project.Header>
            <Project.Title>EasyPark</Project.Title>
            <Project.Description>
              As part of the{" "}
              <ExternalLink to="https://coursecareers.com/explore/uiux">
                Course Careers
              </ExternalLink>{" "}
              UI/UX design course, I built a car parking app, learning the
              user-cnetered design process.
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
              Redesigned NordPass web app to give it a minimal modern UI.
            </Project.Description>

            <Project.CaseStudyLink to="/nordPass" />
          </Project.DetailsColumn>

          <Project.Image src="/images/nordPassRedesignProjectImage.png" />
        </Project>

        {/* <Project>
          <Project.DetailsColumn>
            <Project.Header>03</Project.Header>
            <Project.Title>SM-30</Project.Title>
            <Project.Description>
              Super Minesweeper 3000, inspired by old school BraUn products.
              Trying to create that aesthic
            </Project.Description>

            <Project.CaseStudyLink to="/minesweeper" />
          </Project.DetailsColumn>

          <Project.Image src="/images/superMinesweeperProjectImage.jpg" />
        </Project> */}
      </div>
    </div>
  );
}
