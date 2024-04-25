"use client"
import React, { useState , useEffect} from 'react';
import Image from 'next/image';
import {upcoming_data} from "@/public/data/retreat_about";
import CardRetreat from './card-retreat';
import { useRetreat } from '@/context/retreat';
import Pagination from '../Pagination';
import { usePathname } from 'next/navigation';
export default function Upcoming() {
    const {
        retreats,
        currentPage,
        totalPages,
        fetchRetreats,
        setUpdatingRetreat,
    } = useRetreat();
    
    const pathname = usePathname();
    const [page, setPage] = useState(1);

    useEffect(() => {
    // console.log(page);
    fetchRetreats(page);
    }, [page]);

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
            className="text-6xl sm:text-7xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full dark:text-white"
          >
            UPCOMING RETREATS
          </p>
          <p className="text-4xl text-yellow-900 font-bold text-center z-20 relative mt-16 dark:text-gray-300">
            Open For You
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-10 p-5 ">
        {
            retreats.map((item) => 
                <CardRetreat key={item.title} title={item.title} description={item.description} period={item.period} imageSrc={item.images[0].secure_url} />
            )
        }
      </div>
      <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            // pathname={pathname}
            setPage={setPage}
      />
    </div>
  );
}
