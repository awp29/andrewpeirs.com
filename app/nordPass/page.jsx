"use client";

import BackButton from "app/components/BackButton";
import Details from "app/components/caseStudy/Details";
import DetailsColumn from "app/components/caseStudy/DetailsColumn";
import DetailsLabel from "app/components/caseStudy/DetailsLabel";
import DetailsText from "app/components/caseStudy/DetailsText";
import H1 from "app/components/caseStudy/H1";
import Header from "app/components/caseStudy/Header";
import ScrollToTopButton from "app/components/caseStudy/ScrollToTopButton";
import Section from "app/components/caseStudy/section/Section";
import Title from "app/components/caseStudy/Title";
import ExternalLink from "app/components/externalLink";
import useScrollPosition from "app/hooks/useScrollPosition";
import useScrollToTop from "app/hooks/useScrollToTop";
import classNames from "classnames";
import { createRef } from "react";
import { twMerge } from "tailwind-merge";

const AnnotatedImage = (props) => {
  const { className, src } = props;

  return (
    <div className="px-[16px] md:mx-auto md:max-w-[840px]">
      <img
        className={twMerge(
          "w-full h-auto mt-[32px] mb-[96px]",
          "md:mb-[128px] md:max-w-[840px]",
          className
        )}
        src={src}
      />
    </div>
  );
};

