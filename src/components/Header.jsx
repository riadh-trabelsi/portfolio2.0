
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };
  
  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
 <a href="#" className="logo font-bold text-accent text-xl">
    <motion.h1
      style={{
        fontFamily: '"Sixtyfour", sans-serif',
        fontOpticalSizing: 'auto',
        fontWeight: 400,
        fontStyle: 'normal',
        fontVariationSettings: '"BLED" 0, "SCAN" 0',
      }}
      variants={textVariants}
      initial="hidden"
      animate="visible"
    >
      Riadh Dev
    </motion.h1>
  </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>

          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="#resume -link" >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/#about" onClick={handleToggle}>About</a>
          </li>
          <li>
            <a href="/#projects" onClick={handleToggle}>Projects</a>
          </li>
          <li>
            <a href="/#contact" onClick={handleToggle}>Contact</a>
          </li>
          <li>
            <a href="/#resume" onClick={handleToggle}>Resume</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
