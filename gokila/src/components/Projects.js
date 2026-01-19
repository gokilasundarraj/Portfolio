import { motion } from "framer-motion";
import Game from '../img/logo.png'
import Ecom from '../img/e-com.png'
import AC from '../img/ac.png'
import Anbusuvai from '../img/anbu-suvai.png'
import Resume from '../img/fullLogo.png'
import suvey from '../img/suvey.png'

export default function Projects() {
  const projects = [
     {
      title: "AC Sales & Services Management System",
      img: AC,
      desc: "AC Sale & Service Management System is a MERN Stack based application. Admin can add and manage AC products and services from the admin panel. Users can buy products, book services, and add them to cart. Delivery man and technician receive requests for product delivery and service booking respectively.",
      tech: ["Mern Stack"],
      url: "https://ac-9zpbzimm3-gokilasundarrajs-projects.vercel.app/",
    },
    {
      title: "Survey/Feedback Application",
      img: suvey,
      desc: "This is a Survey Management Application developed using the MERN Stack. Admin can create surveys and add multiple questions from the admin panel. Users can view available surveys and submit answers to the survey questions. This application demonstrates role-based access, dynamic forms, and full-stack integration.",
      tech: ["Mern Stack"],
      url: "https://gokilasundarraj-survey-app.vercel.app/",
    },
     {
      title: "Food delivery App",
      img: Anbusuvai,
      desc: "Anbu Suvai is a modern and responsive food website developed using React.js and Firebase. The application provides a smooth user experience with dynamic components and routing. Firebase is used for backend services such as authentication and data management. This project highlights practical skills in React state management and real-time database integration.",
      tech: ["React.js,Firebase"],
      url: "https://anbu-suvai.vercel.app/",
    },
    {
      title: "Resume-Maker",
      img: Resume,
      desc: "Resume Maker is a dynamic web application built using React.js. It integrates with a REST API to save and retrieve user resume data. Users can create, customize, and preview professional resumes in real time. This project showcases skills in React component design, form handling, and API communication.",
      tech: ["React.js,Rest API"],
      url: "https://resume-maker-7q2fv7rqh-gokilasundarrajs-projects.vercel.app/",
    },
    {
      title: "E-commerce website",
      img: Ecom,
      desc: "A full-featured e-commerce web application with separate Admin and User panels. The Admin panel allows managing products including add, edit, and delete operations. Users can browse products, place orders, and submit purchase requests. The system ensures smooth interaction between users and admin for order management.",
      tech: ["Html,Css,Javascript"],
      url: "https://gokilasundarraj.github.io/Elmatrix/",
    },
      {
      title: "Game website",
      img: Game,
      desc: "Rock Paper Scissors is a simple and interactive web game developed using HTML, CSS, and JavaScript. The game allows users to play against the computer with real-time result display. JavaScript is used for game logic, score calculation, and dynamic UI updates. This project focuses on improving DOM manipulation, event handling, and basic game logic skills.",
      tech: ["Html,CSS,Javascript"],
      url: "https://gokilasundarraj.github.io/Rockpaper/",
    }
    
  ];

  return (
    <motion.div
      className="glassmorph-card projects-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: i * 0.15 }}
            style={{ backgroundImage: `url(${p.img})`, backgroundSize: "120px", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom" ,backgroundColor:"black"}}
          >
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-desc">{p.desc}</p>
            <div className="proj-techs">
              {p.tech.map((t) => (
                <span key={t} className="proj-tech">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
