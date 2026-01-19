import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SoundContext } from "../context/SoundContext";

export default function NavBar({ navLinks, activeSec, scrollToSection }) {
  const [open, setOpen] = useState(false);
  const { playSound } = useContext(SoundContext);

  const handleNavClick = (to) => {
    playSound();
    scrollToSection(to);
    setOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <div onClick={() => handleNavClick("home")}>
          <motion.span className="logo-text gradient-text">
              GOKILASUNDARRAJ
          </motion.span>
        </div>

        <div className="navlinks-desktop">
          {navLinks.map((l) => (
            <button
              key={l.to}
              className={`navlink ${activeSec === l.to ? "active" : ""}`}
              onClick={() => handleNavClick(l.to)}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button className="hamburger" onClick={() => setOpen(true)}>
          <span />
          <span />
          <span />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              className="mobile-nav-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <button className="close-btn" onClick={() => setOpen(false)}>
                ✕
              </button>
              {navLinks.map((l) => (
                <button
                  key={l.to}
                  className="mobile-navlink"
                  onClick={() => handleNavClick(l.to)}
                >
                  {l.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
