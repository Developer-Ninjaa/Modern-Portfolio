import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Hi,
      </motion.h2>
      <a className="typing-svg">
        <img
          src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=900&size=50&duration=4200&pause=958&color=15BAFF&width=900&height=79&lines=I'm+Jaskaran+Singh.;A+Full+Stack+Developer.;Developer+Ninjaa."
          alt="Typing SVG"
        />
      </a>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Modern Portfolio. <br className="sm:hidden md:block" />
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        Full Stack Development Engineer | Problem Solver | Scalable Web
        Engineer. <br /> Bridging Frontend Elegance with Backend Power. From UI
        to API—Crafting Full Stack Solutions <br /> with Code, Coffee, and Curiosity.
      </motion.p>
    </div>
  );
};

export default HeroText;
