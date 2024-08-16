import React from "react";
import { motion } from "framer-motion";
import image from "../assets/Vector 1.png";

const TextReveal = () => {



  const imageVariants = {
    hidden: { opacity: 0, scale: 1.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeInOut", delay: 1.4 },
    },
  };


  const textVariants = {
    hidden: { opacity: 1 }, 
    reveal: {
      clipPath: "inset(0 0 0 0%)",
      transition: { duration: 1, ease: "easeInOut" },
    },
    disappear: {
      opacity: 0,
      transition: { duration: 1, ease: "easeInOut", delay: 1.5 }, 
    },
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
     
      <motion.img
        src={image}
        alt="Background"
        className="absolute w-[41%] h-[56%] object-cover
        
         z-0"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      />

     
      <motion.h1
        className="text-[300px] font-bold bg-clip-text text-transparent z-10"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial="hidden"
        animate={["reveal", "disappear"]}
        variants={textVariants}
      >
        Robot
      </motion.h1>
    </div>
  );
};

export default TextReveal;
