import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

export const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between item-center navbar'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex justify-end items-center flex-1'>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px]  text-white  text-dimWhite mr-10`} 
        >
          <a href="/login"> Log In </a>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px]  text-white  text-dimWhite mr-10`} 
        >
          <a href="/signup"> Sign Up </a>
        </li>
        {/*
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px]  text-white  text-dimWhite ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`} 
        >
            <a href={'#${nav.id}'}> {nav.title} </a>
          </li>
        ))}
        */}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" onClick={() => setToggle((prev)=> !prev)} className='w-[28px] h-[28px] object-contain'/>

        <div  className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`} >

            <ul className='list-none sm:flex justify-end items-center flex-1 flex-col'>
              
              {navLinks.map((nav, index) => (
                <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white text-dimWhite ${index === navLinks.length - 1 ? "mb-4" : "mr-10"}`}
              >
                  <a href={'#${nav.id}'}> {nav.title} </a>  
                </li>
              ))}
      </ul> 

        </div>
      </div>
    </nav>
  )
}
