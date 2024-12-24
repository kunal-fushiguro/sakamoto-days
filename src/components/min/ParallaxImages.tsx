import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const ParallaxImages = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity }}
      className="absolute inset-0 overflow-hidden "
    >
      <div className="relative h-[300vh]">
        <ParallaxImg
          src="/s1.jpg"
          alt="Sakamoto in action"
          start={-200}
          end={200}
          className="absolute left-[5%] top-[10%] w-1/4"
        />
        <ParallaxImg
          src="/s2.jpg"
          alt="Sakamoto's intense gaze"
          start={200}
          end={-250}
          className="absolute left-[40%] top-[25%] w-1/3"
        />
        <ParallaxImg
          src="/s3.jpg"
          alt="Sakamoto's silhouette"
          start={-200}
          end={200}
          className="absolute right-[10%] top-[45%] w-1/4"
        />
        <ParallaxImg
          src="/s4.jpg"
          alt="Sakamoto's dramatic pose"
          start={0}
          end={-500}
          className="absolute left-[20%] top-[70%] w-2/5"
        />
      </div>
    </motion.div>
  );
};

const ParallaxImg = ({
  className,
  alt,
  src,
  start,
  end,
}: {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  return (
    <motion.div
      ref={ref}
      className={`${className} overflow-hidden rounded-lg shadow-lg w-[15rem] md:w-[30rem]`}
      style={{ y, opacity }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="h-full object-cover w-full"
        style={{ scale }}
      />
    </motion.div>
  );
};

export default ParallaxImages;
