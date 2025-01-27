import { motion } from "framer-motion"
import React from 'react'

const variants = {
    open:{
        transition:{
            staggerChildren:0.1,
        },
    },
    closed: {
        transition:{
            staggerChildren:-1,
        },
    },
}
const itemVariants = {
    open:{
        y:0,
        opacity:1,
    },
    closed: {
       y:50,
       opacity:0,
    },
}

const Links = ({handleClose}) => {

   const items = ["Homepage", "About", "Portfolio", "Contacts",]
    return (
        <motion.div className="links" variants={variants}>
            {items.map(item =>(
                <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.8}} onClick={handleClose}>
                    {item}
                </motion.a>
            ))}
        </motion.div>
    )
}

export default Links
