import { motion } from "framer-motion";
import Img from '../img/profile.jpg'

const sectionVariants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

export default function About() {
  return (
    <motion.div
      className="glassmorph-card about-card"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="section-title">About Me</h2>

     <div className="full">
       <p className="about-text">
      I’m Gokilasundarraj, a MERN Stack developer passionate about web development.
I create responsive user interfaces using React.js and build backend APIs with Node.js and Express.js.
I have developed multiple personal projects to understand real-world application flow and functionality.
I continuously improve my skills by building projects and focusing on clean, efficient code.
      </p>
      <p>
        <img src={Img} alt=""/>
      </p>
     </div>
    </motion.div>
  );
}
