import { useState, useRef, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { SoundContext } from "./context/SoundContext";
import { navLinks } from "./data/navLinks";

import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import ContactForm from "./components/ContactForm";

import ParticlesBg from "./components/ParticlesBg";
import GradientBlurBg from "./components/GradientBlurBg";
import Loader from "./components/Loader";

import "./App.css";
import Footer from "./components/Footer";

export default function App() {
  const [loader,setloader] = useState(true)
  const [theme] = useState("dark");
  const [activeSec, setActiveSec] = useState("home");

  const clickAudioRef = useRef(null);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setloader(false)
    }, 500)
    return ()=> clearTimeout(timer)
  },[])


  if (!clickAudioRef.current) {
    clickAudioRef.current = new Audio("/sounds/click.mp3");
    clickAudioRef.current.volume = 0.5;
  }

  const refs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    resume: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (sec) => {
    setActiveSec(sec);
    refs[sec]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const playSound = () => {
    if (!clickAudioRef.current) return;
    clickAudioRef.current.currentTime = 0;
    clickAudioRef.current.play().catch(() => {});
  };

  return (
    <>
      {loader && <Loader/>}
    
    <ThemeContext.Provider value={{ theme }}>
      <SoundContext.Provider value={{ playSound }}>
        <div className={`site-root ${theme}`}>
          <GradientBlurBg theme={theme} />
          <ParticlesBg theme={theme} />

          <NavBar
            navLinks={navLinks}
            activeSec={activeSec}
            scrollToSection={scrollToSection}
          />

          <main>
            <section ref={refs.home} id="home">
              <Home scrollToSection={scrollToSection} />
            </section>
            <section ref={refs.about} id="about">
              <About />
            </section>
            <section ref={refs.projects} id="projects">
              <Projects />
            </section>
            <section ref={refs.skills} id="skills">
              <Skills />
            </section>
            <section ref={refs.resume} id="resume">
              <Resume />
            </section>
            <section ref={refs.contact} id="contact">
              <ContactForm />
            </section>
          </main>
        </div>
      </SoundContext.Provider>
    </ThemeContext.Provider>
    <Footer/>
    </>
  );
}
