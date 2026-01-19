import { motion } from "framer-motion";
import { useRef } from "react";
import ProfileImg from "../img/db.jpg";

const sectionVariants = {
  initial: { opacity: 0, y: 70 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, type: "spring" },
  },
};

export default function Home({ scrollToSection }) {
  const audioRef = useRef(null);


  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      className="glassmorph-card hero-card"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
    >
    
      <audio ref={audioRef} src="/sounds/bg.mp3" preload="auto" />

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <motion.img
          src={ProfileImg}
          alt="Gokilasundarraj"
           onHoverStart={playSound}
           onHoverEnd={stopSound}
        />
      </motion.div>

      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          Hi, I&apos;m <span className="name">Gokilasundarraj</span>
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          MERN Stack Developer
        </motion.h2>

        <div className="hero-btns">
          <button
            className="btn btn-grad"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </button>

          <a
            href="/resume.pdf"
            className="btn btn-glass"
            download="Gokilasundarraj_Resume.pdf"
            style={{textDecoration:"none"}}
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
}
