import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      // repeat: 10,
      // repeatType: "reverse",
    }
  }
}

const Home = () => {
  return (
    <motion.div 
      animate={{ opacity: 1, x: 0 }} 
      initial={{ opacity: 0, x: '100vw' }} 
      exit={{ opacity: 0, x: '-100vw' }} 
      transition={{ delay: 0.5, duration: 1.5 }}
      className="home container"
    >
      <motion.h2>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader/>
    </motion.div>
  )
}

export default Home;