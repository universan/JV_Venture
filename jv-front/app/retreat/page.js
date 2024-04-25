"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import scrollIcon from '@/public/icons/topArrowIcon.png';

import Dashboard from '@/components/retreat/dashboard';
import About from '@/components/retreat/about';
import Upcoming from '@/components/retreat/upcoming';
import Mission from '@/components/retreat/mission';
import Partnership from '@/components/retreat/partnership';

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: 'smooth' });
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-[#e7ddd3] dark:bg-bgDark">
        <Dashboard
          address="225 S 1st streat, CA 11111"
          phone="780-993-9714"
          email="info@jvventures.ca"
        />

        <About />
        <Upcoming />
        <Mission />
        <Partnership />
   
        {showButton && (
          <div className="fixed bottom-24 right-10 z-50">
            <button
              onClick={handleScrollToTop}
              className="bg-slate-100 rounded shadow-xl overflow-visible"
            >
              <Image src={scrollIcon} alt="scroll button" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
