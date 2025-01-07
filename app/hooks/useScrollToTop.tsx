import { useLayoutEffect, useState } from "react";

const useScrollToTop = (scrollPositon) => {
  const [opacity, setOpacity] = useState(0);

  useLayoutEffect(() => {
    const maxScroll = document.documentElement.scrollHeight * 0.2;
    const scroll = Math.min(Math.max(scrollPositon, 0), maxScroll);

    setOpacity(scroll / maxScroll);
  }, [scrollPositon]);

  return opacity;
};

export default useScrollToTop;
