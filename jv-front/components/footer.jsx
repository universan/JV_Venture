import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import starIcon from '@/public/icons/starIcon.png';
import rightArrowIcon from '@/public/icons/rightArrowIcon.png';
import about_admin_img from '@/public/image/admin.png'
import phoneIcon from '@/public/icons/contact.png';
import mailIcon from '@/public/icons/mail.png';

const Footer = () => {
  return (
    <div id="contact-container" className="relative bg-[#e7ddd3] border-t-2 border-solid border-[#ffd87d] dark:bg-bgDark">
      {/* Row 1 */}
      <div className="sm:flex justify-center items-center py-[20px] sm:py-[90px] px-2 ">
        {/* text  */}
        <p className="text-2xl text-center leading-[30px] font-bold text-[#4D5E80] capitalize mb-10 sm:mb-0 dark:text-white">
          ZV VENTURES
        </p>
        {/* menu  */}
        <div className="relative flex gap-5 justify-center items-centers  sm:w-[450px] mx-10">
          <ul className="grid  sm:grid-cols-4 gap-5 text-center sm:gap-10">
            <li>
              <Link href="/" className="py-2 hover:text-orange-500 dark:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/house" className="py-2 hover:text-orange-500 dark:text-gray-300">
                Real Estate
              </Link>
            </li>
            <li>
              <Link href="/retreat" className="py-2 hover:text-orange-500 dark:text-gray-300">
                Retreats
              </Link>
            </li>
            <li>
              <Link href="#contact" className="py-2 hover:text-orange-500 dark:text-gray-300">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        {/* rating */}
        <div className="basis-1/3 flex flex-col items-center sm:items-start gap-1 mt-5 sm:mt-0">
          {/* <div className="flex">
            <Image
              src={starIcon}
              alt="ratings "
              className="w-[30px] h-[30px]"
            />
            <Image
              src={starIcon}
              alt="ratings "
              className="w-[30px] h-[30px]"
            />
            <Image
              src={starIcon}
              alt="ratings "
              className="w-[30px] h-[30px]"
            />
            <Image
              src={starIcon}
              alt="ratings "
              className="w-[30px] h-[30px]"
            />
            <Image
              src={starIcon}
              alt="ratings "
              className="w-[30px] h-[30px]"
            />
          </div> */}
          <div className='flex flex-row justify-center items-center'>
            <div className='basis-1/2'>
              <Image 
                  src={about_admin_img}
                  alt="about admin"
                  className="w-2/3 h-auto"
              />
            </div>
            <div className='basis-1/2 m-4'>
            <div className="flex flex-col p-2 dark:text-gray-300">
            {/* <p>1.1M satisfied customers</p> */}
              <div className="flex">
                <Image
                  src={phoneIcon}
                  alt="phone icon"
                  className="w-5 h-5 mx-9 self-center"
                />
                <p className="text-white text-xl py-2">780-993-9714</p>
              </div>

              <div className="flex">
                <Image
                  src={mailIcon}
                  alt="mail icon"
                  className="w-5 h-5 mx-9 self-center"
                />
                <p className="text-white text-xl py-2">info@jvventures.ca</p>
              </div>
          </div>
            </div>

          </div>

        </div>
      </div>

      {/* Row 2 */}

      <div className="relative py-0 px=[340px] border-t-2 border-solid border-[#ffd87d] flex items-center justify-between gap-5">
        <p className="capitalize text-[10px] sm:text-[13px] mx-4 font-semibold leading-[25px] text-center text-bluePText dark:text-white">
          © 2024 Company. All Rights Reserved.
        </p>
        <Link
          href=""
          target="_blank"
          className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText hover:text-orange-500 dark:text-white"
        >
          Design by ZV VENTURES
        </Link>
        <div className="flex items-start p-4 gap-[57px]">
          <Link
            href="#"
            className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText hover:text-orange-500 dark:text-white"
          >
            terms
          </Link>
          <Link
            href="#"
            className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText  hover:text-orange-500 dark:text-white"
          >
            privacy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
