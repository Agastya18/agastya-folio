import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
   <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
    <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-8'>
        <span>2025 &copy; All Right Reserved.</span>
        <Link href="mailto: agastyagaur17@gmail.com" target={"_blank"}>Agastya gaur</Link>
        <Link href="/">Say hello !</Link>
    </Layout>
   </footer>
  )
}

export default Footer