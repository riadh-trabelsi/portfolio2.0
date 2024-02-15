import { AnimatePresence, motion } from "framer-motion";
import HeroImg from "../assets/riadh7.png";

import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const name = "Riadh Trabelsi";
  return (
    <section className="bg-primary px-5 text-white lg:pl-20 pt-24 pb-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <motion.div
          className="hero-info pb-5 md:pb-0"
          initial={{ opacity: 0, scale: 0.5, x: -300 }} // Start from the left
          animate={{ opacity: 1, scale: 1, x: 0 }} // Move to the center
          transition={{ duration: 2 }}
        >
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am{" "}
            <span className="text-accent">
              <AnimatePresence>
                {name.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </AnimatePresence>
            </span>{" "}
            <br />
            Frontend Developer
          </h1>

          <p className="py-5">
          Highly motivated in web development. Great communication skills, ability to adapt to changes and challenges. Fast learner.
          </p>

          <div className="flex py-5 ">
            <a
              href="https://www.linkedin.com/in/riadh-trabelsi-b45516a1/"
              className="pr-4 inline-block text-accent hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            <a
              href="https://github.com/riadh-trabelsi"
              className="pr-4 inline-block text-accent hover:text-white pl-2"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>

            <a
              href="https://drive.google.com/file/d/12QY4lDjJGzbTmNp5xK4bO8dmB3QNzy2t/view?usp=sharing"
              download
              className="btn"
            >
              <div className="hover:text-white text-indigo-400 pl-3">
                <FaDownload /> CV{" "}
              </div>
            </a>

          
          </div>
        </motion.div>

        <div className="hero-img ">
          <motion.img
            src={HeroImg}
            alt="coding illustration"
            className="lg:w-[80%] rounded-3xl "
            initial={{ opacity: 0, scale: 0.5, x: 500 }} // Start from the right
            animate={{ opacity: 1, scale: 1, x: 0 }} // Move to the center
            transition={{ duration: 2 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
