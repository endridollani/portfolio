import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.5,
      ease: 'easeOut',
    },
  }),
};

export const HeroSection: React.FC = () => (
  <section className="flex flex-col gap-4 text-pretty" id="hero">
    <div className="flex flex-col gap-2 flex-wrap text-pretty">
      <motion.a
        className="text-4xl lg:text-5xl font-bold cursor-pointer"
        custom={0}
        href="#introduction"
        initial="hidden"
        variants={fadeUp}
        viewport={{ once: true }}
        whileInView="visible"
      >
        Endri Dollani
      </motion.a>

      <motion.div
        className="flex flex-row gap-4 items-center align-middle flex-wrap text-pretty"
        custom={1}
        initial="hidden"
        variants={fadeUp}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <h2 className="text-sm lg:text-[1.25rem] font-normal text-foreground">
          Full-Stack Engineer
        </h2>
        <h2 className="text-sm lg:text-[1.25rem] font-normal text-muted-foreground">{` / `}</h2>
        <h2
          className="text-sm lg:text-[1.25rem] font-normal text-transparent bg-clip-text 
            bg-gradient-to-r from-yellow-200 via-primary to-yellow-200 animate-gradient-pulse"
        >
          Mobile & Web
        </h2>
      </motion.div>
    </div>

    <motion.div
      custom={2}
      initial="hidden"
      variants={fadeUp}
      viewport={{ once: true }}
      whileInView="visible"
    >
      <p className="text-xs lg:text-sm text-muted-foreground text-pretty">
        Crafting apps that work beautifully, inside and out.
      </p>
    </motion.div>
  </section>
);
