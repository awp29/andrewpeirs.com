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
        <ExternalLink to="/APSeniorCV.pdf">CV</ExternalLink>
      </div>

      <div className="mt-[96px] md:mt-64">
        <Project>
          <Project.DetailsColumn>
            <Project.Header>01</Project.Header>
            <Project.Title>EasyPark</Project.Title>
            <Project.Tags>
              <Project.Tag>Figma</Project.Tag>
              <Project.Tag>User-centered-design</Project.Tag>
              <Project.Tag>Practical UI</Project.Tag>
            </Project.Tags>

            <Project.Description>
              A hands-on learning project where I immersed myself in
              user-centered design, applying research and empathy to create
              user-focused solutions.
            </Project.Description>

            <Project.CaseStudyLink to="/easyPark" />
          </Project.DetailsColumn>

          <div
            className={classNames(
              "flex bg-[#26B0FF0D] flex-1 p-[16px] gap-[8px] items-center",
              "md:p-[32px] md:gap-[16px]",
              "lg:col-span-6"
            )}
          >
            <div className="flex-1">
              <img
                className={classNames("drop-shadow-xl")}
                src="/images/easyParkCaseStudy/screenNearByParking.png"
                alt="Screenshot of the EasyPark app showing a list of car parking spaces"
              />
            </div>

            <div className="flex-1">
              <img
                className={classNames("drop-shadow-lg")}
                src="/images/easyParkCaseStudy/screenHome.png"
                alt="Screenshot of the EasyPark app showing a map with car parking spaces highlighted"
              />
            </div>

            <div className="flex-1">
              <img
                className={classNames("drop-shadow-lg")}
                src="/images/easyParkCaseStudy/screenViewCarPark.png"
                alt="Screenshot of the EasyPark app showing details about a car park the user has selected"
              />
            </div>

            <div className="flex-1">
              <img
                className={classNames("drop-shadow-lg")}
                src="/images/easyParkCaseStudy/screenExtendParking.png"
                alt="Screenshot of the EasyPark app showing the user how much time they have left at their space"
              />
            </div>
          </div>
        </Project>

        <Project>
          <Project.DetailsColumn>
            <Project.Header>02</Project.Header>
            <Project.Title>SM-30</Project.Title>
            <Project.Tags>
              <Project.Tag>React</Project.Tag>
              <Project.Tag>TypeScript</Project.Tag>
              <Project.Tag>Tailwind</Project.Tag>
              <Project.Tag>Redux</Project.Tag>
            </Project.Tags>

            <Project.Description>
              An exploration of minimalism through a Minesweeper clone, inspired
              by the sleek, functional design language of Dieter Rams' Braun
              products.
            </Project.Description>

            <Project.CaseStudyLink to="/minesweeper" />
          </Project.DetailsColumn>

          <div
            className={classNames(
              "flex bg-[#26B0FF0D] flex-1 p-[16px]",
              "md:p-[32px]",
              "lg:col-span-6"
            )}
          >
            <img
              className={classNames(
                "border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg",
                "lg:col-span-6"
              )}
              src="/images/minesweeperCaseStudy/minesweeper.gif"
              alt="Screenshot of Super Minesweeper showing the game playing"
            />
          </div>
        </Project>

        <Project>
          <Project.DetailsColumn>
            <Project.Header>03</Project.Header>
            <Project.Title>NordPass Redesign</Project.Title>
            <Project.Tags>
              <Project.Tag>Figma</Project.Tag>
              <Project.Tag>User-centered-design</Project.Tag>
              <Project.Tag>Practical UI</Project.Tag>
            </Project.Tags>

            <Project.Description>
              An overhaul of the NordPass web app, bringing a modern aesthetic
              and refreshed user experience.
            </Project.Description>

            <Project.CaseStudyLink to="/nordPass" />
          </Project.DetailsColumn>

          <div
            className={classNames(
              "flex bg-[#26B0FF0D] flex-1 p-[16px]",
              "md:p-[32px]",
              "lg:col-span-6"
            )}
          >
            <img
              className={classNames(
                "border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg",
                "lg:col-span-6"
              )}
              src="/images/nordPassRedesignCaseStudy/nordPassRedesignProjectImage.jpg"
              alt="Screenshot of the NordPass app showing a table of passwords"
            />
          </div>
        </Project>
      </div>
    </div>
  );
}
