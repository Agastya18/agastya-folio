import React,{useRef} from 'react'

import { useScroll,motion } from "framer-motion"
import LiIcon from './LiIcon'
const Detail=({position,comp,time,address,clink,work})=>{
  const ref=useRef(null);
  return (<li ref={ref} className=' my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
    <LiIcon reference={ref}/>
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5,type:"spring"}}

    >
      <h3 className=' capitalize font-bold text-2xl'>{position}&nbsp;<a href={clink}>@{comp}</a></h3>
      <span className=' capitalize font-bold text-dark/75 '>
        {time}|{address}
      </span>
      <p className=' font-medium w-full'>{work}</p>
    </motion.div>
  </li>
  )
}
const Experience = () => {
  const ref=useRef(null);
  const {scrollYProgress}=useScroll(
    {
      target:ref,
      offset:["start end","center start"]
    }
  )
  return (
    <div className=' my-24'>
        <h2 className=' font-bold text-8xl mb-20  w-full text-center'>Experience</h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>
             <motion.div
               style={{scaleY:scrollYProgress}}
             className=' absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'/>
            <ul className=' w-full flex flex-col items-center justify-between ml-4'>
                <Detail position="Software Engineer" comp={"Greenstand"} work="Working on a team responsible for developing the new wallet, (Treetracker), for Greenstand using React-Native. Greenstand provides a secure and user-friendly platform for managing your digital tokens. Sending and receiving tokens takes just a few taps, making it a breeze to transfer them between users.  " time="2025-current" address="Remote"/>
 <Detail position="Frontend Engineer" comp={"Ggithubstreaks"} work="I am part of a team enhancing Ggithubstreak's platform by designing intuitive UI/UX in Figma and developing innovative tools for GitHub profile comparison, incorporating memes and visualizations for a more engaging experience." time="2024-current" address="Remote"/>
 
            </ul>
        </div>
    </div>
  )
}

export default Experience