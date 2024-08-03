import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  useInView,
  useMotionValue,
  useInValue,
  useSpring,
} from "framer-motion";
import Layout from "@/components/Layout";
import profilepic from "../../public/images/profile/developer-pic-4.jpg";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [value, springValue]);
  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Agastya - About</title>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose! "
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full  grid-cols-8 gap-16 sm:gap-8">
            <div className=" col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className=" mb-4 text-lg font-bold uppercase text-dark/75  dark:text-light/75">
                Biography
              </h2>
              <p className=" font-medium">
                Hello, I'm Agastya Gaur, a skilled web developer and creative
                UI/UX designer dedicated to crafting captivating and intuitive
                digital experiences. With a good background in web development,
                I thrive on transforming clients' visions into stunning
                realities.
              </p>

              <p className=" font-medium">
                My work is driven by a deep passion for seamlessly blending
                aesthetics and functionality. I believe in creating not just
                visually appealing designs, but also user-centered solutions
                that leave a lasting impact. I constantly explore fresh and
                innovative approaches to ensure my clients' projects stand out
                from the crowd.
              </p>

              <p className=" font-medium my-4">
                Whether I'm working on a website or other digital product, I
                bring my commitment to design excellence and user-centered
                thinking to every project I work on. I look forward to the
                opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <motion.div
            whileHover={{y:-8}}
     whileTap={{scale:0.9}}
             className=" col-span-3 relative h-max rounded-2xl border-solid border-2 border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 border-b-[12px] border-r-[12px]">
             
              <Image
                src={profilepic}
                alt="agastya"
                className=" w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-height:1200px) 50vw, 33vw "
              />
            </motion.div>
            <div className=" col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className=" flex flex-col items-end justify-center xl:items-center">
                <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={1} />+
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Client
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={6} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Project Compelete
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Year of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
