import Image from "next/image";
import arch_img from "@/public/image/arch.png";

export default function AdminDashboard() {
    return (
      <div className="w-full h-screen relative ">
        <div className="flex flex-col md:flex-row m-1 p-1 sm:m-10 sm:p-5">
          <div className="w-full md:basis-3/4 h-full bg-[#cfbdaa] dark:bg-bgDark">
            <div className="sm:w-full">
              <p className="my-10 text-center md:text-left font-serif text-base text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-yellow-900 dark:text-gray-300">
              What a Admin Does
              </p>
              <p className="my-10  font-serif text-1xl sm:text-3xl lg:text-4xl text-yellow-800 dark:text-gray-300">
              Here, you can create new retreat or update and delete the specific retreat and list the existing retreats.
              <br /> In particular, the images of retreat are uploaded into cloudinary, and you can upload multi-images necessary to introduce
              a retreat.
              <br /> 
              </p>
            </div>
          </div>
          <div className="invisible sm:visible basis-0 md:basis-1/4 flex items-center justify-center ml-4 pl-4 ">
            <Image 
                src={arch_img}
                alt="about admin"
                className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    );
  }