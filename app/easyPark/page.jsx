"use client";

import { createRef } from "react";
import ScrollToTopButton from "../components/caseStudy/ScrollToTopButton";
import useScrollPosition from "app/hooks/useScrollPosition";
import Header from "app/components/caseStudy/Header";
import Title from "app/components/caseStudy/Title";
import Details from "app/components/caseStudy/Details";
import DetailsColumn from "app/components/caseStudy/DetailsColumn";
import DetailsLabel from "app/components/caseStudy/DetailsLabel";
import DetailsText from "app/components/caseStudy/DetailsText";
import OverflowImage from "app/components/caseStudy/OverflowImage";
import Section from "app/components/caseStudy/section/Section";
import H1 from "app/components/caseStudy/H1";
import Survey from "./components/Survey";
import Quote from "app/components/caseStudy/quote/Quote";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import ExternalLink from "app/components/externalLink";
import useScrollToTop from "app/hooks/useScrollToTop";
import BackButton from "app/components/BackButton";

const Page = () => {
  const finalDesignsRef = createRef(null);

  const scrollPositon = useScrollPosition();
  const opacity = useScrollToTop(scrollPositon);

  return (
    <>
      <ScrollToTopButton opacity={opacity} />

      <Header>
        <BackButton />

        <Title>EasyPark - A parking app you actually want to use</Title>
        <Details>
          <DetailsColumn>
            <DetailsLabel>TIMELINE</DetailsLabel>
            <DetailsText>Jul - Sept 2024</DetailsText>
          </DetailsColumn>

          <DetailsColumn>
            <DetailsLabel>PLATFORM</DetailsLabel>
            <DetailsText>Mobile</DetailsText>
          </DetailsColumn>

          <DetailsColumn>
            <DetailsLabel>ROLE</DetailsLabel>
            <DetailsText>Product Designer</DetailsText>
          </DetailsColumn>
        </Details>
      </Header>

      <OverflowImage src="/images/easyParkCaseStudy/hero.png" />

      <Section>
        <Section.Label>• THE PROBLEM</Section.Label>
        <Section.Title>I hate parking apps</Section.Title>
        <Section.Text>
          Parking apps are awful! They frustrate users by displaying unclear
          parking instructions, hiding core features away and forcing them
          through confusing payment flows that are so bad users end up not
          trusting them. I am sick of fighting with badly designed parking apps.
          I want to design a parking app that users actually want to use.
        </Section.Text>
      </Section>

      <Section>
        <Section.Label>• THE SOLUTION</Section.Label>
        <Section.Title>Easy parking with EasyPark</Section.Title>
        <Section.Text>
          By focusing on user research, user interviews and surveys I was able
          to learn what users actually want from a parking app. Using that data
          I designed EasyPark, a new parking app with user needs at it’s centre.
        </Section.Text>

        <Section.JumpToFinalDesignsButton ref={finalDesignsRef} />
      </Section>

      <Section>
        <Section.Label>• MY ROLE</Section.Label>
        <Section.Title>Learning UI/UX design with CourseCareers</Section.Title>
        <Section.Text>
          EasyPark is a project I worked on as part of the Course Careers UI/UX
          design course. As a learning project I did everything myself, from
          User Interviews and surveys all the way to High-Fidelity designs and
          prototyping.
        </Section.Text>
      </Section>

      <H1>1. Whats the deal with parking apps?</H1>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• USER SURVEY</Section.Label>
        <Section.Title>
          Finding a parking space is not the priority
        </Section.Title>
        <Section.Text>
          25 users responded to my survey and they taught me two key things.
          RingGo and PayByPhone are the most popular parking apps and users
          don't care so much about finding a parking space, they care about
          payments.
        </Section.Text>
      </Section>

      <Survey>
        <Survey.Stat>
          <Survey.Percent>81%</Survey.Percent>

          <Survey.Text>
            of respondents find payments to be the most useful feature of
            parking apps.
          </Survey.Text>
        </Survey.Stat>

        <Survey.Stat>
          <Survey.Percent>68%</Survey.Percent>

          <Survey.Text>
            Of respondents said RingGo and PayByPhone are their prefered parking
            app
          </Survey.Text>
        </Survey.Stat>

        <Survey.Stat>
          <Survey.Percent>92%</Survey.Percent>

          <Survey.Text>
            Of respondents would like to be better parking data
          </Survey.Text>
        </Survey.Stat>
      </Survey>

      <Section>
        <Section.Label>• USER INTERVIEWS</Section.Label>
        <Section.Title>
          Users don’t really want to use a parking app
        </Section.Title>
        <Section.Text>
          Through my interviews I learnt that users don’t really care about
          parking apps. All they want is to be able to quickly and easily pay
          for parking.
        </Section.Text>

        <Quote>
          <Quote.Text>
            “My ideal parking app is one I never have to open. I park up, it
            automatically pays for parking and I can get on with my day”
          </Quote.Text>
          <Quote.Author>MARCO SANS</Quote.Author>
        </Quote>
      </Section>

      <Section>
        <Section.Label>• AFFINITY MAP</Section.Label>
        <Section.Title>Wheres the UX?</Section.Title>
        <Section.Text>
          Users have a lot of pain points with car parking apps but it’s not to
          do with missing features or better features, they want better UX. My
          research has shown that users just do not like how these core features
          are implemented.
        </Section.Text>

        <h1 className="font-bold mt-[32px]">NEED TO SORT OUT IMAGE</h1>
      </Section>

      <Section>
        <Section.Label>• MAIN INSIGHT</Section.Label>
        <Section.Title>
          Parking apps have solid core features but wrapped in terrible UX
        </Section.Title>
        <Section.Text>
          RingGO and PayByPhone are the two most popular parking apps but they
          suffer from the same problem, bad UI and bad UX. They offer a set of
          features that users want to like, payments, finding parking and
          parking alerts but wrap them up in terrible UX.
        </Section.Text>
      </Section>

      <H1>2. Who wants EasyPark?</H1>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• USER PERSONAS</Section.Label>
        <Section.Title>Enter Alex and Sam</Section.Title>
        <Section.Text>
          From my research two distinct types of users started to appear.
          <br />
          <br />
          <span className="font-bold">The solo parker</span> - These are
          professionals. They drive to work, the gym, or to meet friends.
          <br />
          <br />
          <span className="font-bold">The family parker</span> - These are
          parents with young children. Their driving revolves around taking
          their kids to school, outings and to see family.
        </Section.Text>
      </Section>

      <div
        className={twMerge(
          "flex flex-col mt-[32px] gap-[16px] mb-[96px]",
          "md:flex-row md:mb-[128px] md:max-w-[1024px] mx-auto"
        )}
      >
        <div>
          <Image
            src="/images/easyParkCaseStudy/personaAlexTaylor.jpg"
            width={1512}
            height={982}
          />
        </div>

        <div>
          <Image
            src="/images/easyParkCaseStudy/personaSamMorgan.png"
            width={1512}
            height={982}
          />
        </div>
      </div>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• EMPATHY MAP</Section.Label>
        <Section.Title>What does Alex and Sam want?</Section.Title>
        <Section.Text>
          <span className="font-bold">Alex</span> isn’t that fussed about
          finding the cheapest parking space, he wants a quick payment process
          so he can get on with his day and not think about parking more than he
          needs to.
          <br />
          <br />
          <span className="font-bold">Sam</span> just wants a quick and easy
          payment flow, parking with two kids fighting in the backseat is a
          nightmare and she doesn't want to deal with that while struggling to
          make a payment through a crappy parking app.
        </Section.Text>
      </Section>

      <Section.FullWidthImage src="/images/easyParkCaseStudy/empathyMap.png" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• USER JOURNEY MAP</Section.Label>
        <Section.Title>Convincing Alex and Sam to sign up</Section.Title>
        <Section.Text>
          Alex and Sam are skeptical of another parking app, all of the others
          are awful, why should EasyPark be any different. To turn Alex and Sam
          into daily users I need to give them a great first impression of
          EasyPark and a super simple sign up process otherwise I run the risk
          of EasyPark being written off as another crappy parking app.
        </Section.Text>
      </Section>

      <Section.FullWidthImage src="/images/easyParkCaseStudy/customerJourneyMap.png" />

      <H1>3. Designing EasyPark</H1>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• TASK FLOWS + USER FLOWS</Section.Label>
        <Section.Title>Payments is the core feature</Section.Title>
      </Section>

      <Section.FullWidthImage src="/images/easyParkCaseStudy/taskFlows.png" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.H3>The payment flow</Section.H3>
        <Section.Text>
          Payments is the core feature that users want and Alex and Sam do no
          want to get hung up on an awkward payment flow. They want to quickly
          pay and get on with their day. The payment flow should
        </Section.Text>

        <Section.BulletList>
          <li>
            <Section.Text>
              Be a set of simple steps with clear instructions
            </Section.Text>
          </li>
          <li>
            <Section.Text>
              Preselect the user default payment and vehicle option
            </Section.Text>
          </li>
          <li>
            <Section.Text>
              And handle edge cases like expired payment options gracefully
            </Section.Text>
          </li>
        </Section.BulletList>
      </Section>

      <Section.FullWidthImage src="/images/easyParkCaseStudy/paymentFlow.png" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.H3 className="mt-[64px] md:mt-[96px]">
          Finding parking
        </Section.H3>
        <Section.Text>
          Finding a car park should be super easy. Alex and Sam want to open the
          app, land on a map centred on their location where they can either
          interact with the map to find a car park or type an address into a
          search bar.
        </Section.Text>
      </Section>

      <Section.FullWidthImage src="/images/easyParkCaseStudy/findingCarParkFlow.png" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.H3 className="mt-[64px] md:mt-[96px]">Pay Now</Section.H3>
        <Section.Text>
          Frequently Alex and Sam will drive to a car park and only open a
          parking app when they need to pay. They don't want to have to open
          EasyPark and mess around with a map or go through the Finding a Car
          Park flow. They want a shortcut to go directly to paying for parking.
        </Section.Text>
      </Section>

      <Section.FullWidthImage src="/images/easyParkCaseStudy/payNowFlow.png" />

      <Section>
        <Section.Label>• SKETCHES + WIREFRAMES</Section.Label>
        <Section.Title>What works? what doesn’t?</Section.Title>
        <Section.Text>
          I have a ton of ideas on how Payments, Finding a car park and Pay now
          should look and feel but what is right and wrong? I don’t know. I
          iterated over a bunch of sketches and wireframes to quickly figure out
          what worked and what didn’t work for these features.
        </Section.Text>
      </Section>

      <OverflowImage src="/images/easyParkCaseStudy/sketches.png" />

      <H1>4. Bringing EasyPark to life!</H1>

      <Section>
        <Section.Label>• INSPIRATION</Section.Label>
        <Section.Title>
          Searching for inspiration - Behance, Dribbble and Mobbin
        </Section.Title>
        <Section.Text>
          I searched for as much design inspiration as I could find. I found it
          in existing parking apps, RingGO and PayByPhone, my
          sketches/wireframes and on Behance, Dribbble and Mobbin.
        </Section.Text>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• DESIGN SYSTEM</Section.Label>
        <Section.Title>Practical UI to speed up designs</Section.Title>
        <Section.Text>
          I decided to use an off the shelf design system as it saves me a bunch
          of time. I choose to use{" "}
          <ExternalLink to="https://www.practical-ui.com/design-system/">
            Practical UI
          </ExternalLink>{" "}
          as it provides a set of clean, simple, minimal, high quality UI
          components that are fully accessible.
        </Section.Text>
      </Section>

      <Section.FullWidthImage src="/images/easyParkCaseStudy/practicalUI.png" />

      <div ref={finalDesignsRef} />
      <Section>
        <Section.Label>• HIGH FIDELITY DESIGNS + PROTOTYPE</Section.Label>
        <Section.Title>EasyPark's ALIVE!</Section.Title>
        <Section.Text>
          I created my final designs using Practical UI and the inspiration I
          found online. Once the final designs where done I turned them into a
          Figma Prototype.
        </Section.Text>

        <div className="w-full my-[32px]">
          <iframe
            className="mx-auto max-w-[800px] w-full"
            height="450"
            src="https://embed.figma.com/design/Y6wARWjLPOpNVjr5gZJYDG/EasyPark?node-id=0-1&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full my-[64px]">
          <iframe
            className="mx-auto max-w-[800px] w-full"
            height="450"
            src="https://embed.figma.com/proto/Y6wARWjLPOpNVjr5gZJYDG/EasyPark?node-id=373-1904&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=373%3A1904&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>
      </Section>

      <H1>5. What do users think?</H1>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• USER TESTING</Section.Label>
        <Section.Title>Users like EasyPark but what is Pay now?</Section.Title>
        <Section.Text>
          I performed a series of User Tests to see if users actually found
          EasyPark easier to use. For the most part everything went great users
          could easily pay for parking and they could find the car park they
          wanted but they all ran into the same issue, what is Pay now? what
          does it mean?
        </Section.Text>

        <Section.H3>Pay now before and after</Section.H3>
        <Section.Text>
          In my original designs Pay Now was a button in the nav bar. To make it
          clear that Pay now is a shortcut to paying I extracted it out of the
          nav bar and into it's own button with clear instructions.
        </Section.Text>
      </Section>

      <Section.FullWidthImage src="/images/easyParkCaseStudy/payNowBeforeAndAfter.png" />

      <H1>6. Conclusion</H1>

      <Section>
        <Section.Label>• REVIEW</Section.Label>
        <Section.Title>Parking apps don't have to be awful</Section.Title>
        <Section.Text>
          Existing car parking apps are awful, they offer features that users
          want to like but wrap them up in terrible UX. Through user research
          and designing for users I was able to create EasyPark. A new parking
          app with users needs at it's centre.
        </Section.Text>
      </Section>

      <Section>
        <Section.Label>• LEARNINGS</Section.Label>
        <Section.Title>Research is everything</Section.Title>
        <Section.Text>
          EasyPark is the first app I have designed and I have definitely learnt
          a lot.
        </Section.Text>

        <Section.BulletList>
          <li>
            <Section.Text>
              <span className="font-bold">Research is everything.</span> Without
              research you are just guessing at what your users want and you
              can't build a app based on guess work. You need to do research,
              only from User surveys and User interviews can you begin to gather
              the data you need to make design decisions that are right for the
              user.
            </Section.Text>
          </li>
          <li>
            <Section.Text>
              <span className="font-bold">Research is hard.</span> There is a
              definite art to performing user research and I feel it's an area I
              need to improve in. If you don't ask the right question in the
              right way there is a real chance of getting data that can lead you
              into designing something you think the users want but they
              actually don't.
            </Section.Text>
          </li>
          <li>
            <Section.Text>
              <span className="font-bold">
                Hold off on high fidelity designs.
              </span>{" "}
              My favourite part of design is opening up Figma and creating some
              fancy designs. I need to learn to hold off from doing this as I
              start to create designs based on my assumptions not on user
              research.
            </Section.Text>
          </li>
          <li>
            <Section.Text>
              <span className="font-bold">Design for users not yourself.</span>{" "}
              It’s not about what you want, it's about what your user's want,
              thats why User personas are so important. They allow you to put
              yourself into your users shoes and to make design decisions that
              are the best for them.
            </Section.Text>
          </li>
        </Section.BulletList>
      </Section>

      <Section className="mb-0">
        <Section.Label>• WRAP UP</Section.Label>
        <Section.Title>Final thoughts</Section.Title>
        <Section.Text>
          EasyPark has been a great learning experience for me, I’ve learnt the
          importance of user research, how to turn research into User personas
          and why you should always design for the user. I still have lots to
          learn but I definitely feel I am on the path to becoming a UI/UX
          designer.
        </Section.Text>
      </Section>
    </>
  );
};

export default Page;