const Page = () => {
  const finalDesignsRef = createRef(null);

  const scrollPositon = useScrollPosition();
  const opacity = useScrollToTop(scrollPositon);

  return (
    <>
      <ScrollToTopButton opacity={opacity} />

      <Header>
        <BackButton />

        <Title>NordPass Redesign</Title>
        <Details>
          <DetailsColumn>
            <DetailsLabel>TIMELINE</DetailsLabel>
            <DetailsText>Nov 2024</DetailsText>
          </DetailsColumn>

          <DetailsColumn>
            <DetailsLabel>PLATFORM</DetailsLabel>
            <DetailsText>Web</DetailsText>
          </DetailsColumn>

          <DetailsColumn>
            <DetailsLabel>ROLE</DetailsLabel>
            <DetailsText>UI Designer</DetailsText>
          </DetailsColumn>
        </Details>
      </Header>

      <div
        className={classNames(
          "flex flex-col flex-1 gap-[8px] mb-[96px] mx-[16px] max-w-[1512px]",
          "md:flex-row md:gap-[16px] md:mb-[196px] md:px-[16px] md:mx-auto",
          "lg:gap-[16px] lg:px-[32px]"
        )}
      >
        <div className="flex-1">
          <img
            className={classNames(
              "border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg"
            )}
            src="/images/nordPassRedesignCaseStudy/screenPasswords.jpg"
            alt="Screenshot of the EasyPark app showing a list of car parking spaces"
          />
        </div>

        <div className="flex-1 hidden md:block">
          <img
            className={classNames(
              "border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg"
            )}
            src="/images/nordPassRedesignCaseStudy/screenPasswordGenerator.jpg"
            alt="Screenshot of the EasyPark app showing a list of car parking spaces"
          />
        </div>
      </div>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• NORDPASS</Section.Label>
        <Section.Title>What is NordPass?</Section.Title>
        <Section.Text>
          <ExternalLink to="https://nordpass.com/">NordPass</ExternalLink> is a
          password manager developed by the team behind{" "}
          <ExternalLink to="https://nordvpn.com/">NordVPN</ExternalLink>
        </Section.Text>
      </Section>

      <Section.FullWidthImage src="/images/nordPassRedesignCaseStudy/nordPass.jpg" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• THE PROBLEM</Section.Label>
        <Section.Title>UI looks a bit thrown together</Section.Title>
        <Section.Text>
          NordPass offers great features, but users often feel the UI is a bit
          of a mess. This is due to several simple design issues:
          <Section.BulletList>
            <li>
              <Section.Text>An unattractive UI</Section.Text>
            </li>
            <li>
              <Section.Text>Forms that lack validation</Section.Text>
            </li>
            <li>
              <Section.Text>Copy that doesn't sound natural</Section.Text>
            </li>
            <li>
              <Section.Text>Missing feedback</Section.Text>
            </li>
            <li>
              <Section.Text>Unaddressed edge cases</Section.Text>
            </li>
          </Section.BulletList>
        </Section.Text>
      </Section>

      <div
        className={classNames(
          "flex flex-col flex-1 gap-[8px] mb-[96px] mx-[16px] max-w-[1512px]",
          "md:flex-row md:gap-[16px] md:mb-[196px] md:px-[16px] md:mx-auto",
          "lg:gap-[16px] lg:px-[32px]"
        )}
      >
        <div className="flex-1">
          <img
            className={classNames(
              "border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg"
            )}
            src="/images/nordPassRedesignCaseStudy/nordPassAllItems.jpg"
            alt="Screenshot of the EasyPark app showing a list of car parking spaces"
          />
        </div>

        <div className="flex-1 hidden md:block">
          <img
            className={classNames(
              "border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg"
            )}
            src="/images/nordPassRedesignCaseStudy/nordPassEdit.jpg"
            alt="Screenshot of the EasyPark app showing a list of car parking spaces"
          />
        </div>
      </div>

      <Section>
        <Section.Label>• THE SOLUTION</Section.Label>
        <Section.Title>NordPass - UI redesign</Section.Title>
        <Section.Text>
          By applying basic design principles, I was able to transform NordPass
          into a modern, polished app that users would appreciate.
          <br />
          Here's what I did:
          <Section.BulletList>
            <li>
              <Section.Text>
                Used the{" "}
                <ExternalLink to="https://www.practical-ui.com/design-system/">
                  Practical UI design system
                </ExternalLink>{" "}
                to create a sleek, contemporary UI.
              </Section.Text>
            </li>
            <li>
              <Section.Text>
                Improved the add/edit forms to include clear validation.
              </Section.Text>
            </li>
            <li>
              <Section.Text>
                Updated the copy to sound more natural and user-friendly.
              </Section.Text>
            </li>
            <li>
              <Section.Text>
                Added feedback to make the app feel responsive and in sync with
                the user.
              </Section.Text>
            </li>
            <li>
              <Section.Text>
                Addressed edge cases, like handling generic errors and "no
                results" states.
              </Section.Text>
            </li>
          </Section.BulletList>
        </Section.Text>

        <Section.JumpToFinalDesignsButton ref={finalDesignsRef} />
      </Section>

      <Section>
        <Section.Label>• MY ROLE</Section.Label>
        <Section.Title>UI Designer</Section.Title>
        <Section.Text>
          NordPass is a personal learning project I worked on in my own time.
          It's a study in creating a professional UI. I designed everything
          myself using Practical UI and Figma.
        </Section.Text>
      </Section>

      <H1>1. The Improvements</H1>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• UI</Section.Label>
        <Section.Title>NordPass UI redesign</Section.Title>
        <Section.Text>
          A key feature of any password manager is the ability to quickly copy
          passwords. I designed the UI so users are always just a few
          interactions away from the password they need.
        </Section.Text>
      </Section>

      <div
        className={classNames(
          "flex flex-col flex-1 gap-[8px] mb-[96px] mx-[16px] max-w-[1512px]",
          "md:flex-row md:gap-[16px] md:mb-[196px] md:px-[16px] md:mx-auto",
          "lg:gap-[16px] lg:px-[32px]"
        )}
      >
        <div className="flex-1">
          <img
            className={classNames(
              "border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg"
            )}
            src="/images/nordPassRedesignCaseStudy/screenTrash.jpg"
            alt="Screenshot of the EasyPark app showing a list of car parking spaces"
          />
        </div>

        <div className="flex-1 hidden md:block">
          <img
            className={classNames(
              "border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg"
            )}
            src="/images/nordPassRedesignCaseStudy/screenEdit.jpg"
            alt="Screenshot of the EasyPark app showing a list of car parking spaces"
          />
        </div>
      </div>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• UX</Section.Label>
        <Section.Title>Copying a password should be super quick</Section.Title>
        <Section.Text>
          A key feature of a password manager is allowing users to quickly copy
          their passwords. I designed the UI so users are never more than a few
          interactions away from the password they need.
        </Section.Text>
      </Section>

      <AnnotatedImage
        className="mb-[24px] md:mb-[48px]"
        src="/images/nordPassRedesignCaseStudy/uxImage1.png"
      />
      <AnnotatedImage src="/images/nordPassRedesignCaseStudy/uxImage2.png" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• FORMS</Section.Label>
        <Section.Title>Obvious form instructions and validation</Section.Title>
        <Section.Text>
          Without clear instructions and validation forms can be super
          frustrating and users can easily get stuck. The Add/Edit password
          forms in NordPass implemented basic validation and could be improved
          in a few simple ways.
        </Section.Text>
      </Section>

      <AnnotatedImage src="/images/nordPassRedesignCaseStudy/formImage1.png" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• COPY</Section.Label>
        <Section.Title>
          Clear, Professional, and Human-Friendly Copy
        </Section.Title>
        <Section.Text>
          Clear copy is essential. It helps users understand exactly what's
          happening and prevents confusion. NordPass has several instances of
          vague copy that need improvement.
        </Section.Text>
      </Section>

      <AnnotatedImage
        className="mb-[24px] md:mb-[48px]"
        src="/images/nordPassRedesignCaseStudy/copyImage1.png"
      />
      <AnnotatedImage src="/images/nordPassRedesignCaseStudy/copyImage2.png" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• FEEDBACK</Section.Label>
        <Section.Title>Enhanced User Feedback</Section.Title>
        <Section.Text>
          Effective feedback brings an app to life, making it feel responsive
          and helpful rather than just a black hole consuming input. While
          NordPass provides some feedback, there's room for improvement.
        </Section.Text>
      </Section>

      <AnnotatedImage
        className="mb-[24px] md:mb-[48px]"
        src="/images/nordPassRedesignCaseStudy/feedbackImage1.png"
      />
      <AnnotatedImage src="/images/nordPassRedesignCaseStudy/feedbackImage2.png" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• EDGE CASES</Section.Label>
        <Section.Title>
          Errors, empty states, loading states, no results and 404s
        </Section.Title>
        <Section.Text>
          To create an app that feels polished and well-thought-out, you need to
          cover all the edge cases. NordPass handles some, but there are still a
          few it misses.
        </Section.Text>
      </Section>

      <AnnotatedImage
        className="mb-[24px] md:mb-[48px]"
        src="/images/nordPassRedesignCaseStudy/edgeCaseImage1.png"
      />
      <AnnotatedImage src="/images/nordPassRedesignCaseStudy/edgeCaseImage2.png" />

      <H1>2. Final Designs</H1>

      <div ref={finalDesignsRef} />
      <Section>
        <Section.Label>• REDESIGN</Section.Label>
        <Section.Title>High Fidelity Figma Designs</Section.Title>

        <iframe
          className="border-1 border-[rgba(0, 0, 0, 0.1)] mx-auto max-w-[800px] w-full"
          height="600"
          src="https://embed.figma.com/design/eUJem0xZP5DXOAYDXaLF9J/NordPass-3000?node-id=0-1&embed-host=share&starting-node-id=378-14614"
          allowFullScreen
        ></iframe>
      </Section>

      <Section>
        <Section.Label>• PROTOTYPE</Section.Label>
        <Section.Title>NordPass 3000</Section.Title>

        <div className="w-full my-[64px]">
          <iframe
            className="border-1 border-[rgba(0, 0, 0, 0.1)] mx-auto max-w-[800px] w-full"
            height="600"
            src="https://embed.figma.com/proto/eUJem0xZP5DXOAYDXaLF9J/NordPass-3000?node-id=378-14614&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=378%3A14614&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>
      </Section>

      <H1>3. Conclusion</H1>

      <Section>
        <Section.Label>• REVIEW</Section.Label>
        <Section.Title>NordPass redesign</Section.Title>
        <Section.Text>
          NordPass has great features, but its UI felt disjointed to users. By
          applying simple design principles, I was able to redesign NordPass
          into a modern, polished app that feels more professional, allowing
          users to better appreciate its features.
        </Section.Text>
      </Section>

      <Section>
        <Section.Label>• LEARNINGS</Section.Label>
        <Section.Title>Good UI elevates good UX</Section.Title>
        <Section.Text className="md:mb-[48px]">
          A product can have great features and UX, but if the UI feels thrown
          together, users will notice. A modern, polished UI enhances the user
          experience and lets the features truly shine.
        </Section.Text>

        <Section.Title>
          The fine details make a well rounded product
        </Section.Title>
        <Section.Text>
          Obvious form instructions, clear copy, strong feedback, and covering
          edge cases are what make a product feel complete.
          <Section.BulletList>
            <li>
              <Section.Text>
                <span className="font-bold">Forms</span> should include clear
                instructions and validation to prevent frustration.
              </Section.Text>
            </li>
            <li>
              <Section.Text>
                <span className="font-bold">Clear, specific copy</span> helps
                users understand exactly what's happening.
              </Section.Text>
            </li>
            <li>
              <Section.Text>
                <span className="font-bold">Strong feedback</span> ensures the
                product doesn't feel like a soulless black box.
              </Section.Text>
            </li>
            <li>
              <Section.Text>
                <span className="font-bold">Addressing edge cases</span> makes
                the product feel thoughtful and well-rounded.
              </Section.Text>
            </li>
          </Section.BulletList>
        </Section.Text>
      </Section>

      <Section>
        <Section.Label>• WRAP UP</Section.Label>
        <Section.Title>Final thoughts</Section.Title>
        <Section.Text>
          Redesigning NordPass taught me that good UX is crucial, but if you
          want users to see a product as professional, UX alone won’t cut it.
          You need a great UI too!
        </Section.Text>
      </Section>
    </>
  );
};

export default Page;
