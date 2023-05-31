import React, { useState } from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Logo from './Logo'
import {motion} from "framer-motion";
import { InstaIcon, GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons'
import useThemeSwitcher from './hooks/useThemeSwitcher';
const CoustomLink=({href,title,className=""})=>{
  const router = useRouter();
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`
      h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
       ${router.asPath === href ? 'w-full': 'w-0'}
        dark:bg-light`}
       >
        &nbsp;
      </span>
    </Link>
  )
}

const CoustomMobileLink=({href,title,className="",toggle})=>{
  const router = useRouter();
  const handleClick=()=>{
    toggle()
    router.push(href);
  }
  return(
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2 `} onClick={handleClick}>
      {title}
      <span className={` bg-light  dark:bg-dark
      h-[1px] inline-block w-0 absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
       ${router.asPath === href ? 'w-full': 'w-0'}
        dark:bg-dark`}
       >
        &nbsp;
      </span>
    </button>
  )
}
const Navbar = () => {
  const [mode,setMode]=useThemeSwitcher();
  const [isopen,setOpen]=useState(false);
  const handleClick=()=>{
    setOpen(!isopen);
  }
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10  lg:px-16 md:px-12 sm:px-8'>
       <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}> 
        <span className={` bg-dark dark:bg-light block  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${ isopen ? 'rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>
        <span className={` bg-dark dark:bg-light block  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${ isopen ? 'opacity-0':'opacity-100'}`}></span>
        <span className={` bg-dark dark:bg-light block  transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${ isopen ? '-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>
       </button>
  <div className=' w-full flex justify-between items-center lg:hidden'>
  <nav>
    <CoustomLink href="/" title="Home" className=' mr-4'/>
    <CoustomLink href="/about" title="About" className='mx-4'/>
    <CoustomLink href="/projects" title="Projects" className='mx-4'/>
    <CoustomLink href="/article" title="Article" className='ml-4'/>
   </nav>
  
   <nav className='flex items-center justify-center flex-wrap'>
     <motion.a href="https://twitter.com/@GaurAgastya" target={'_blank'}
     whileHover={{y:-2}}
     whileTap={{scale:0.9}}
     className='w-6 mx-3'
     ><TwitterIcon/></motion.a>
     <motion.a href="https://github.com/Agastya18" target={'_blank'}
     whileHover={{y:-2 }}
     whileTap={{scale:0.9}}
     className='w-6 mx-3'><GithubIcon/></motion.a>
     <motion.a href="https://linkedin.com/in/agastya-gaur-86b3261a0/" target={'_blank'}
     whileHover={{y:-2}}
     whileTap={{scale:0.9}}
     className='w-6 mx-3'><LinkedInIcon/></motion.a>
     
     <button onClick={()=> setMode(mode==="light" ? "dark" : "light")}
      className={`ml-3 flex items-center justify-center rounded-full p-1
      ${mode==="light" ? "bg-dark text-light": "bg-light text-dark"}
      `}
     >
     { mode === "dark" ?
     <SunIcon className={"fill-dark"}/>
     : <MoonIcon className={"fill-dark"}/>

     }
     </button>
     
   </nav>
  </div>
  {
    isopen ?
<motion.div
  initial={{scale: 0,opacity:0,x:"-50",y:"-50"}}
  animate={{scale:1,opacity:1}}
className=' z-30 bg-dark/90  dark:bg-light/75 rounded-lg backdrop-blur-md py-32 min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
  <nav className=' flex items-center flex-col justify-center '>
    <CoustomMobileLink href="/" title="Home" className='' toggle={handleClick}/>
    <CoustomMobileLink href="/about" title="About" className='' toggle={handleClick}/>
    <CoustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick}/>
    <CoustomMobileLink href="/article" title="Article" className='' toggle={handleClick}/>
   </nav>
  
   <nav className='flex items-center justify-center flex-wrap mt-2'>
     <motion.a href="https://twitter.com" target={'_blank'}
     whileHover={{y:-2}}
     whileTap={{scale:0.9}}
     className='w-6 mx-3 sm:mx-1'
     ><TwitterIcon/></motion.a>
     <motion.a href="https://github.com/Agastya18" target={'_blank'}
     whileHover={{y:-2 }}
     whileTap={{scale:0.9}}
     className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'><GithubIcon/></motion.a>
     <motion.a href="linkedin.com/in/agastya-gaur-86b3261a0/" target={'_blank'}
     whileHover={{y:-2}}
     whileTap={{scale:0.9}}
     className='w-6 mx-3 sm:mx-1'><LinkedInIcon/></motion.a>
     
     <button onClick={()=> setMode(mode==="light" ? "dark" : "light")}
      className={`ml-3 flex items-center justify-center rounded-full p-1
      ${mode==="light" ? "bg-dark text-light": "bg-light text-dark"}
      `}
     >
     { mode === "dark" ?
     <SunIcon className={"fill-dark"}/>
     : <MoonIcon className={"fill-dark"}/>

     }
     </button>
     
   </nav>
  </motion.div> 
    :null
  }
   <div className=' absolute left-[50%] top-2 translate-x-[-50%]'>
    <Logo/>
   </div>
    </header>
  )
}

export default Navbar
