import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CenterImage from "./CenterImage";
import ParallaxImages from "./ParallaxImages";

const SECTION_HEIGHT = 2000;

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <motion.div
      ref={containerRef}
      //   style={{ opacity }}
      className="relative w-full"
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)`, opacity }}
    >
      <CenterImage SECTION_HEIGHT={SECTION_HEIGHT} />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </motion.div>
  );
};

export default Hero;
