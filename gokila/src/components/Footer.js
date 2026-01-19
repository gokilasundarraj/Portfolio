import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import img from '../img/db.jpg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
    
        <div className="footer-brand">
            <p><img src={img} alt="img" style={{height:"100px",width:"100px", borderRadius:"50%"}}/></p>
          <h3>Gokilasundarraj</h3>
          <p>MERN Stack Developer</p>
        </div>

        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-socials">
          <a href="https://github.com/gokilasundarraj" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/gokila-sundarraj-8175692a6/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:gokilas333@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Gokilasundarraj. All rights reserved.
      </div>
    </footer>
  );
}
