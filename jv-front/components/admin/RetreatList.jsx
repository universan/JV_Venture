"use client";
import { useEffect, useState } from "react";
import { useRetreat } from "@/context/retreat";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Carousel from "../carousel";

export default function retreatList() {
  const {
    retreats,
    currentPage,
    totalPages,
    fetchRetreats,
    setUpdatingRetreat,
  } = useRetreat();

  const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const page = searchParams.get("page");
  const [page, setPage] = useState(1);

  useEffect(() => {
    // console.log(page);
    fetchRetreats(page);
  }, [page]);

  const handleClick = (retreat) => {
    setUpdatingRetreat(retreat);
    router.push("/admin/retreat");
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-10 p-5 ">
          {retreats?.map((retreat) => (
              <div key={retreat?._id} className="w-[300px] hover:scale-105 ease-in duration-200 mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-slate-700">
                  <div className="flex flex-col items-center">    
                    <div className="relative" >
                      {/* <Carousel images={retreat?.images} width={300} height={250}/> */}
                      <Image
                        width={300} height={250}                        
                        className="h-[250px] w-[300px] object-cover cursor-pointer"
                        src={retreat?.images[0].secure_url}
                        alt="retreat image"
                        onClick={() => handleClick(retreat)}
                      />
                    </div>
                    <div className="p-2">
                      <div className="capitalize text-cardText font-black text-yellow-800 text-[20px] leading-[30px] dark:text-white">
                        {retreat?.title}
                      </div>
                    </div>
                    <div className="p-2">
                      <p className="font-medium text-base p-1  text-yellow-800 dark:text-gray-300">
                        {retreat?.description}
                      </p>
                    </div>
                    <div className="p-2">
                      <p className="font-medium text-base p-1  text-yellow-800 dark:text-gray-300">
                        {retreat?.period} 
                      </p>
                    </div>
                  </div>
              </div>
          ))}
      </div>

      <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setPage = {setPage}
      />
    </div>
  );
}
