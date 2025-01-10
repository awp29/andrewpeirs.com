"use client";

import BackButton from "app/components/BackButton";
import Details from "app/components/caseStudy/Details";
import DetailsColumn from "app/components/caseStudy/DetailsColumn";
import DetailsLabel from "app/components/caseStudy/DetailsLabel";
import DetailsText from "app/components/caseStudy/DetailsText";
import H1 from "app/components/caseStudy/H1";
import Header from "app/components/caseStudy/Header";
import OverflowImage from "app/components/caseStudy/OverflowImage";
import ScrollToTopButton from "app/components/caseStudy/ScrollToTopButton";
import H3 from "app/components/caseStudy/section/H3";
import Section from "app/components/caseStudy/section/Section";
import Title from "app/components/caseStudy/Title";
import ExternalLink from "app/components/externalLink";
import useScrollPosition from "app/hooks/useScrollPosition";
import useScrollToTop from "app/hooks/useScrollToTop";
import { createRef } from "react";

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

      <OverflowImage src="/images/nordPassRedesignCaseStudy/hero.png" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• NORDPASS</Section.Label>
        <Section.Title>What is NordPass?</Section.Title>
        <Section.Text>
          <ExternalLink to="https://nordpass.com/">NordPass</ExternalLink> is a
          password manager created by the team behind{" "}
          <ExternalLink to="https://nordvpn.com/">NordVPN</ExternalLink>
        </Section.Text>
      </Section>

      <Section.FullWidthImage src="/images/nordPassRedesignCaseStudy/nordPass.png" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• THE PROBLEM</Section.Label>
        <Section.Title>UI looks a bit thrown together</Section.Title>
        <Section.Text>
          NordPass offers great features but users see it as a bit thrown
          together. This is down to a bunch of simple design problems
          <Section.BulletList>
            <li>
              <Section.Text>An ugly UI</Section.Text>
            </li>
            <li>
              <Section.Text>Forms that lack validation</Section.Text>
            </li>
            <li>
              <Section.Text>Copy that doesn&apos;t sound human</Section.Text>
            </li>
            <li>
              <Section.Text>Missing feedback</Section.Text>
            </li>
            <li>
              <Section.Text>And missing edge cases</Section.Text>
            </li>
          </Section.BulletList>
        </Section.Text>
      </Section>

      <OverflowImage src="/images/nordPassRedesignCaseStudy/nordPassUI.png" />

      <Section>
        <Section.Label>• THE SOLUTION</Section.Label>
        <Section.Title>NordPass 3000 - UI redesign</Section.Title>
        <Section.Text>
          By applying basic design principles I was able to redesign NordPass
          into a modern polished app that users could appreciate.
          <Section.BulletList>
            <li>
              <Section.Text>
                I used the{" "}
                <ExternalLink to="https://www.practical-ui.com/design-system/">
                  Practical UI design system
                </ExternalLink>{" "}
                to create a modern, polished UI
              </Section.Text>
            </li>
            <li>
              <Section.Text>
                I improved the add/edit forms to have obvious validation
              </Section.Text>
            </li>
            <li>
              <Section.Text>
                I updated the copy to sound more human
              </Section.Text>
            </li>
            <li>
              <Section.Text>
                I added feedback to make the app feel like it was working with
                the User
              </Section.Text>
            </li>
            <li>
              <Section.Text>
                And I covered the edge cases like generic errors and no results
                states
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
          NordPass 3000 is a learning project I took on in my own time. Its a
          study in understanding how to create a professional UI. I designed
          everything myself using Practical UI and Figma.
        </Section.Text>
      </Section>

      <H1>1. The Improvements</H1>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• UI</Section.Label>
        <Section.Title>NordPass UI redesign</Section.Title>
        <Section.Text>
          The obvious issue with NordPass is it&apos;s UI. It all just looks a
          bit thrown together. I redesigned NordPass using Practical UI to give
          it a more modern and polished look.
        </Section.Text>
      </Section>

      <OverflowImage src="/images/nordPassRedesignCaseStudy/redesignScreens.png" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• UX</Section.Label>
        <Section.Title>NordPass UI redesign</Section.Title>
        <Section.Text>
          The obvious issue with NordPass is it&apos;s UI. It all just looks a
          bit thrown together. I redesigned NordPass using Practical UI to give
          it a more modern and polished look.
        </Section.Text>
      </Section>

      <Section.FullWidthImage
        className="md:mb-[48px]"
        src="/images/nordPassRedesignCaseStudy/uxImage1.png"
      />
      <Section.FullWidthImage src="/images/nordPassRedesignCaseStudy/uxImage2.png" />

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

      <Section.FullWidthImage src="/images/nordPassRedesignCaseStudy/formImage1.png" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• COPY</Section.Label>
        <Section.Title>Clear, specific, professional copy</Section.Title>
        <Section.Text>
          Good copy is key. It can inform the user into what exactly is going on
          and prevent potential confusion. NordPass has a few cases of vague
          copy that could be improved
        </Section.Text>
      </Section>

      <Section.FullWidthImage
        className="md:mb-[48px]"
        src="/images/nordPassRedesignCaseStudy/copyImage1.png"
      />
      <Section.FullWidthImage src="/images/nordPassRedesignCaseStudy/copyImage2.png" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• FEEDBACK</Section.Label>
        <Section.Title>Way more feedback</Section.Title>
        <Section.Text>
          Strong feedback can bring an app to life and make it feel like
          it&apos;s actively trying to help the user instead of a black hole
          sucking in inputs. NordPass provides feedback but it could do with a
          bit more
        </Section.Text>
      </Section>

      <Section.FullWidthImage
        className="md:mb-[48px]"
        src="/images/nordPassRedesignCaseStudy/feedbackImage1.png"
      />
      <Section.FullWidthImage src="/images/nordPassRedesignCaseStudy/feedbackImage2.png" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• EDGE CASES</Section.Label>
        <Section.Title>
          Errors, empty states, loading states, no results and 404s
        </Section.Title>
        <Section.Text>
          To create an app that feels well rounded and thought out you need to
          cover the edge cases. NordPass covers some but also misses a few out.
        </Section.Text>
      </Section>

      <Section.FullWidthImage
        className="md:mb-[48px]"
        src="/images/nordPassRedesignCaseStudy/edgeCaseImage1.png"
      />
      <Section.FullWidthImage
        className="md:mb-[48px]"
        src="/images/nordPassRedesignCaseStudy/edgeCaseImage2.png"
      />

      <div ref={finalDesignsRef} />
      <H1>2. Final Designs</H1>

      <Section>
        <Section.Label>• REDESIGN</Section.Label>
        <Section.Title>Before and after</Section.Title>
      </Section>

      <Section className="mb-[32px] md:mb-[24px]">
        <H3>Passwords table</H3>
      </Section>

      <OverflowImage src="/images/nordPassRedesignCaseStudy/beforeAndAfter1.png" />

      <Section className="mb-[32px] md:mb-[24px]">
        <H3>Edit password</H3>
      </Section>

      <OverflowImage src="/images/nordPassRedesignCaseStudy/beforeAndAfter2.png" />

      <Section className="mb-[32px] md:mb-[24px]">
        <H3>Password generator</H3>
      </Section>

      <OverflowImage src="/images/nordPassRedesignCaseStudy/beforeAndAfter3.png" />

      <Section>
        <Section.Label>• PROTOTYPE</Section.Label>
        <Section.Title>NordPass 3000</Section.Title>
      </Section>

      <div className="w-full my-[32px]">
        <iframe
          className="border-1 border-[rgba(0, 0, 0, 0.1)] mx-auto max-w-[800px] w-full"
          height="450"
          src="https://embed.figma.com/design/eUJem0xZP5DXOAYDXaLF9J/NordPass-3000?node-id=0-1&embed-host=share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="w-full my-[64px]">
        <iframe
          className="border-1 border-[rgba(0, 0, 0, 0.1)] mx-auto max-w-[800px] w-full"
          height="450"
          src="https://embed.figma.com/proto/eUJem0xZP5DXOAYDXaLF9J/NordPass-3000?node-id=378-14614&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=378%3A14614&embed-host=share"
          allowFullScreen
        ></iframe>
      </div>

      <H1>3. Conclusion</H1>

      <Section>
        <Section.Label>• REVIEW</Section.Label>
        <Section.Title>NordPass redesign</Section.Title>
        <Section.Text>
          NordPass offers some great features but it is let down by a UI that
          users see as thrown together. By applying some simple design
          principles I was able to redesign NordPass into a modern polished app
          that felt more professional and allowed users to appreciate the
          features it has to offer.
        </Section.Text>
      </Section>

      <Section>
        <Section.Label>• LEARNINGS</Section.Label>
        <Section.Title>Good UI elevates good UX</Section.Title>
        <Section.Text className="md:mb-[48px]">
          A product can offer great features and UX but if the UI looks thrown
          together then the users will see it that way. Having a modern,
          polished UI can elevate great UX and allow features to shine.
        </Section.Text>

        <Section.Title>
          The fine details make a well rounded product
        </Section.Title>
        <Section.Text>
          Obvious form instructions, super clear copy, strong feedback and
          covering the edge cases are what make a product feel complete
          <Section.BulletList>
            <li>
              <Section.Text>
                <span className="font-bold">
                  Forms should include obvious instructions and validation
                </span>{" "}
                to prevent frustration
              </Section.Text>
            </li>
            <li>
              <Section.Text>
                <span className="font-bold">Clear, specific copy</span> allows
                users to understand exactly what&apos;s going on
              </Section.Text>
            </li>
            <li>
              <Section.Text>
                <span className="font-bold">Strong feedback</span> stops a
                product from feeling like a soulless black box
              </Section.Text>
            </li>
            <li>
              <Section.Text>
                <span className="font-bold">Taking care of the edge cases</span>{" "}
                makes a product feel well rounded and thought out
              </Section.Text>
            </li>
          </Section.BulletList>
        </Section.Text>
      </Section>

      <Section>
        <Section.Label>• WRAP UP</Section.Label>
        <Section.Title>Final thoughts</Section.Title>
        <Section.Text>
          Redesigning NordPass has taught me that good UX is super important but
          if you want users to see a product as professional UX alone won't do
          it. You need great UI!
        </Section.Text>
      </Section>
    </>
  );
};

export default Page;
