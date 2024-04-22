import React from 'react';
import Image from 'next/image';
import leaf from '@/public/image/leaf.png';
import mission_1_img from '@/public/image/retreat/mission_1.png';
import mission_2_img from '@/public/image/retreat/mission_2.png';

export default function Mission() {
  return (
    <div id="mission-container" className="relative p-4 mb-4">
      {/* <div className='relative right-0'> */}

      {/* </div> */}
      <div className="flex justify-center items-center">
        <button className="relative mt-24 bg-green-200  hover:bg-green-600 px-4 py-1 rounded-2xl text-green-500 hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer ">
          Mission
        </button>
      </div>

      <div className="relative ">
        <div className="flex flex-col justify-center items-center mt-20">
          <p
            className="text-9xl sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full dark:text-white"
          >
            OUR MISSION
          </p>
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative mt-16 dark:text-gray-300">
            We Will Work For You
          </p>
        </div>
      </div>
      
      <div className="flex flex-col gap-5 m-10">
        <div className="h-80 m-10 overflow-hidden opacity:0 dark:bg-slate-700">
            <div className="flex flex-col sm:flex-row items-center gap-10">    
                <div className="relative basis-1/3 md:basis-1/2">
                    <Image
                        className="w-full h-full object-contain object-cover"
                        src={mission_1_img}
                        alt="retreat image"   
                    />
                </div>
                <div className="basis-2/3 md:basis-1/2 text-wrap p-4 relative whitespace-normal">
                    <p className="font-medium text-base mt-2  text-bluePText w-full h-full">
                        Our mission is simple yet profound: to inspire and empower individuals to awaken to their fullest potential and live authentically from the heart. We believe that true transformation begins from within and that each of us has the power to create the life we desire.
                        <br />From transformative retreats and workshops to guided meditation sessions and personalized coaching, we offer a range of experiences designed to support you on your journey of self-discovery and empowerment. 
                        <br />Our approach is holistic, honoring the mind, body, and spirit, and our teachings draw upon
                        ancient wisdom traditions and modern psychology to create a comprehensive framework for growth and healing.
                    </p>
                    <Image 
                        src={leaf}
                        alt="leaf image"
                        className="absolute -z-10 opacity-50 top-[-100px] right-[-200px] bg-no-repeat object-cover object-center"
                    />
                </div>
            </div>
        </div>    
        <div className="h-80 m-10 overflow-hidden dark:bg-slate-700">
            <div className="flex flex-col sm:flex-row items-center gap-10">  
                 <div className="basis-1/3 md:basis-1/2 p-4 relative">
                    <Image 
                        src={leaf}
                        alt="leaf image"
                        className="absolute -z-10 opacity-50 rotate-180 bottom-[-100px] left-[-200px] bg-no-repeat object-cover object-center"
                    />
                    <p className="font-medium text-base mt-2  text-bluePText">
                    Whether you're seeking clarity, healing, or simply a deeper connection to yourself and the world around you, we invite you to join us on this sacred journey of self-discovery and awakening. 

                    <br />Together, let's embrace the challenges, celebrate the victories, and unlock the infinite potential that resides within each of us. Ready to embark on your own journey of transformation? Get in touch with us today to learn more about our offerings and how we can support you on your path to self-discovery and empowerment.

                    </p>
                </div>  
                <div className="relative basis-2/3 md:basis-1/2">
                    <Image
                        className="w-full h-full object-contain object-cover"
                        src={mission_2_img}
                        alt="retreat image"   
                    />
                </div>
                
            </div>
        </div>    
      </div>
    </div>
  );
}
