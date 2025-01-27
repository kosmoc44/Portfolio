import React, { useState } from 'react'
import "./about.scss"
import { motion } from "framer-motion";
import "/src/assets/scss/fonts.scss"



const textVariants = {
    initial:{
        x: -500,
        opacity: 0,

    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollBtn:{
        opacity:0,
        y:50,
        transition:{
            duration:1.5,
            repeat:Infinity,
        }
        
    },
};
const sliderVariants = {
    initial:{
        x:0,

    },
    animate:{
        x:"-220%",
        transition:{
            duration:20,
            repeaType: "mirror",
            repeat: Infinity,
            opacity:0,
        },
    },
};
const buttonVariants = {
    initial: {
        opacity: 1,
        x: -500,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        },
    },
};
const buttonVariant = {
    initial: {
        opacity: 1,
        x: -500,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};



const About = () => {

        const [buttonText, setButtonText] = useState("My phone Number");

        const handleClick = () => {
            setButtonText(prevText => 
                prevText === "My phone Number" ? "+998909077030" : "My phone Number"
            )
        }


    return (
        <div className="about">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} 
                initial="initial"
                animate="animate"
                >
                    <motion.h1 variants={textVariants}><span>Hello!</span> My name is Asadbek Akromjonov.</motion.h1>
                    <motion.h2 variants={textVariants}>Front end <span>Developer</span>.</motion.h2>
                    <motion.div className="aboutBtn" variants={buttonVariants} >
                        <motion.a  
                        className="aboutBtn-work" 
                        variants={buttonVariants}
                        href="#myworks"
                        >
                            My works
                        </motion.a>
                        <motion.button 
                        className="aboutBtn-contact" 
                        variants={buttonVariant}
                        onClick={handleClick}
                        >
                            {buttonText}
                        </motion.button>
                    </motion.div>
                    <motion.img className="scrollbtn" variants={textVariants} animate="scrollBtn" src="/src/assets/img/daun.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slideTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                        <h1>Front End Developer</h1>
                    </motion.div>
            <div className="imgAbout">
                <img src="/src/assets/img/about.jpg" alt="" />
            </div>
        </div>
    )
}

export default About
