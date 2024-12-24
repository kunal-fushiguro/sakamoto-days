import ReactLenis from "lenis/react";
import Hero from "./min/Hero";
import Nav from "./min/Nav";
import Volumes from "./min/Volume";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.5,
          smoothWheel: true,
          //   smoothTouch: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        }}
      >
        <Nav />
        <Hero />
        <Volumes />
      </ReactLenis>
    </div>
  );
};

export default SmoothScrollHero;
