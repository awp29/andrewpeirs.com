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
import classNames from "classnames";
import ViewLiveVersionButton from "./ViewLiveVersionButton";

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
          With this project, I wanted to achieve two things: have some fun and
          understand why I love retro Braun products so much. I decided to take
          a simple game, code it from scratch, and design it with a retro Braun
          look and feel.
        </Section.Text>

        <Section.JumpToFinalDesignsButton ref={finalDesignsRef} />

        <Section.Image src="/images/minesweeperCaseStudy/minesweeper.gif" />
      </Section>

      <H1>1. Research</H1>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• MINESWEEPER INSPIRATION</Section.Label>
        <Section.Title>Classic minesweeper, emoji and google</Section.Title>
        <Section.Text>
          Minesweeper is a classic game with set features, but I wanted to
          explore how other designers add their own personality to it.
        </Section.Text>

        {/* AP-TODO: TURN THIS INTO COMPONENTS */}
        <div
          className={classNames(
            "flex flex-col gap-[48px] mt-[32px] mb-[96px]",
            "md:mt-[32px] md:mb-[128px]"
          )}
        >
          <div
            className={classNames(
              "flex-col flex gap-[20px] items-center",
              "md:flex-row md:gap-[48px]"
            )}
          >
            <div className="flex-1 w-full">
              <img
                className="w-full object-contain m-auto border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg"
                src="/images/minesweeperCaseStudy/classicMinesweeper.jpg"
              />
            </div>

            <Section.Text className="flex-1">
              <ExternalLink to="https://minesweeperonline.com/">
                Minesweeper online
              </ExternalLink>{" "}
              - Sticks to the classic look and feel, with a focus on stats,
              leaderboards, and competition.
            </Section.Text>
          </div>

          <div
            className={classNames(
              "flex-col-reverse flex gap-[20px] items-center",
              "md:flex-row md:gap-[48px]"
            )}
          >
            <Section.Text className="flex-1">
              <ExternalLink to="https://www.google.com/search?gs_ssp=eJzj4tDP1TewLMkoNGD04s7NzEstLk9NLUgtAgBUWwe-&q=minesweeper&oq=minesweeper&sourceid=chrome&ie=UTF-8">
                Google minesweeper
              </ExternalLink>{" "}
              - A basic design, but with great win/lose animations.
            </Section.Text>

            <div className="flex-1 w-full">
              <img
                className="w-full object-contain m-auto border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg"
                src="/images/minesweeperCaseStudy/googleMinesweeper.jpg"
              />
            </div>
          </div>

          <div
            className={classNames(
              "flex-col flex gap-[20px] items-center",
              "md:flex-row md:gap-[48px]"
            )}
          >
            <div className="flex-1 w-full">
              <img
                className="w-full object-contain m-auto border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg"
                src="/images/minesweeperCaseStudy/emojiMinesweeper.jpg"
              />
            </div>

            <Section.Text className="flex-1">
              <ExternalLink to="https://emojiminesweeper.com/">
                Emoji minesweeper
              </ExternalLink>{" "}
              - A fun, vibrant design, all crafted using emojis.
            </Section.Text>
          </div>
        </div>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• LOOK AND FEEL</Section.Label>
        <Section.Title>Retro BraUn products</Section.Title>
        <Section.Text>
          I’m a big fan of Braun products designed by Dieter Rams. I love the
          colors, smooth corners, minimalist aesthetic, and the product names. I
          wanted my Minesweeper game to capture that same look and feel. To get
          my head into that space, I researched a range of Braun products and
          created a mood board for inspiration.
        </Section.Text>

        <Section.Image src="/images/minesweeperCaseStudy/moodboard.jpg" />
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• COLOR PALETTE</Section.Label>
        <Section.Title>DR09 (Dieter Rams color palette 09)</Section.Title>
        <Section.Text>
          For the color palette, I chose{" "}
          <ExternalLink to="https://www.figma.com/community/file/955064100756083091">
            DR09 by Matus Hatala
          </ExternalLink>
          , as it closely matches the style of my favorite Braun products.
        </Section.Text>

        <Section.Image src="/images/minesweeperCaseStudy/colorPalette.jpg" />
      </Section>

      <H1>2. Design</H1>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• CORE FEATURES</Section.Label>
        <Section.Title>The board</Section.Title>
        <Section.Text>
          I wanted to stick to the classic Minesweeper layout while applying the
          UI design principles I learned from Braun:
          <Section.BulletList>
            <li>
              <Section.Text>A super strong visual hierarchy</Section.Text>
            </li>
            <li>
              <Section.Text>A minimalist look and feel</Section.Text>
            </li>
            <li>
              <Section.Text>Soft, rounded corners; no sharp edges</Section.Text>
            </li>
          </Section.BulletList>
        </Section.Text>

        <Section.Image src="/images/minesweeperCaseStudy/gameBoard.jpg" />
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Title>The cells</Section.Title>
        <Section.Text className="mb-[48px]">
          The game cells need to look and feel like they belong together, but
          some should blend in while others stand out. To achieve this, the
          visual hierarchy must be solid.
          <br />
          <br />
          Each cell can be in one of five states.
        </Section.Text>

        <div
          className={classNames(
            "flex flex-col gap-[48px] mb-[96px]",
            "md:mb-[128px] md:gap-[48px]"
          )}
        >
          <div
            className={classNames(
              "flex flex-col gap-[24px] items-start",
              "md:flex-row md:gap-[32px] md:items-center"
            )}
          >
            <img
              className={classNames(
                "w-[120px] h-[120px]  object-contain m-auto border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg",
                "md:w-[140px] md:h-[140px]"
              )}
              src="/images/minesweeperCaseStudy/cellDefault.jpg"
            />

            <div>
              <Section.Text className="font-bold mb-[4px]">
                Default
              </Section.Text>
              <Section.Text>
                It should be easily visible but not draw attention away from the
                other cells.
              </Section.Text>
            </div>
          </div>

          <div
            className={classNames(
              "flex flex-col gap-[24px] items-start",
              "md:flex-row md:gap-[32px] md:items-center"
            )}
          >
            <img
              className={classNames(
                "w-[120px] h-[120px]  object-contain m-auto border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg",
                "md:w-[140px] md:h-[140px]"
              )}
              src="/images/minesweeperCaseStudy/cellEmpty.jpg"
            />

            <div>
              <Section.Text className="font-bold mb-[4px]">Empty</Section.Text>
              <Section.Text>
                It should blend into the background and be visible to the
                player, but not demand much attention.
              </Section.Text>
            </div>
          </div>

          <div
            className={classNames(
              "flex flex-col gap-[24px] items-start",
              "md:flex-row md:gap-[32px] md:items-center"
            )}
          >
            <img
              className={classNames(
                "w-[120px] h-[120px]  object-contain m-auto border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg",
                "md:w-[140px] md:h-[140px]"
              )}
              src="/images/minesweeperCaseStudy/cellTouching.jpg"
            />

            <div>
              <Section.Text className="font-bold mb-[4px]">
                Touching
              </Section.Text>
              <Section.Text>
                It should clearly communicate the number of mines it's touching,
                as this is crucial information for the player. A bold number
                helps achieve this.
              </Section.Text>
            </div>
          </div>

          <div
            className={classNames(
              "flex flex-col gap-[24px] items-start",
              "md:flex-row md:gap-[32px] md:items-center"
            )}
          >
            <img
              className={classNames(
                "w-[120px] h-[120px]  object-contain m-auto border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg",
                "md:w-[140px] md:h-[140px]"
              )}
              src="/images/minesweeperCaseStudy/cellMine.jpg"
            />

            <div>
              <Section.Text className="font-bold mb-[4px]">Mine</Section.Text>
              <Section.Text>
                It needs to grab the player's attention! When a player clicks a
                mine, it's game over, so they must be clearly alerted. A red
                mine on a white background creates strong contrast, making it
                stand out from the other cells.
              </Section.Text>
            </div>
          </div>

          <div
            className={classNames(
              "flex flex-col gap-[24px] items-start",
              "md:flex-row md:gap-[32px] md:items-center"
            )}
          >
            <img
              className={classNames(
                "w-[120px] h-[120px]  object-contain m-auto border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg",
                "md:w-[140px] md:h-[140px]"
              )}
              src="/images/minesweeperCaseStudy/cellFlag.jpg"
            />

            <div>
              <Section.Text className="font-bold mb-[4px]">
                Flagged
              </Section.Text>
              <Section.Text>
                It needs to stand out and clearly indicate it’s been marked,
                without overpowering the touching or mine cells. A white flag
                achieves this balance.
              </Section.Text>
            </div>
          </div>
        </div>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Title>The smiley face</Section.Title>
        <Section.Text>
          Its a classic part of Minesweeper, but I wanted to give it a more
          modern touch. Inspired by Emoji Minesweeper, I decided to use emojis,
          adding a bit more personality to the game.
        </Section.Text>

        <Section.Image src="/images/minesweeperCaseStudy/smileyFace.jpg" />
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• THE LAYOUT</Section.Label>
        <Section.Title>
          Navbar and difficulty settings as background
        </Section.Title>
        <Section.Text>
          The game board is the focal point of the UI and should hold the
          player's attention. Everything else is secondary. I pushed all
          non-gameboard elements to the edges of the screen to ensure they don’t
          distract from the gameplay.
        </Section.Text>

        <Section.Image src="/images/minesweeperCaseStudy/layout.jpg" />
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• NAME</Section.Label>
        <Section.Title>SM-30 (Super Minesweeper 3000)</Section.Title>
        <Section.Text>
          I initially started with{" "}
          <span className="font-bold">Super Minesweeper 3000</span>, inspired by
          the old Super Nintendo games I played as a kid, like{" "}
          <i>Super Mario Bros, Super Metroid, and Super Street Fighter II.</i>
          <br />
          <br />
          But I also wanted it to have the clean, minimal feel of a Braun
          product—something like the <i>TP4, SK 2/2, or KSM 1/11.</i>
          <br />
          <br />
          To capture that, I shortened{" "}
          <span className="font-bold">Super Minesweeper 3000</span> to{" "}
          <span className="font-bold">SM-30</span>, giving it a more
          Braun-inspired, streamlined name.
        </Section.Text>
      </Section>

      <H1>3. Final Designs</H1>

      <div ref={finalDesignsRef} />
      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• PRODUCTION</Section.Label>
        <Section.Title>SM-30</Section.Title>
        <Section.Text>
          Check out the live version below, or follow the link to the production
          site.
        </Section.Text>
        <ViewLiveVersionButton />

        <iframe
          className="border-1 border-[#000D4D73] border-solid rounded-[8px] shadow-lg mx-auto max-w-[800px] w-full mt-[32px]"
          height="800"
          src="https://sm-30.vercel.app/"
          allowFullScreen
        ></iframe>
      </Section>

      <H1>4. Conclusion</H1>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• REVIEW</Section.Label>
        <Section.Title>BraUn super minesweeper</Section.Title>
        <Section.Text>
          I set out to create a Minesweeper game inspired by retro Braun
          products, and I feel I've achieved that. I took the classic
          Minesweeper layout and applied design principles I learned from
          studying Braun products. I crafted a clear visual hierarchy to make
          the key features stand out, kept the design minimal, and used a
          Braun-inspired color palette to give it a retro aesthetic.
        </Section.Text>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• LEARNINGS</Section.Label>
        <Section.Title>What Dieter Rams/BraUn has taught me</Section.Title>
        <Section.Text>
          I’ve learned two fundamental principles from studying Braun products:
          <Section.BulletList>
            <li>
              <Section.Text>
                <span className="font-bold">
                  A good visual hierarchy is super important.
                </span>{" "}
                Using color, contrast, and balanced spacing to ensure core
                features stand out, are easily understood, and are simple to
                use.
              </Section.Text>
            </li>
            <li>
              <Section.Text>
                <span className="font-bold">Keep things minimal.</span> A great
                product doesn't need a ton of features. It's not cluttered or
                trying to do a thousand things. Braun products focus on one core
                feature and implement it as perfectly as possible.
              </Section.Text>
            </li>
          </Section.BulletList>
        </Section.Text>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• NEXT STEPS</Section.Label>
        <Section.Title>What would I add?</Section.Title>
        <Section.Text>
          I feel my Minesweeper game is missing a hook to encourage players to
          return. Adding stats could provide that incentive. I'd track things
          like:
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

      <Section>
        <Section.Label>• TAKEAWAY</Section.Label>
        <Section.Title>Visual hierarchy is a core UI principle</Section.Title>
        <Section.Text>
          A strong visual hierarchy is key to creating a simple and
          user-friendly product. Braun exemplifies this by using color,
          contrast, and balanced spacing to make the core features of their
          products clear and easy to understand.
        </Section.Text>
      </Section>
    </>
  );
};

export default Page;
