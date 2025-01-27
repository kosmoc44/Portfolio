import "./sidebar.scss"
import Links from "./Links/Links";
import Btn from "./Button/Btn";
import { useState } from "react";
import { motion } from "framer-motion";


const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
      opacity: 0,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    }
  }
}

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  };

  const handleClose = () => {
    setOpen(false)
  };

  return (
    <motion.div
      className="sidebar"
      animate={open ? "open" : "closed"}
    >
      <motion.div className="bg" variants={variants}>
        <Links handleClose={handleClose}/>
      </motion.div>
      <Btn setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
