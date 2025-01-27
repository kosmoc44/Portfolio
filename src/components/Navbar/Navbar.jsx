import '../Navbar/navbar.scss'
import React from 'react'
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar"

const Navbar = () => {
  
  return (
    <div className="navbar">
      {/* sidebar */}
      <motion.div 
       inital= {{x: -300, opacity: 0}}
       animate= {{x: -300, opacity: 0}}
       transition={{duration:0.5}}
      >
      </motion.div>
      <Sidebar />
      <div className="wrapper">
        <motion.span 
        initial={{opacity:0, scale:0.5}}
         animate={{opacity:1  , scale:1.5}}
          transition={{duration:0.7}}
          >
            <i className='bx bx-code-block'></i>
            </motion.span>
        <div className="social">
            <a href="https://www.facebook.com/?locale=ru_RU" target="_blank">
            <i className='bx bxl-facebook-square'></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
            <i className='bx bxl-instagram' ></i>
            </a>
            <a href="https://t.me/Cantleavewithoutit" target="_blank" rel="Cantleavewithoutit">
            <i className='bx bxl-telegram' ></i>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
