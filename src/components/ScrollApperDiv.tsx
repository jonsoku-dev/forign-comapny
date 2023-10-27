"use client";

import { HTMLMotionProps, motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ScrollAppearDivProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  className?: string;
}

const ScrollAppearDiv: React.FC<ScrollAppearDivProps> = ({
  children,
  className,
  ...restProps
}) => {
  const controls = useAnimation();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      // Find the previous sibling element (which should be a div)
      const target = ref.current.previousElementSibling as HTMLElement;

      if (!target) return;

      const topPosition = target.offsetTop;
      const triggerPosition = topPosition + target.offsetHeight * -1.5; // This is where 70% of the target div is scrolled into view

      if (window.scrollY > triggerPosition && !scrolled) {
        setScrolled(true);
        controls.start({ opacity: 1, y: 0 });
      } else if (window.scrollY <= triggerPosition && scrolled) {
        setScrolled(false);
        // controls.start({ opacity: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, controls, ref]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: -40 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className={className}
      {...restProps}
    >
      {children}
    </motion.section>
  );
};

export default ScrollAppearDiv;
