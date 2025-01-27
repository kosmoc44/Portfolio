import { motion, useInView } from "framer-motion";
import React, { useRef } from 'react';

const sliderVariants = {
    initial: {
        x: 0,
        opacity: 1,
    },
    animate: {
        x: "-320%",
        transition: {
            duration: 26,
            repeatType: "mirror",
            repeat: Infinity,
            opacity: 0,
        },
    },
};

const skillVariants = {
    initial: {
        y: 500,
        opacity: 0,
        
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
    exit: {
        y: 500,
        opacity: 0,
        transition: {
            duration: 0.8,
        },
    },
};

const Skills = ({ hardSkills, softSkills }) => {
    const ref = useRef();
    const isInView = useInView(ref);

    return (
        <div className="skills">
            <motion.div
                ref={ref}
                className="wrapper"
                initial="initial"
                animate={isInView ? "animate" : "exit"}
                variants={skillVariants}
            >
                <div className="hard-skill both">
                    <h1 className="skill-title">Hard <span>skills</span></h1>
                    {hardSkills.map((skill, index) => (
                        <motion.div variants={skillVariants} className="skill-card" key={index}>
                            <motion.div variants={skillVariants} className="card">
                                <p>{skill}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
                <div className="soft-skill both">
                    <h1 className="skill-title">Soft <span>skills</span></h1>
                    {softSkills.map((skill, index) => (
                        <motion.div variants={skillVariants} className="skill-card" key={index}>
                            <motion.div variants={skillVariants} className="card">
                                <p>{skill}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <motion.div className="slideSkill" variants={sliderVariants} initial="initial" animate="animate">
                <h1>Hard-skills Soft-skills  Hard-skills Soft-skills</h1>
            </motion.div>
        </div>
    );
}

export default Skills;
