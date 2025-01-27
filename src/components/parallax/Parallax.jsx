import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.scss";
import React, { useRef } from 'react';
import "/src/assets/scss/app.scss";


const Parallax = ({type}) => {
    const ref = useRef();

    const{scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"],
    })

    const yBg =useTransform(scrollYProgress, [0,1], ["0%","100%"]);
    const text =useTransform(scrollYProgress, [0,1], ["0%","100%"]);

  return (
    <div className="parallax"
    ref={ref}
    >
        <motion.h1 style={{z : text}}> {type === "skills" ? (
                    <>About <span style={{ color: "rebeccapurple" }}>Me</span>.</>
                ) : (
                    <>My <span style={{ color: "rebeccapurple" }}>Portfolio</span>.</>
                )}</motion.h1>
        <motion.div style={{y : yBg}} className="mountains"></motion.div>
        <motion.div style={{x : yBg}} className="planets"></motion.div>
        <motion.div style={{x : yBg}} className="stars"></motion.div>
        <motion.div style={{x : yBg}} className="stars2"></motion.div>
    </div>
  )
}

export default Parallax



