"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ThemeChanger from '../themeChanger';

const Header = () => {
  const [header, setHeader] = useState(false);
  const [headerColor, setHeaderColor] = useState('transparent');
  const [headerText, setHeaderText] = useState('white');
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  console.log(pathname);
  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
  };

  useEffect(() => {
    const handleColorChange = () => {
      // console.log("dddd");
      if (window.scrollY >= 550) {
        // console.log(theme);
        if(theme === 'light') {
          setHeaderColor('#cfbdaa');
          setHeaderText('#334155');
        }
        else {
          setHeaderColor('#334155');
          setHeaderText('#ffffff');
        }
      } else {
        setHeaderColor('transparent');
        setHeaderText('#ffffff');
      }
    };
    window.addEventListener('scroll', handleColorChange);
  }, [theme]);

  return (
    <div
      style={{ background: `${headerColor}` }}
      className="fixed top-0 left-0 w-full h-20 shadow-xl flex justify-between items-center z-40 ease-in duration-300"
    >
       {/* <div className="-z-40">
        <div className="flex flex-col justify-center items-center mt-20">
          <p
            className="text-5xl sm:text-7xl md:text-10xl text-amber-700 opacity-20 font-black text-center z-10 absolute top-0 left-0 w-full dark:text-white"
          >
            JV VENTURES
          </p>
        </div>
      </div> */}
      {/* Menu + Name */}

      <div className="max-w-[1240px] m-3 flex justify-center items-center p-8">
        <Link href="/">
          <h1
            style={{ color: `${headerText}` }}
            className="py-2 text-1xl md:text-2xl font-bold hover:text-orange-500"
          >
            JV VENTURE
          </h1>
        </Link>
      </div>
      {
        pathname.includes('retreat') && !pathname.includes('admin') ? (
          <ul
            style={{ color: `${headerText}` }}
            className="text-sm font-bold hidden sm:flex "
          >
            <li className=" p-2 md:p-3 hover:text-orange-500">
              <Link href="#about-container">About</Link>
            </li>
            <li className=" p-2 md:p-3 hover:text-orange-500">
              <Link href="#mission-container">Mission</Link>
            </li>
            <li className=" p-2 md:p-3 hover:text-orange-500">
              <Link href="#upcoming-container">Upcoming</Link>
            </li>
            <li className=" p-2 md:p-3 hover:text-orange-500">
              <Link href="#partnership-container">Partnership</Link>
            </li>
            <li className=" p-2 md:p-3 hover:text-orange-500">
              <Link href="#contact-container">Contact</Link>
            </li>
            <li className="p-2 md:p-3 hover:text-orange-500">
              <Link href="/admin">Admin panel</Link>
            </li>
          </ul>
        ) 
        : (pathname.includes('admin') ? (
          <ul
          style={{ color: `${headerText}` }}
          className="text-sm font-bold hidden sm:flex "
          >
            <li className=" p-4 hover:text-orange-500">
              <Link href="/admin">About Admin</Link>
            </li>      
            <li className=" p-4 hover:text-orange-500">
              <Link href="/admin/retreats">Retreat List</Link>
            </li>
            <li className=" p-4 hover:text-orange-500">
              <Link href="/admin/retreat">Add a Retreat</Link>
            </li>
          </ul>
        )
        
        :(
            <ul
            style={{ color: `${headerText}` }}
            className="text-sm font-bold hidden sm:flex "
            >
              <li className=" p-2 md:p-3 hover:text-orange-500">
                <Link href="#dash-container">Dash</Link>
              </li>
              <li className=" p-2 md:p-3 hover:text-orange-500">
                <Link href="#welcome-container">Welcome</Link>
              </li>
              <li className=" p-2 md:p-3 hover:text-orange-500">
                <Link href="#awakening-container">Awakening</Link>
              </li>
              <li className=" p-2 md:p-3 hover:text-orange-500">
                <Link href="#purpose-container">Purpose</Link>
              </li>
              <li className=" p-2 md:p-3 hover:text-orange-500">
                <Link href="#contact-container">Contact</Link>
              </li>
              <li className=" p-2 md:p-3 hover:text-orange-500">
                <Link href="/admin">Admin panel</Link>
              </li>
            </ul>
          )
        )
      }

      <div className="mr-10">
        <ThemeChanger />
      </div>

      {/* Mobile hamburgerMenu */}

      <div onClick={handleHeader} className="block sm:hidden p-4 z-50">
        {header ? (
          <AiOutlineClose size={30} style={{ color: `${headerText}` }} />
        ) : (
          <AiOutlineMenu size={30} style={{ color: `${headerText}` }} />
        )}
      </div>
      <div
        className={
          header
            ? 'sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
            : 'sm:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
        }
      >
        {pathname.includes('retreat') ? (
          <ul
            style={{ color: `${headerText}` }}
            className="text-sm font-bold "
          >
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="#about-container" onClick={handleMobileHeader}>
                About
              </Link>
            </li>
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="#mission-container" onClick={handleMobileHeader}>
                Mission
              </Link>
            </li>
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="#upcoming-container" onClick={handleMobileHeader}>
                Upcoming
              </Link>
            </li>
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="#partnership-container" onClick={handleMobileHeader}>
                Partnership
              </Link>
            </li>
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="#contact-container" onClick={handleMobileHeader}>
                Contact
              </Link>
            </li>
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="/admin/retreat" onClick={handleMobileHeader}>
                Admin Panel
              </Link>
            </li>
          </ul>
        ) : (
          <ul
            style={{ color: `${headerText}` }}
            className="text-sm font-bold "
          >
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="#dash-container" onClick={handleMobileHeader}>
                Dash
              </Link>
            </li>
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="#welcome-container" onClick={handleMobileHeader}>
                Welcome
              </Link>
            </li>
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="#awakening-container" onClick={handleMobileHeader}>
                Awakening
              </Link>
            </li>
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="#purpose-container" onClick={handleMobileHeader}>
                Purpose
              </Link>
            </li>
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="#contact-container" onClick={handleMobileHeader}>
                Contact
              </Link>
            </li>
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="/admin" onClick={handleMobileHeader}>
                Admin Panel
              </Link>
            </li>
          </ul>
        )}

      </div>
    </div>
  );
};

export default Header;
