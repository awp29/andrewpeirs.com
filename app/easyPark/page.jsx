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
import Section from "app/components/caseStudy/section/Section";
import H1 from "app/components/caseStudy/H1";
import Survey from "./components/Survey";
import Quote from "app/components/caseStudy/quote/Quote";
import { twMerge } from "tailwind-merge";
import ExternalLink from "app/components/externalLink";
import useScrollToTop from "app/hooks/useScrollToTop";
import BackButton from "app/components/BackButton";
import classNames from "classnames";

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

      <div
        className={classNames(
          "flex flex-1 gap-[8px] mb-[96px] mx-[16px] max-w-[1512px]",
          "md:gap-[16px] md:mb-[196px] md:px-[16px] md:mx-auto",
          "lg:gap-[32px] lg:px-[32px]"
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

      <Section>
        <Section.Label>• THE PROBLEM</Section.Label>
        <Section.Title>I hate parking apps</Section.Title>
        <Section.Text>
          Parking apps are a nightmare! They confuse users with vague
          instructions, bury essential features, and make payments a hassle—so
          much so that people just stop trusting them. I'm sick of struggling
          with poorly designed parking apps. I want to create one that people
          actually enjoy using.
        </Section.Text>
      </Section>

      <Section>
        <Section.Label>• THE SOLUTION</Section.Label>
        <Section.Title>Easy parking with EasyPark</Section.Title>
        <Section.Text>
          Through user research, interviews, and surveys, I learnt what users
          actually want from a parking app. Using these insights, I designed
          EasyPark, a new app built around the needs of its users.
        </Section.Text>

        <Section.JumpToFinalDesignsButton ref={finalDesignsRef} />
      </Section>

      <Section>
        <Section.Label>• MY ROLE</Section.Label>
        <Section.Title>Learning UI/UX design with CourseCareers</Section.Title>
        <Section.Text>
          EasyPark is a project I created during the{" "}
          <ExternalLink to="https://coursecareers.com/explore/uiux">
            Course Careers
          </ExternalLink>{" "}
          UI/UX design course. As a hands-on learning experience, I handled
          everything myself, from user interviews and surveys to high-fidelity
          designs and prototyping.
        </Section.Text>
      </Section>

      <H1>1. Whats the deal with parking apps?</H1>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• USER SURVEY</Section.Label>
        <Section.Title>
          Finding a parking space is not the priority
        </Section.Title>
        <Section.Text>
          I surveyed 25 users, and they taught me two important things: RingGo
          and PayByPhone are the most popular parking apps, and users care less
          about finding a parking space and more about making the payment
          process easy.
        </Section.Text>
      </Section>

      <Survey>
        <Survey.Stat>
          <Survey.Percent>81%</Survey.Percent>

          <Survey.Text>
            of respondents said that payments are the most important feature of
            parking apps.
          </Survey.Text>
        </Survey.Stat>

        <Survey.Stat>
          <Survey.Percent>68%</Survey.Percent>

          <Survey.Text>
            of respondents said their preferred parking apps are RingGo and
            PayByPhone.
          </Survey.Text>
        </Survey.Stat>

        <Survey.Stat>
          <Survey.Percent>92%</Survey.Percent>

          <Survey.Text>
            of respondents said they'd like better parking data.
          </Survey.Text>
        </Survey.Stat>
      </Survey>

      <Section>
        <Section.Label>• USER INTERVIEWS</Section.Label>
        <Section.Title>
          Users don't really want to use a parking app
        </Section.Title>
        <Section.Text>
          Through my interviews, I learned that users don't really care about
          parking apps; they just want a quick and easy way to pay for parking.
        </Section.Text>

        <Quote>
          <Quote.Text>
            “My ideal parking app is one I never have to open. I park, it
            automatically handles the payment, and I can go on with my day.”
          </Quote.Text>
          <Quote.Author>MARCO ANGELO</Quote.Author>
        </Quote>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• AFFINITY MAP</Section.Label>
        <Section.Title>Wheres the UX?</Section.Title>
        <Section.Text>
          Users have many pain points with parking apps, but it's not about
          missing or better features; they want a better user experience. My
          research shows that the issue is how these core features are
          implemented.
        </Section.Text>
      </Section>

      <Section.FullWidthImage src="/images/easyParkCaseStudy/affinityMap.jpg" />

      <Section>
        <Section.Label>• MAIN INSIGHT</Section.Label>
        <Section.Title>
          Parking apps have solid core features but wrapped in terrible UX
        </Section.Title>
        <Section.Text>
          RingGo and PayByPhone are the two most popular parking apps, but they
          share the same problem: poor UI and UX. They offer features users
          want, such as payments, finding parking, and parking alerts, but they
          wrap them in a frustrating user experience.
        </Section.Text>
      </Section>

      <H1>2. Who wants EasyPark?</H1>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• USER PERSONAS</Section.Label>
        <Section.Title>Enter Alex and Sam</Section.Title>
        <Section.Text>
          My research revealed two distinct types of users:
          <br />
          <br />
          <span className="font-bold">The solo parker</span> - Professionals who
          drive to work, the gym, or to meet friends.
          <br />
          <br />
          <span className="font-bold">The family parker</span> - Parents with
          young children, whose driving is mostly for school runs, outings, and
          family visits.
        </Section.Text>
      </Section>

      <div
        className={twMerge(
          "flex flex-col mt-[32px] gap-[16px] mb-[96px] mx-[16px]",
          "md:flex-row md:mb-[128px] md:max-w-[1024px]",
          "lg:mx-auto lg:px-[32px]"
        )}
      >
        <div className="flex-1">
          <img
            className="border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg"
            src="/images/easyParkCaseStudy/personaAlexTaylor.jpg"
          />
        </div>

        <div className="flex-1">
          <img
            className="border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg"
            src="/images/easyParkCaseStudy/personaSamMorgan.jpg"
          />
        </div>
      </div>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• EMPATHY MAP</Section.Label>
        <Section.Title>What do Alex and Sam want?</Section.Title>
        <Section.Text>
          <span className="font-bold">Alex</span> isn't concerned with finding
          the cheapest parking spot; he just wants a fast payment process so he
          can get on with his day without having to think about parking.
          <br />
          <br />
          <span className="font-bold">Sam</span> on the other hand, wants a
          quick and easy payment flow. With two kids fighting in the backseat,
          parking is already stressful, and she doesn't want to add the
          frustration of struggling with a crappy app.
        </Section.Text>
      </Section>

      <Section.FullWidthImage src="/images/easyParkCaseStudy/empathyMap.jpg" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• USER JOURNEY MAP</Section.Label>
        <Section.Title>Convincing Alex and Sam to sign up</Section.Title>
        <Section.Text>
          Alex and Sam are skeptical about trying another parking app; most of
          them are awful, so why would EasyPark be any different? To win them
          over as daily users, I need to make a strong first impression with
          EasyPark and offer a super simple sign-up process. Otherwise, I risk
          EasyPark being dismissed as just another crappy parking app.
        </Section.Text>
      </Section>

      <Section.FullWidthImage src="/images/easyParkCaseStudy/customerJourneyMap.jpg" />

      <H1>3. Designing EasyPark</H1>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• TASK FLOWS + USER FLOWS</Section.Label>
        <Section.Title>Payments is the core feature</Section.Title>
      </Section>

      <Section.FullWidthImage src="/images/easyParkCaseStudy/taskFlows.jpg" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.H3>The payment flow</Section.H3>
        <Section.Text>
          Payments are the core feature users want, and Alex and Sam don’t want
          to get stuck in a frustrating payment flow. They just want to pay
          quickly and get on with their day. The payment flow should:
        </Section.Text>

        <Section.BulletList>
          <li>
            <Section.Text>
              Be a series of simple steps with clear instructions.
            </Section.Text>
          </li>
          <li>
            <Section.Text>
              Preselect the user's default payment and vehicle options.
            </Section.Text>
          </li>
          <li>
            <Section.Text>
              Handle edge cases, like expired payment methods, smoothly.
            </Section.Text>
          </li>
        </Section.BulletList>
      </Section>

      <Section.FullWidthImage src="/images/easyParkCaseStudy/paymentFlow.jpg" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.H3 className="mt-[64px] md:mt-[96px]">
          Finding parking
        </Section.H3>
        <Section.Text>
          Finding a parking spot should be super easy. Alex and Sam want to open
          the app and immediately see a map centered on their location, where
          they can either browse the map to find a parking spot or type an
          address into a search bar.
        </Section.Text>
      </Section>

      <Section.FullWidthImage src="/images/easyParkCaseStudy/findingCarParkFlow.jpg" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.H3 className="mt-[64px] md:mt-[96px]">Pay Now</Section.H3>
        <Section.Text>
          Frequently, Alex and Sam will drive to a car park and only open the
          app when it's time to pay. They don’t want to deal with maps or go
          through the "Finding a Car Park" flow. They just want a shortcut that
          takes them straight to the payment flow.
        </Section.Text>
      </Section>

      <Section.FullWidthImage src="/images/easyParkCaseStudy/payNowFlow.jpg" />

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• SKETCHES + WIREFRAMES</Section.Label>
        <Section.Title>What works? what doesn't?</Section.Title>
        <Section.Text>
          I have a ton of ideas about how Payments, Finding a Car Park, and Pay
          Now should look and feel, but what's right and what's wrong? I'm not
          sure. So, I went through multiple sketches and wireframes to quickly
          test what worked and what didn't for these features.
        </Section.Text>
      </Section>

      <div
        className={classNames(
          "flex flex-1 gap-[8px] mb-[96px] mx-[16px] max-w-[1512px]",
          "md:gap-[16px] md:mb-[196px] md:px-[16px] md:mx-auto",
          "lg:gap-[32px] lg:px-[32px]"
        )}
      >
        <div className="flex-1">
          <img
            className={classNames("drop-shadow-xl")}
            src="/images/easyParkCaseStudy/sketchSelectVehicle.png"
            alt="Screenshot of the EasyPark app showing a list of car parking spaces"
          />
        </div>

        <div className="flex-1">
          <img
            className={classNames("drop-shadow-lg")}
            src="/images/easyParkCaseStudy/sketchPaymentSuccess.png"
            alt="Screenshot of the EasyPark app showing a map with car parking spaces highlighted"
          />
        </div>

        <div className="flex-1">
          <img
            className={classNames("drop-shadow-lg")}
            src="/images/easyParkCaseStudy/sketchSelectPayment.png"
            alt="Screenshot of the EasyPark app showing details about a car park the user has selected"
          />
        </div>

        <div className="flex-1">
          <img
            className={classNames("drop-shadow-lg")}
            src="/images/easyParkCaseStudy/sketchPaymentSummary.png"
            alt="Screenshot of the EasyPark app showing the user how much time they have left at their space"
          />
        </div>
      </div>

      <H1>4. Bringing EasyPark to life!</H1>

      <Section>
        <Section.Label>• INSPIRATION</Section.Label>
        <Section.Title>
          Searching for inspiration - Behance, Dribbble and Mobbin
        </Section.Title>
        <Section.Text>
          I searched for design inspiration everywhere I could. I found it in
          existing parking apps like RingGo and PayByPhone, in my own sketches
          and wireframes, and on platforms like Behance, Dribbble, and Mobbin.
        </Section.Text>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• DESIGN SYSTEM</Section.Label>
        <Section.Title>Practical UI to speed up designs</Section.Title>
        <Section.Text>
          To save time, I decided to use an off-the-shelf design system. I chose{" "}
          <ExternalLink to="https://www.practical-ui.com/design-system/">
            Practical UI
          </ExternalLink>{" "}
          because it offers a set of clean, simple, minimal, and high-quality UI
          components that are fully accessible.
        </Section.Text>
      </Section>

      <Section.FullWidthImage src="/images/easyParkCaseStudy/practicalUI.jpg" />

      <div ref={finalDesignsRef} />
      <Section>
        <Section.Label>• HIGH FIDELITY DESIGNS + PROTOTYPE</Section.Label>
        <Section.Title>EasyPark's ALIVE!</Section.Title>
        <Section.Text>
          I created my final designs using Practical UI and the inspiration I
          found online. Once the designs were complete, I turned them into a
          Figma prototype.
        </Section.Text>

        <div className="w-full my-[32px]">
          <iframe
            className="border-1 border-[rgba(0, 0, 0, 0.1)] mx-auto max-w-[800px] w-full"
            height="600"
            src="https://embed.figma.com/design/Y6wARWjLPOpNVjr5gZJYDG/EasyPark?node-id=0-1&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full my-[64px]">
          <iframe
            className="border-1 border-[rgba(0, 0, 0, 0.1)] mx-auto max-w-[800px] w-full"
            height="600"
            src="https://embed.figma.com/proto/Y6wARWjLPOpNVjr5gZJYDG/EasyPark?node-id=373-1904&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=373%3A1904&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>
      </Section>

      <H1>5. What do users think?</H1>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• USER TESTING</Section.Label>
        <Section.Title>
          Users like EasyPark, but what is "Pay Now"?
        </Section.Title>
        <Section.Text>
          I conducted a series of user tests to see if users found EasyPark
          easier to use. Overall, things went well; users could easily pay for
          parking and find the car park they wanted. But they all ran into the
          same issue: What is "Pay Now"? What does it mean?
        </Section.Text>

        <Section.H3>Pay Now: Before and After</Section.H3>
        <Section.Text>
          In my original designs, "Pay Now" was just a button in the nav bar. To
          make it clear that it's a shortcut to payment, I moved it out of the
          nav bar and gave it its own button with clear instructions.
        </Section.Text>
      </Section>

      <div className="px-[16px] md:mx-auto md:max-w-[840px]">
        <img
          className={twMerge(
            "w-full h-auto mt-[32px] mb-[96px]",
            "md:mb-[128px] md:max-w-[840px]"
          )}
          src="/images/easyParkCaseStudy/payNowBeforeAndAfter.png"
        />
      </div>

      <H1>6. Conclusion</H1>

      <Section>
        <Section.Label>• REVIEW</Section.Label>
        <Section.Title>Parking apps don't have to be awful</Section.Title>
        <Section.Text>
          Most parking apps are frustrating to use. They offer features users
          want, but the poor UX makes them hard to use. Through user research
          and a focus on real user needs, I created EasyPark, a parking app
          built with the user in mind.
        </Section.Text>
      </Section>

      <Section>
        <Section.Label>• LEARNINGS</Section.Label>
        <Section.Title>Research is everything</Section.Title>
        <Section.Text>
          EasyPark is the first app I've designed, and I've learned a lot
          through the process.
        </Section.Text>

        <Section.BulletList>
          <li>
            <Section.Text>
              <span className="font-bold">Research is everything.</span> Without
              it, you're just guessing what users want, and you can't build a
              successful app based on guesswork. You need solid user surveys and
              interviews to gather the data necessary to make design decisions
              that truly meet user needs. user.
            </Section.Text>
          </li>
          <li>
            <Section.Text>
              <span className="font-bold">Research is hard.</span> There's an
              art to it, and I know it's an area where I need to improve. If you
              don't ask the right questions in the right way, you risk
              collecting data that leads you to design something you think users
              want—only to find out they don't.
            </Section.Text>
          </li>
          <li>
            <Section.Text>
              <span className="font-bold">
                Hold off on high fidelity designs.
              </span>{" "}
              My favorite part of design is jumping into Figma and creating
              polished designs. But I've learned to resist the urge, as I've
              often ended up designing based on assumptions rather than solid
              user research.
            </Section.Text>
          </li>
          <li>
            <Section.Text>
              <span className="font-bold">Design for users not yourself.</span>{" "}
              It's not about what you want—it's about what your users need.
              That's why user personas are so crucial. They help you step into
              your users' shoes and make decisions that are best for them, not
              for you.
            </Section.Text>
          </li>
        </Section.BulletList>
      </Section>

      <Section>
        <Section.Label>• WRAP UP</Section.Label>
        <Section.Title>Final thoughts</Section.Title>
        <Section.Text>
          EasyPark has been a great learning experience. I've learned the
          importance of user research, how to turn that research into user
          personas, and why designing for the user is always the priority.
          There's still a lot for me to learn, but I definitely feel like I'm on
          the right path to becoming a UI/UX designer.
        </Section.Text>
      </Section>
    </>
  );
};

export default Page;
