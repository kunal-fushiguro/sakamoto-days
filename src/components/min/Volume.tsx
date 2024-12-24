import { motion } from "framer-motion";

const Volumes = () => {
  return (
    <section id="volumes" className="mx-auto max-w-7xl px-4 py-48 text-white">
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Sakamoto-Days Volumes
      </motion.h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <VolumeItem number={1} title="The Legendary Hitman" image="/s1.jpg" />
        <VolumeItem number={2} title="Hard-Boiled" image="/s2.jpg" />
        <VolumeItem number={3} title="Heisuke Mashimo" image="/s3.jpg" />
        <VolumeItem number={4} title="Quiet on the Train" image="/s4.jpg" />
        <VolumeItem number={5} title="Death Row Prisoner" image="/s5.jpg" />
        <VolumeItem number={6} title="Bad Luck" image="/s6.jpg" />
        <VolumeItem number={7} title="I Got This" image="/s7.jpg" />
        <VolumeItem number={8} title="Exam, Stage Three" image="/s8.jpg" />
        <VolumeItem number={9} title="Hard Mode" image="/s9.jpg" />
        <VolumeItem number={10} title="Reunion" image="/s10.jpg" />
        <VolumeItem number={11} title="One Blow" image="/s11.jpg" />
        <VolumeItem number={12} title="Roll Film" image="/s12.jpg" />
        <VolumeItem number={13} title="Reminiscence" image="/s13.jpg" />
        <VolumeItem number={14} title="Bizarre Data" image="/s14.jpg" />
        <VolumeItem
          number={15}
          title="The Assassin Exhibit of the Century"
          image="/s15.jpg"
        />
        <VolumeItem number={16} title="Encounter" image="/s16.jpg" />
        <VolumeItem number={17} title="Entry" image="/s17.jpg" />
        <VolumeItem number={18} title="Melee" image="/s18.jpg" />
        <VolumeItem number={19} title="Museum Closed" image="/s19.jpg" />
      </div>
    </section>
  );
};

const VolumeItem = ({
  number,
  title,
  image,
}: {
  number: number;
  title: string;
  image: string;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="group relative overflow-hidden rounded-lg bg-zinc-800 transition-all hover:bg-zinc-700"
    >
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={image}
          alt={`Volume ${number} cover`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="relative z-10 p-4">
        <p className="mb-1 text-2xl font-bold text-zinc-400">Vol. {number}</p>
        <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 transition-opacity group-hover:opacity-20"
        initial={false}
        whileHover={{ opacity: 0.2 }}
      />
    </motion.div>
  );
};

export default Volumes;
