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
          With this project I wanted to do two things, I wanted to have a bit of
          fun and to understand why I love retro BraUn products so much. I
          decided to take a simple game, code it all from scratch and design it
          to have a retro BraUn look and feel.
        </Section.Text>

        <Section.JumpToFinalDesignsButton ref={finalDesignsRef} />

        <Section.Image src="/images/minesweeperCaseStudy/minesweeper.gif" />
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
              <ExternalLink>Minesweeper online</ExternalLink> - Sticks to the
              classic look and feel, focused on stats, leader boards and
              competition
            </Section.Text>
          </div>

          <div
            className={classNames(
              "flex-col-reverse flex gap-[20px] items-center",
              "md:flex-row md:gap-[48px]"
            )}
          >
            <Section.Text className="flex-1">
              <ExternalLink>Google minesweeper</ExternalLink> - Bit of a basic
              design but has really good win/lose animations
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
              <ExternalLink>Emoji minesweeper</ExternalLink> - Great design,
              it's fun, it's vibrant and all designed using emojis
            </Section.Text>
          </div>
        </div>
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

        <Section.Image src="/images/minesweeperCaseStudy/moodboard.jpg" />
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• COLOR PALETTE</Section.Label>
        <Section.Title>DR09 (Dieter Rams color palette 09)</Section.Title>
        <Section.Text>
          For a color palette I went with{" "}
          <ExternalLink>DR09 by Matus Hatala</ExternalLink>. This matches the
          style of my favourite BraUn products.
        </Section.Text>

        <Section.Image src="/images/minesweeperCaseStudy/colorPalette.jpg" />
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

        <Section.Image src="/images/minesweeperCaseStudy/gameBoard.jpg" />
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Title>The cells</Section.Title>
        <Section.Text className="mb-[48px]">
          The game cells need to look and feel like they belong together but
          some need to blend in and others need to pop. To do that the visual
          hierarchy has to be solid.
          <br />
          <br />
          Each cell can be in 1 of 5 states
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
                It needs to be easily visible but not take attention away from
                the other cells.
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
                It should blend into the background, the player should know it's
                there but not take up much attention.
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
                It needs to clearly communicate the number of mines it is
                touching. This is important as it's giving the player key
                information. A bold number indicates this.
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
                It needs to grab the players attention! If a player clicks a
                mine it's game over and the player needs to know this. A red
                mine on a white background contrasts against all the other cells
                and jumps out at the player.
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
                This needs to stand out and clearly communicate it has been
                marked but not overpower the touching and mine cells. A white
                flag does this
              </Section.Text>
            </div>
          </div>
        </div>
      </Section>

      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Title>The smiley face</Section.Title>
        <Section.Text>
          Its a classic part of minesweeper but I wanted to add a bit more of a
          modern feel to it. Inspired by Emoji Minesweeper I decided to use
          emojis for this as it gives the game a little bit more personality
        </Section.Text>

        <Section.Image src="/images/minesweeperCaseStudy/smileyFace.jpg" />
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

        <Section.Image src="/images/minesweeperCaseStudy/layout.jpg" />
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

      <H1>3. Final Designs</H1>

      <div ref={finalDesignsRef} />
      <Section className="mb-[32px] md:mb-[48px]">
        <Section.Label>• PRODUCTION</Section.Label>
        <Section.Title>SM-30</Section.Title>
        <Section.Text>
          Check out the live version below or follow the link to the production
          site
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

      <Section>
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
