import Image from "next/image";
import Link from "next/link";
import house_1 from "@/public/image/house_1.png"
import retreat_1 from "@/public/image/retreat_1.png"
import arch from "@/public/image/arch1.png"
import welcome_img from "@/public/image/welcome.png" 
import awakening_img from "@/public/image/awakening.png" 
import purpose_img from "@/public/image/purpose.png" 

export default function Home() {
  return (
    <main className="flex flex-col bg-[#e7ddd3] pt-8 w-full dark:bg-bgDark">
      <div id="dash-container" className="w-full h-screen relative ">
        <div className="relative h-screen text-center flex flex-col justify-center items-center">
          <div className="flex flex-row ">
            <div className="basis-1/2">
              <Link href = '/house'>
                <Image
                  src={house_1}
                  alt="bg image"
                  className="bg-no-repeat rounded-full object-cover object-center cursor-pointer
                      transition ease-in-out delay-150 hover: border-lime-500 hover: border-4 hover:scale-75 hover:bg-indigo-500 duration-300"
                />
              </Link>
              
              <div className="flex flex-row justify-center">
                <svg className="animate-bounce" fill="#b7f019" xmlns="http://www.w3.org/2000/svg"  width="100px" height="100px" viewBox="0 0 388.151 388.15">
                  <path d="M294.442,388.15c1.393-4.576,2.918-9.344,3.938-11.8c24.241-58.511,21.491-120.33,20.417-140.134 c-0.745-13.367-2.054-24.655-9.518-33.615c-11.025-13.153-27.935-17.248-35.158-18.452c-4.588-11.529-11.602-19.11-20.867-22.584 c-3.621-1.36-7.572-2.048-11.715-2.048c-6.966,0-13.229,1.91-17.438,3.615c-5.566-10.104-12.994-16.369-22.098-18.651 c-2.498-0.633-5.143-0.952-7.854-0.952c-8.67,0-16.603,3.27-21.995,6.197c-1.402-9.334-6.29-84.8-9.185-126.176 C162.045,10.302,151.026,0,137.74,0h-0.018c-14.192,0-25.709,11.47-25.767,25.656c-0.435,89.7-2.765,178.297-3.312,191.718 c-8.713,3.963-23.89,9.253-30.643,18.41c-15.444,20.945-8.725,37.362-1.068,50.177c17.285,28.967,47.384,80.74,60.204,102.189 H294.442L294.442,388.15z"/>
                </svg>
              </div>
              <div className="flex flex-row justify-center">
                <p className="m-5  font-serif text-base text-2xl sm:text-3xl md:text-4xl text-yellow-900 dark:text-gray-300">
                  click here into Real Estate
                </p>
              
              </div>
            </div>
            <div className="z-40 -m-8">
              <div className="flex flex-col justify-center items-center mt-20">
                <Image
                    src={arch}
                    alt="bg image"
                    className="bg-no-repeat rounded-full object-cover object-center"
                />
              </div>
            </div>
            <div className="basis-1/2">
              <Link href = '/retreat'>
                <Image
                    src={retreat_1}
                    alt="bg image"
                    className="bg-no-repeat rounded-full object-cover object-center cursor-pointer
                      transition ease-in-out delay-150 hover: border-yellow-500 hover: border-4 hover:scale-75 hover:bg-indigo-500 duration-300"
                
                />
              </Link>
              <div className="flex flex-row justify-center">
                <svg className="animate-bounce" fill="#ee9d2b" xmlns="http://www.w3.org/2000/svg"  width="100px" height="100px" viewBox="0 0 388.151 388.15">
                  <path d="M294.442,388.15c1.393-4.576,2.918-9.344,3.938-11.8c24.241-58.511,21.491-120.33,20.417-140.134 c-0.745-13.367-2.054-24.655-9.518-33.615c-11.025-13.153-27.935-17.248-35.158-18.452c-4.588-11.529-11.602-19.11-20.867-22.584 c-3.621-1.36-7.572-2.048-11.715-2.048c-6.966,0-13.229,1.91-17.438,3.615c-5.566-10.104-12.994-16.369-22.098-18.651 c-2.498-0.633-5.143-0.952-7.854-0.952c-8.67,0-16.603,3.27-21.995,6.197c-1.402-9.334-6.29-84.8-9.185-126.176 C162.045,10.302,151.026,0,137.74,0h-0.018c-14.192,0-25.709,11.47-25.767,25.656c-0.435,89.7-2.765,178.297-3.312,191.718 c-8.713,3.963-23.89,9.253-30.643,18.41c-15.444,20.945-8.725,37.362-1.068,50.177c17.285,28.967,47.384,80.74,60.204,102.189 H294.442L294.442,388.15z"/>
                </svg>
              </div>
              <div className="flex flex-row justify-center">
                <p className="m-5  font-serif text-base text-2xl sm:text-3xl md:text-4xl text-yellow-900 dark:text-gray-300">
                  click here into Restreat
                </p>
              
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div id="welcome-container" className="flex flex-row m-10 p-5">
        <div className="basis-3/4 h-full bg-[#cfbdaa] dark:bg-bgDark">
          <div className="">
            <p className="m-10  font-serif text-base text-5xl sm:text-7xl md:text-10xl text-yellow-900 dark:text-gray-300">
              Welcome <br /> Message
            </p>
            <p className="m-10  font-serif text-1xl sm:text-3xl md:text-3xl text-yellow-800 dark:text-gray-300">
              Welcome to JV Ventures Retreats, where personal transformation meets empowerment. 
              My journey began during the unprecedented times of the Covid-19 pandemic, when the world seemed to slow down, and introspection became a
              necessity rather than a luxury.
            </p>
            
          </div>
        </div>
        <div className="basis-1/4 flex flex-col items-center justify-center p-2">
          <Image 
            src={welcome_img}
            alt="welcome message"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div id ="awakening-container" className="flex flex-row m-10 p-5">
        <div className="basis-1/4 flex flex-col items-center justify-center p-2">
          <Image 
            src={awakening_img}
            alt="welcome message"
            className="w-full"
          />
        </div>
        <div className="basis-3/4 h-full bg-[#cfbdaa] dark:bg-bgDark">
          <div className="dark:text-gray-300">
            <p className="m-10 font-serif text-base text-5xl sm:text-7xl md:text-10xl text-yellow-900 text-right dark:text-gray-300">
              The Awakening
            </p>
            <p className="m-10  font-serif text-1xl sm:text-3xl md:text-3xl text-yellow-800 dark:text-gray-300">
            Like many, I found myself facing unexpected challenges and uncertainties as the pandemic unfolded. The disruptions to daily life forced me to pause, reflect, and reevaluate my priorities. It was during this time of introspection that I embarked on a profound journey of self-discovery and awakening.
            <br />As the world around me shifted, I realized the opportunity for growth that lay within the chaos. I embraced change with an open heart and an open mind, seeking wisdom in moments of solitude and solace in the beauty of nature.

            <br />Through meditation, mindfulness practices, and self-reflection, I began to uncover deeper truths about myself and my purpose in life.

            </p>
            
          </div>
        </div>
      </div>
      <div id="purpose-container" className="flex flex-row m-10 p-5">
        <div className="basis-3/4 h-full bg-[#cfbdaa] dark:bg-bgDark">
          <div className="dark:text-gray-300">
            <p className="m-10  font-serif text-base text-5xl sm:text-7xl md:text-10xl text-yellow-900 dark:text-gray-300">
            Finding Purpose

            </p>
            <p className="m-10  font-serif text-1xl sm:text-3xl md:text-3xl text-yellow-800 dark:text-gray-300">
            The challenges of the pandemic served as a catalyst for profound inner transformation. I discovered a newfound sense of clarity, purpose, and alignment with my authentic self. It was through this process of
            self-discovery that JV Ventures was born, a platform dedicated to empowering others on their own journey of personal growth and fulfillment, by teaming up with the people and teachers that I discovered along the way, and can nowshare with others.

            </p>
            
          </div>
        </div>
        <div className="basis-1/4 flex flex-col items-center justify-center p-2">
          <Image 
            src={purpose_img}
            alt="welcome message"
            className="w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
}
