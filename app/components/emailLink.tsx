import {
  autoUpdate,
  FloatingArrow,
  arrow,
  offset,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  shift,
} from "@floating-ui/react";
import { useEffect, useRef, useState } from "react";

const EmailLink = () => {
  const [clicked, setClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const arrowRef = useRef(null);

  useEffect(() => {
    if (clicked) {
      const timeoutID = setTimeout(() => {
        setClicked(false);
      }, 1000);

      return () => {
        clearTimeout(timeoutID);
      };
    }
  }, [clicked]);

  const { refs, floatingStyles, context } = useFloating({
    placement: "bottom",
    strategy: "absolute",
    whileElementsMounted: autoUpdate,
    onOpenChange: setIsOpen,
    middleware: [
      offset(10),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const hover = useHover(context);
  const focus = useFocus(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
  ]);

  return (
    <>
      <button
        className="group relative overflow-clip text-[#4C64D9] after:content-[''] border-b-2 border-[#4C64D9] border-dashed"
        onClick={() => {
          setClicked(true);
          navigator.clipboard.writeText("peirs.andrew@gmail.com");
        }}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <span className="block relative transition-transform group-hover:translate-y-[calc(-100%+-0.25rem)]">
          Email
        </span>
        <span className="block transition-transform group-hover:translate-y-[calc(-100%+-0.25rem)] absolute top-[calc(100%+0.25rem)]">
          Email
        </span>
      </button>

      {isOpen && (
        <div
          className="bg-black text-white p-[16px] font-mono"
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          <FloatingArrow ref={arrowRef} context={context} />
          {!clicked ? "Copy Email" : "👍"}
        </div>
      )}
    </>
  );
};

export default EmailLink;
