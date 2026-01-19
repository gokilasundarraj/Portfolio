import { motion } from "framer-motion";

export default function ParticlesBg({ theme }) {
  return (
    <div className="particles-bg">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          style={{
            background: theme === "dark" ? "#fff" : "#000",
            width: 2 + Math.random() * 3,
            height: 2 + Math.random() * 3,
            opacity: Math.random() * 0.5,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, window.innerHeight],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
