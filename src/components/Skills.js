import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const Skill = ({ nam, x, y }) => {
  return (
    <motion.div
      className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute   dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold     "

      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {nam}
    </motion.div>
  );
};
const Skills = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(()=>{
    console.log(isMobile)
  },[isMobile])

  
  return (
    <>
      <h2 className=" font-bold text-center mt-60 text-8xl w-full mb-5 md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="  w-full h-screen   relative flex items-center justify-center rounded-full  bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularlightLg lg:dark:bg-circularDarkLg
      md:bg-circularlightMd md:dark:bg-circularDarkMd
      sm:bg-circularlightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="  flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-sm xs:p-2 "
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        <Skill nam="JAVASCRIPT" x= {isMobile ? "0vh" : "-54vh"} y={isMobile ? "-20vh" : "0vh"}/>
        <Skill nam="REACT" x={isMobile ? "0vh" : "0vh"} y={isMobile ? "10vh" : "24vh"} />
        
        <Skill nam="NEXT JS" x={isMobile ? "-9vh" : "0vh"} y={isMobile ? "0vh" : "-39vh"} />
        <Skill nam="NODE JS" x={isMobile ? "9vh" : "45vh"} y={isMobile ? "0vh" : "-38vh"} />
        <Skill nam="Postgresql" x={isMobile ? "0vh" : "-40vh"} y={isMobile ? "-10vh" : "40vh"} />
        <Skill nam="Graphql" x={isMobile ? "-20vh" : "40vh"} y={isMobile ? "0vh" : "40vh"} />
        <Skill nam="MOONGO DB" x={isMobile ? "0vh" : "60vh"} y={isMobile ? "20vh" : "0vh"} />
        <Skill nam="SOLIDITY" x={isMobile ? "19vh" : "-50vh"} y={isMobile ? "0vh" : "-27vh"} />
      </div>
    </>
  );
};

export default Skills;
