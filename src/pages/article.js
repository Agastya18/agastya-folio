import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import art1 from "../../public/images/articles/blockchain.png";
import art2 from "../../public/images/articles/devops.png";
import { easeInOut, motion, useMotionValue } from "framer-motion";
import art3 from "../../public/images/articles/hardhat.png";
import art4 from "../../public/images/articles/next.png";
import art5 from "../../public/images/articles/reac.png";
import deploy from '../../public/images/articles/deploy.png';
import TransitionEffect from "@/components/TransitionEffect";
const FramerImage = motion(Image);
const MovingImg = ({ img, title, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function MouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  const imgRef = useRef(null);
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={MouseLeave}
    >
      <h2 className=" capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};
const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: easeInOut } }}
      className=" relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light  sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className=" text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};
const FeatureArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className=" relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className=" w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className=" w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className=" capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className=" text-sm  mb-2">{summary}</p>
      <span className=" text-primary font-semibold dark:text -primaryDark">
        {time}
      </span>
    </li>
  );
};
const article = () => {
  return (
    <>
      <Head>
        <title>Agastya - Article</title>
      </Head>
      <TransitionEffect/>
      <main className=" w-full mb-16 flex  flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Word can change the world"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className=" grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">

          <FeatureArticle
              title="Deploying a MERN Stack Application on a Unified Server"
              time="3 min read"
              summary="This guide will walk you through deploying your MERN stack application with both frontend and backend served on the same port (Free on render)."
              link="https://medium.com/@agastyagaur/deploying-a-mern-stack-application-on-a-unified-server-a-step-by-step-guide-to-cost-free-hosting-a9c2eb0e23a1"
              img={deploy}
            />
            
            <FeatureArticle
              title="Blockchain Development for Beginners: A Comprehensive Guide"
              time="3 min read"
              summary="
              Blockchain technology has gained significant attention in recent years due to its potential to revolutionize various industries, from finance to supply chain management. As a decentralized and immutable ledger, blockchain offers transparency, security, and trust in digital transactions.
                 "
              link="https://agastyagaur.hashnode.dev/blockchain-development-for-beginners-a-comprehensive-guide"
              img={art1}
            />
            <FeatureArticle
              title="Embracing DevOps: Accelerating Software Delivery"
              time="3 min read"
              summary="
              DevOps has revolutionized the software development landscape by fostering collaboration, automation, and continuous improvement. By breaking down silos, adopting CI/CD practices, leveraging Infrastructure as Code, and establishing monitoring and feedback loops.
                 "
              link="https://agastyagaur.hashnode.dev/embracing-devops-accelerating-software-delivery"
              img={art2}
            />
              <FeatureArticle
              title="React vs Next.js: Which One Should You Choose?"
              time="3 min read"
              summary="
              React and Next.js are both excellent frameworks for building user interfaces. The best framework for you will depend on your specific needs and requirements.
                 "
              link="https://agastyagaur.hashnode.dev/react-vs-next-js"
              img={art5}
            />
             <FeatureArticle
              title="Why You Should Choose Next.js for Your Web Development Projects"
              time="3 min read"
              summary="
              Next.js offers numerous advantages for web developers. Its support for server-side rendering and static site generation improves performance and provides SEO benefits.
                 "
              link="https://agastyagaur.hashnode.dev/why-you-should-choose-nextjs-for-your-web-development-projects"
              img={art4}
            />
           
          </ul>
          <h2 className=" font-bold text-4xl  w-full text-center my-16 mt-32">
            All Article
          </h2>
          <ul>
            <Article
              title="Unleashing the Potential of Hardhat in Blockchain Development"
              date="29-05-23"
              link="https://agastyagaur.hashnode.dev/unleashing-the-potential-of-hardhat-in-blockchain-development"
              img={art3}
            />
          
           
           
           
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default article;
