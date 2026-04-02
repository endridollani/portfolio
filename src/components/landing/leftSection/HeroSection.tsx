import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const HeroSection: React.FC = () => (
  <section className="flex flex-col gap-5 text-pretty" id="hero">
    <div className="flex flex-col gap-3 text-pretty">
      <motion.h1
        className="text-4xl font-semibold tracking-tight text-foreground lg:text-[4.1rem] lg:leading-[0.96]"
        custom={0}
        initial="hidden"
        variants={fadeUp}
        viewport={{ once: true }}
        whileInView="visible"
      >
        Endri Dollani
      </motion.h1>

      <motion.div
        className="text-pretty"
        custom={1}
        initial="hidden"
        variants={fadeUp}
        viewport={{ once: true }}
        whileInView="visible"
      >
        <h2 className="text-[1.55rem] font-medium tracking-tight text-foreground/92 lg:text-[1.95rem]">
          Full-Stack Engineer
        </h2>
      </motion.div>
    </div>

    <motion.p
      className="max-w-lg text-base leading-7 text-muted-foreground lg:text-[1rem] lg:leading-8"
      custom={2}
      initial="hidden"
      variants={fadeUp}
      viewport={{ once: true }}
      whileInView="visible"
    >
      Shipping reliable products with a focus on maintainability, performance, and delivery.
    </motion.p>
  </section>
);
