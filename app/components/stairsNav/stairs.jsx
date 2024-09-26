"use client";

import React from "react";
import { motion } from "framer-motion";
import Menu from "./menu";

const Stairs = () => {
  const height = {
    initial: {
      height: 0,
    },
    enter: (i) => ({
      height: "100%",
      transition: { duration: 0.5, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] },
    }),
    exit: (i) => ({
      height: 0,
      transition: { duration: 0.3, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };

  const background = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 0.5,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
  };

/*   const menuVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
  }; */
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: 0, // Start from y: 0
    },
    visible: {
      opacity: 1,
      y: 1, // Move slightly from y: 0 to y: 1
      transition: { delay: .5, duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="fixed top-20 left-0 z-10 h-full flex  
    transition-all duration-300  w-full "
    >
      {/* cretaing 5 array elements, */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index} //I ADDED !!!!
            variants={height}
            initial="initial"
            animate="enter"
            exit="exit"
            custom={4 - index}
            className=" w-1/5  h-full bg-softBlack"
          ></motion.div>
        );
      })}
      {/* below part is just for background color and not necessary ...... */}
      <motion.div
        variants={background}
        initial="initial"
        animate="enter"
        exit="exit"
        className="w-full h-full absolute bg-softBlack "
      ></motion.div>
    <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="absolute top-0 left-0 w-full h-full z-20"
      >
                <Menu />
      </motion.div>
  
    </motion.div>
  );
};

export default Stairs;
