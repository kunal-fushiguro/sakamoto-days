import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 text-white backdrop-blur-sm"
    >
      {/* <span className="text-3xl font-bold mix-blend-difference">
        Sakamoto-Days
      </span> */}
      <button
        onClick={() => {
          document.getElementById("volumes")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
      >
        Explore Volumes
      </button>
    </motion.nav>
  );
};

export default Nav;
