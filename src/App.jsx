import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Skills from "./components/skills/Skills"
import Parallax from "./components/parallax/Parallax"
import "./components/skills/skills.scss"
import "./assets/scss/app.scss"
import Portfolio from "./components/portfolio/Portfolio"
import ReactImg from "/src/assets/img/react.svg";
import Css from "/src/assets/img/css.svg";
import Html from "/src/assets/img/html.svg";
import Js from "/src/assets/img/js.svg";
import Vite from "/src/assets/img/vite.svg";
import Web from "/src/assets/img/web1.jpg";
import Fashion from "/src/assets/img/fashion.png"
import Contact from "./components/contact/Contact"







const App = () => {

  const cardsData = [
    {
      title: "Virtual Reality",
      date: "September 2024",
      description: "The mockup is for a virtual reality business solutions company called Zone. It features a modern design with 3D illustrations of people using virtual reality headsets, highlighting the company's focus on VR technology.",
      img: Web,
      technologies: [ReactImg, Css, Js, Html, Vite],
    },
    {
      title: "Fashion gift-shop",
      date: "August 2022",
      description: "This is a website layout for an online fashion store. It uses a minimalist design with a focus on large images and high-quality photography.",
      img: Fashion,
      technologies: [ReactImg, Css, Js, Html, Vite],
    },
  ];

  const hardSkills = [
    "JavaScript, TypeScript",
    "React, Node.js",
    "CSS(CSS3), SCSS, HTML(HTML5)",
    "GIT(GitHub)",
    "Figma",
    "English level B2"
  ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem-solving",
    "Adaptability",
    "I have time management skills",
    "I am motivated to improve my skills, constantly studying new technologies in my field of activity",
  ];
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <About />
      </section>
      <section id="About"><Parallax type="skills" /></section>
      <section><Skills hardSkills={hardSkills} softSkills={softSkills} /></section>
      <section id="Portfolio"><Parallax type="contacts" /></section>
      <section id="myworks"><Portfolio cards={cardsData} /></section>
      <section id="Contacts"><Contact /></section>
    </div>
  )
}

export default App
