import React from 'react';
import Image from 'next/image';
import {upcoming_data} from "@/public/data/retreat_about";
import CardRetreat from './card-retreat';
import leaf from '@/public/image/leaf.png';

export default function Upcoming() {
  return (
    <div id="upcoming-container" className="relative p-4 mb-4">
      <div className="flex justify-center items-center">
        <button className="relative mt-24 bg-green-200  hover:bg-green-600 px-4 py-1 rounded-2xl text-green-500 hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer ">
          Upcoming
        </button>
      </div>

      <div className="relative ">
        <div className="flex flex-col justify-center items-center mt-20">
          <p
            className="text-7xl sm:text-8xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full dark:text-white"
          >
            UPCOMING RETREATS
          </p>
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative mt-16 dark:text-gray-300">
            Open For You
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-10 p-5 ">
        {
            upcoming_data.map((item) => 
                <CardRetreat key={item.title} title={item.title} description={item.description} period={item.period} imageSrc={item.img} />
            )
        }
      </div>
    </div>
  );
}
