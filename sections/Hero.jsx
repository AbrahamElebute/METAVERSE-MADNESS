"use client";
import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant,
  rotate,
} from "../utils/motion";
import styles from "../styles";

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} `}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center">
            <h1 className={styles.heroHeading}>Ma</h1>
            <div className={styles.heroDText} />
            <h1 className={styles.heroHeading}>Ness</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("up", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]">
          <div className="absolute w-full h-[300px] hero-gradient  z-[0] bottom-16" />

          <img
            src="/cover.png"
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] object-cover z-10 relative -translate-y-16"
          />

          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[140px] -mt-[100px] pr-[40px] relative z-10">
              <motion.img
                variants={rotate(10)}
                initial="hidden"
                animate="show"
                src="/stamp.png"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
