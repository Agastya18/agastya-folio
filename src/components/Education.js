import React, { useRef } from "react";

import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";
const Detail = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className=" my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80% ]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}&nbsp;</h3>
        <span className=" capitalize font-bold text-dark/75 dark:text-light/75 xs:text-sm ">
          {time} | {place}
        </span>
        <p className=" font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className=" font-bold text-8xl mb-32  w-full text-center  md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />
        <ul className=" w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <Detail
            type="Schooling (10th 12th)"
            time="2017-2020"
            place="Shri Guru Ram Rai Public School, Haridwar"
            info="Got 86% in class 10th and 89.9% in class 12th board exams and also learn basics of programming"
          />
          {/* <Detail
            type="Online Coursework"
            time="2016-2023"
            place=" Coursera And Udamy"
            info=" Completed coursework in advanced topics such as Blockchain and Machine Learning"
          /> */}
          <Detail
            type="Bachelor Of Science In Computer Science"
            time="2020-2024"
            place="Graphic Era Hill University"
            info="Learn about the tech, made various projects and done competative programming"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
