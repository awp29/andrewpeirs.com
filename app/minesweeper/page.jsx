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

        <Title>Super Minesweeper 3000</Title>
        <Details>
          <DetailsColumn>
            <DetailsLabel>TIMELINE</DetailsLabel>
            <DetailsText>Dec 2024</DetailsText>
          </DetailsColumn>

          <DetailsColumn>
            <DetailsLabel>PLATFORM</DetailsLabel>
            <DetailsText>Web</DetailsText>
          </DetailsColumn>

          <DetailsColumn>
            <DetailsLabel>ROLE</DetailsLabel>
            <DetailsText>Product Designer, Coder</DetailsText>
          </DetailsColumn>
        </Details>
      </Header>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• INTRO</Section.Label>
        <Section.Title>BraUn super minesweeper</Section.Title>
        <Section.Text>
          With this project I wanted to do two things, I wanted to have a bit of
          fun and to understand why I love retro BraUn products so much. I
          decided to take a simple game, code it all from scratch and design it
          to have a retro BraUn look and feel.
        </Section.Text>

        <Section.JumpToFinalDesignsButton ref={finalDesignsRef} />

        <h1 className="mt-[32px] font-bold">GIF OF GAME PLAYING</h1>
      </Section>

      <H1>1. Research</H1>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• MINESWEEPER INSPIRATION</Section.Label>
        <Section.Title>Classic minesweeper, emoji and google</Section.Title>
        <Section.Text>
          Minesweeper is a pretty standard game and it's features are set in
          place but I wanted to understand how other designers added their
          personality to it.
        </Section.Text>

        <Section.Text className="mt-[32px]">
          <ExternalLink>Minesweeper online</ExternalLink> - Sticks to the
          classic look and feel, focused on stats, leader boards and competition
        </Section.Text>

        <h1 className="mt-[32px] mb-[32px] font-bold">GIF OF GAME PLAYING</h1>

        <Section.Text>
          <ExternalLink>Google minesweeper</ExternalLink> - Bit of a basic
          design but has really good win/lose animations
        </Section.Text>

        <h1 className="mt-[32px] mb-[32px] font-bold">GIF OF GAME PLAYING</h1>

        <Section.Text>
          <ExternalLink>Emoji minesweeper</ExternalLink> - Great design, it's
          fun, it's vibrant and all designed using emojis
        </Section.Text>

        <h1 className="mt-[32px] font-bold">GIF OF GAME PLAYING</h1>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• LOOK AND FEEL</Section.Label>
        <Section.Title>Retro BraUn products</Section.Title>
        <Section.Text>
          I love the BraUn products designed by Dieter Rams. I love the colors,
          the smooth corners, the minimalist feel and the product names. I want
          my minesweeper game to have that look and feel. To get my head into
          that space I researched a bunch of BraUn products and put together a
          mood board
        </Section.Text>

        <h1 className="mt-[32px] font-bold">MOOD BOARD IMAGE</h1>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• COLOR PALETTE</Section.Label>
        <Section.Title>DR09 (Dieter Rams color palette 09)</Section.Title>
        <Section.Text>
          For a color palette I went with{" "}
          <ExternalLink>DR09 by Matus Hatala</ExternalLink>. This matches the
          style of my favourite BraUn products.
        </Section.Text>

        <h1 className="mt-[32px] font-bold">COLOR PALETTE IMAGE</h1>
      </Section>

      <H1>2. Design</H1>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• CORE FEATURES</Section.Label>
        <Section.Title>The board</Section.Title>
        <Section.Text>
          I want to stick to the classic Minesweeper layout but apply the UI
          design principles/ideas I learnt from BraUn
          <Section.BulletList>
            <li>
              <Section.Text>A super strong visual hierarchy</Section.Text>
            </li>
            <li>
              <Section.Text>Minimal look and feel</Section.Text>
            </li>
            <li>
              <Section.Text>Soft rounded corners, no sharp edges</Section.Text>
            </li>
          </Section.BulletList>
        </Section.Text>

        <h1 className="mt-[32px] font-bold">
          IMAGE WITH STICKIES HERE EXPLAINING EACH SECTION OF THE GAME BOARD
        </h1>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Title>The cells</Section.Title>
        <Section.Text>
          The game cells need to look and feel like they belong together but
          some need to blend in and others need to pop. To do that the visual
          hierarchy has to be solid.
          <br />
          <br />
          Each cell can be in 1 of 5 states
        </Section.Text>

        <h1 className="mt-[32px] font-bold">NEED TO BUILD OUT THIS SECTION</h1>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Title>The smiley face</Section.Title>
        <Section.Text>
          Its a classic part of minesweeper but I wanted to add a bit more of a
          modern feel to it. Inspired by Emoji Minesweeper I decided to use
          emojis for this as it gives the game a little bit more personality
        </Section.Text>

        <h1 className="mt-[32px] font-bold">NEED IMAGE</h1>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Title>The flow</Section.Title>
        <Section.Text>
          I want it to be super quick and snappy to start a new game. I didn’t
          want to slow down the flow with fancy win/lose animations or popups. I
          decided to stick with the classic minesweeper flow as it allows a
          player to get straight back into a game as quick as possible.
        </Section.Text>

        <h1 className="mt-[32px] font-bold">NEED IMAGE</h1>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• THE LAYOUT</Section.Label>
        <Section.Title>
          Navbar and difficulty settings is background
        </Section.Title>
        <Section.Text>
          The game board is the most important piece of UI, that is what should
          hold the players attention. Everything else is background. I pushed
          all the UI that isn't the game board out to the edges of the screen so
          that it does not take any of the players attention away from the game.
        </Section.Text>

        <h1 className="mt-[32px] font-bold">NEED IMAGE</h1>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• INSTRUCTIONS</Section.Label>
        <Section.Title>Explain how I designed the instructions</Section.Title>
        <Section.Text>TODO</Section.Text>

        <h1 className="mt-[32px] font-bold">NEED IMAGE</h1>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• NAME</Section.Label>
        <Section.Title>SM-30 (Super Minesweeper 3000)</Section.Title>
        <Section.Text>
          I first started with Super Minesweeper 3000. This has a feel of the
          old Super Nintendo games I played as a kid.
          <Section.BulletList>
            <li>
              <Section.Text>Super Mario Bros</Section.Text>
            </li>
            <li>
              <Section.Text>Super Metroid</Section.Text>
            </li>
            <li>
              <Section.Text>Super Street Fighter II</Section.Text>
            </li>
          </Section.BulletList>
          But I also wanted it to sound like a BraUn Product
          <Section.BulletList>
            <li>
              <Section.Text>TP4</Section.Text>
            </li>
            <li>
              <Section.Text>SK 2/2</Section.Text>
            </li>
            <li>
              <Section.Text>KSM 1/11</Section.Text>
            </li>
          </Section.BulletList>
          I decided to shorten Super Minesweeper 3000 to SM-30 to give it a
          BraUn feel.
        </Section.Text>
      </Section>

      <div ref={finalDesignsRef} />
      <H1>3. Final Designs</H1>

      <H1>4. Conclusion</H1>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• REVIEW</Section.Label>
        <Section.Title>BraUn super minesweeper</Section.Title>
        <Section.Text>
          I wanted to create a minesweeper game inspired by retro BraUn products
          and I feel I achieved that. I took a standard minesweeper layout and
          applied design principles I learnt from studying BraUn products. I
          crafted a visual hierarchy to let the important features pop, I stuck
          to a minimal look and feel and themed it with a BraUn inspired color
          palette to give it a retro aesthetic.
        </Section.Text>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• LEARNINGS</Section.Label>
        <Section.Title>BraUn super minesweeper</Section.Title>
        <Section.Text>
          I have learnt two fundamental principles from studying BraUn products
          <Section.BulletList>
            <li>
              <Section.Text>
                <span className="font-bold">
                  A good visual hierarchy is super important.
                </span>{" "}
                Using color, contrast and balanced spacing to ensure core
                features pop and they are easily understood and simple to use.
              </Section.Text>
            </li>
            <li>
              <Section.Text>
                <span className="font-bold">Keep things minimal.</span> A good
                product doesn't need a bunch of features, they aren’t cluttered
                and trying to do a 1000 things. BraUn products stick to a core
                feature and implement that as best as they can
              </Section.Text>
            </li>
          </Section.BulletList>
        </Section.Text>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• NEXT STEPS</Section.Label>
        <Section.Title>What would I add?</Section.Title>
        <Section.Text>
          I feel my Minesweeper is missing a hook to get players to come back
          and play again. I think adding stats to the game would give players an
          incentive to come back and play again. I would track things like
          <Section.BulletList>
            <li>
              <Section.Text>Total games played</Section.Text>
            </li>
            <li>
              <Section.Text>Games won</Section.Text>
            </li>
            <li>
              <Section.Text>Win percentage</Section.Text>
            </li>
            <li>
              <Section.Text>Quickest time</Section.Text>
            </li>
            <li>
              <Section.Text>Total moves made</Section.Text>
            </li>
            <li>
              <Section.Text>Total time played</Section.Text>
            </li>
          </Section.BulletList>
        </Section.Text>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• TAKEAWAY</Section.Label>
        <Section.Title>Visual hierarchy is a core UI principle</Section.Title>
        <Section.Text>
          A solid visual hierarchy is a core aspect to a simple and easy to use
          product. You can see this in how BraUn uses color, contrast and
          balanced spacing to make the core features of their products super
          clear.
        </Section.Text>
      </Section>
    </>
  );
};

export default Page;
