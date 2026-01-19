import { motion } from "framer-motion";

const GRADIENTS = [
  "linear-gradient(135deg,#232526,#414345)",
  "linear-gradient(140deg,#232526,#1a2980)",
  "linear-gradient(120deg,#000428,#004e92)",
  "linear-gradient(140deg,#373B44,#4286f4)",
];

export default function GradientBlurBg({ theme }) {
  return (
    <div className="gradient-bg">
      {GRADIENTS.map((g, i) => (
        <motion.div
          key={i}
          className="gradient-blob"
          style={{ background: g, opacity: theme === "dark" ? 0.55 : 0.2 }}
          animate={{
            x: [0, 60, 0, -60, 0],
            y: [0, 40, 0, -40, 0],
          }}
          transition={{
            duration: 20 + i * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
