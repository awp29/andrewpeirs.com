import React, { RefObject, useLayoutEffect, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import classNames from "classnames";
import useMousePosition from "../hooks/useMousePosition";
import Image from "next/image";
import { motion } from "framer-motion";

type Position = {
  x: number | null;
  y: number | null;
};

const FloatingProfileImage = React.forwardRef(
  (_, ref: RefObject<HTMLDivElement>) => {
    const mousePosition = useMousePosition();
    const scrollPosition = useScrollPosition();

    const [showProfile, setShowProfile] = useState(false);
    const [actualProfilePostion, setActualProfilePositon] = useState<Position>({
      x: null,
      y: null,
    });

    useLayoutEffect(() => {
      if (ref && ref.current) {
        const y = mousePosition.y;
        const bounds = ref.current.getBoundingClientRect();

        if (y && y > bounds.top && y < bounds.bottom) {
          setShowProfile(true);
          setActualProfilePositon({
            x: mousePosition.x,
            y: y + scrollPosition,
          });

          return;
        }

        setShowProfile(false);
      }
    }, [scrollPosition, mousePosition.y, mousePosition.x, ref]);

    return (
      <motion.div
        style={{
          left: `${actualProfilePostion.x}px`,
          top: `${actualProfilePostion.y}px`,
        }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0 },
          visible: {
            scale: showProfile ? 1 : 0,
            transition: { ease: ["easeIn", "easeOut"], duration: 0.15 },
          },
        }}
        className="absolute z-10 w-[128px] h-[128px] origin-center translate-x-[-50%] translate-y-[-50%] cursor-none select-none"
      >
        <Image
          className={classNames(
            "max-h-[128px] rounded-full object-cover pointer-events-none"
          )}
          src="/images/me.jpg"
          alt="Profile image of the portfolio author Andrew Peirs"
          width={128}
          height={128}
        />
      </motion.div>
    );
  }
);

FloatingProfileImage.displayName = "Profile";

export default FloatingProfileImage;
