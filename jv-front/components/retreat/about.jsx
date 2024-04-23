import React from 'react';
import Image from 'next/image';
import {about_data} from "@/public/data/retreat_about";
import CardAbout from './card-about';
import leaf from '@/public/image/leaf.png';
import about_1_img from '@/public/image/retreat/about_1.png';
import about_2_img from '@/public/image/retreat/about_2.png';

export default function About() {
  return (
    <div id="about-container" className="relative p-4 mb-4">
      {/* <div className='relative right-0'> */}
        <Image 
            src={leaf}
            alt="leaf image"
            className="absolute top-[-100px] right-[-300px] bg-no-repeat scale-50 object-cover object-center"
        />
      {/* </div> */}
      <div className="flex justify-center items-center">
        <button className="relative mt-24 bg-green-200  hover:bg-green-600 px-4 py-1 rounded-2xl text-green-500 hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer ">
          About
        </button>
      </div>

      <div className="relative ">
        <div className="flex flex-col justify-center items-center mt-20">
          <p
            className="text-9xl sm:text-10xl text-blue-700 opacity-5 font-serif font-black text-center z-0 absolute top-0 left-0 w-full dark:text-white
          "
          >
            OUR IDEA
          </p>
          <p className="text-4xl text-yellow-900 font-bold font-serif text-center z-20 relative mt-16 dark:text-gray-300">
            You Will Find the Best Option
          </p>
        </div>
      </div>

      <div className="relative justify-center items-center">
        <p className="font-serif text-base text-center text-yellow-800 mt-20 ">
            In the bustling rhythm of modern life, it's easy to get caught up in the whirlwind of tasks and responsibilities, losing touch with ourselves and each other along the way. 
            <br />
            That's why we're excited to introduce various themed retreats: from women's only, co-ed, couples, business and youth, so whatever your need, we have a retreat for you. 
            <br /> This is a dedicated time to pause, reflect, and recharge.
        </p>
      </div>
      
      <div className="flex flex-col sm:grid md:grid-cols-2 gap-5 m-10">
        <div className="m-10 shadow-md overflow-hidden opacity:0 dark:bg-slate-700">
            <div className="flex flex-col sm:flex-row items-center">    
                <div className="relative basis-1/3">
                    <Image
                        className="w-full h-full"
                        src={about_1_img}
                        alt="retreat image"   
                    />
                </div>
                <div className="basis-2/3 p-4">
                    <p className="font-serif text-base mt-2  text-yellow-700 ">
                        At JV Ventures, we recognize the profound benefits that retreats offer in fostering personal growth, team cohesion, and collective well-being. That's why we're committed to creating opportunities for retreat experiences that nurture mind, body, and spirit.

                    </p>
                </div>
            </div>
        </div>    
        <div className="m-10 shadow-md overflow-hidden dark:bg-slate-700">
            <div className="flex flex-col sm:flex-row items-center">    
                <div className="relative basis-1/3">
                    <Image
                        className="w-full h-full"
                        src={about_2_img}
                        alt="retreat image"   
                    />
                </div>
                <div className="basis-2/3 p-4">
                    <p className="font-serif text-base mt-2  text-yellow-700">
                    Join us on this journey of self-discovery, connection, and renewal by attending one of our Retreats. Together, let's embrace the transformative power of retreats and cultivate a culture of flourishing.

                    </p>
                </div>
            </div>
        </div>    
      </div>
      
      <div className="relative ">
        <div className="flex flex-col justify-center items-center m-20">
          <p
            className="text-5xl sm:text-6xl text-yellow-900 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full dark:text-white
          "
          >
            Retreats aren't just a luxury. <br /> they're a necessity in today's fast-paced world
          </p>
          <p className="text-4xl text-yellow-900 font-bold text-center z-20 relative mt-16 dark:text-gray-300">
            Here's Why
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-10 p-5 ">
        {
            about_data.map((item) => 
                <CardAbout key={item.title} title={item.title} description={item.description} imageSrc={item.img} />
            )
        }
      </div>
    </div>
  );
}
