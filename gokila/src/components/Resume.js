import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      className="glassmorph-card resume-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Resume</h2>
      <p>
        Download my resume to know more about my experience and education.
      </p>
      <p>
        <embed
      src="/resume.pdf"
      width="100%"
      height="800px"
      title="Resume PDF"
      style={{ border: "none" }}
    />
      </p>

      <a
        href="/resume.pdf"
        download="Gokilasundarraj_Resume.pdf"
        className="btn btn-grad"
        style={{ marginTop: 20 }}
      >
        Download Resume
      </a>
    </motion.div>
  );
}
