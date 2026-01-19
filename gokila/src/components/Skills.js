import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "MERN(mongo DB,Express,React.js,Node.js)",level:98},
    { name: "HTML/CSS", level: 100 },
    { name: "JavaScript", level: 95 },
    { name: "REST-APT", level: 85 },
    { name: "Firebase", level: 75 }
  ];

  return (
    <motion.div
      className="glassmorph-card skills-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Skills</h2>

      <div className="skills-list">
        {skills.map((sk, i) => (
          <motion.div
            className="skill-bar"
            key={sk.name}
            initial={{ width: 0 }}
            whileInView={{ width: `${sk.level}%` }}
            transition={{ delay: i * 0.15, duration: 1 }}
          >
            <span className="skill-label">{sk.name}</span>
            <span className="skill-level">{sk.level}%</span>

            <div className="skill-track">
              <motion.div
                className="skill-fill"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
