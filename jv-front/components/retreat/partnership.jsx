import React from 'react';
import Image from 'next/image';
import circle from '@/public/image/circle.png';
import partner_bg_img from '@/public/image/retreat/partner_bg.png';
import partner_1_img from '@/public/image/retreat/partner_1.png';
import partner_2_img from '@/public/image/retreat/partner_2.png';
import partner_3_img from '@/public/image/retreat/partner_3.png';

export default function Partnership() {
  return (
    <div id="partnership-container" className="relative p-4">
      <div className='h-screen'>
      <div className="flex justify-center items-center">
        <button className="relative mt-24 bg-green-200  hover:bg-green-600 px-4 py-1 rounded-2xl text-green-500 hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer ">
          Partnership
        </button>
      </div>

      <div className="relative">
        <div className="flex flex-col justify-center items-center mt-20">
          <p
            className="text-9xl sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full dark:text-white"
          >
            PARTNERSHIP OPPORTUNITY
          </p>
          <p className="text-4xl text-yellow-900 font-bold text-center z-20 relative m-24 dark:text-gray-300">
            Sponsorship For Wellness Retreats 

          </p>
        </div>
      </div>
      
      <div className="justify-center m-20 bottom-8">
        <p className="font-medium text-base text-center text-yellow-800">
        At JV Ventures, we specialize in organizing transformative wellness retreats that offer participants a unique opportunity to rejuvenate their mind, body, and spirit in serene and rejuvenating environments. 

        <br />Our retreats focus on holistic wellness practices, including yoga, meditation, mindfulness, nutrition, and outdoor activities, all aimed at promoting physical, mental, and emotional well-being.

        <br />We are currently seeking sponsors to support our upcoming wellness retreats. By sponsoring our retreats, your company would not only demonstrate its commitment to promoting wellness and healthy lifestyles but also gain valuable exposure and brand visibility among our diverse and engaged audience.

        </p>
      </div>
      </div>

      <div className="relative ">
        <div className="flex flex-col justify-center items-center m-20">
          <p
            className="text-5xl sm:text-6xl text-yellow-900 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full dark:text-white
          "
          >
            Why You Should Sponsor
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 m-10"> 
        <div className="whitespace-normal m-10 overflow-hidden dark:bg-slate-700">
            <div className="flex flex-col sm:flex-row items-center gap-10 relative"> 
                {/* <Image 
                  src={circle}
                  alt="leaf image"
                  className="absolute z-10 top-[-50px] right-[0px] bg-no-repeat object-cover object-center"
                />  */}
                <div className="basis-1/3 md:basis-1/2 p-4">
                  <p className="font-medium text-xl mt-2  text-yellow-800">
                  1.  Brand Exposure:<br/>
                  Your logo and branding will be prominently featured
                  in our promotional materials, including event signage, marketing collateral, and social media channels, reaching thousands of potential customers who are passionate about wellness.
                  <br/>
                  2.  Networking Opportunities: 
                  As a sponsor, [Company Name] will have the
                  opportunity to connect with like-minded individuals and organizations within the wellness community, fostering valuable relationships and potential business partnerships.

                  </p>
                </div>  
                <div className="relative basis-2/3 md:basis-1/2 whitespace-normal">
                    <Image
                        className="w-full h-full object-contain object-cover"
                        src={partner_1_img}
                        alt="retreat image"   
                    />
                    
                </div>
                
            </div>
        </div>    
        <div className="whitespace-normal  m-10 overflow-hidden opacity:0 dark:bg-slate-700">
            <div className="flex flex-col sm:flex-row items-center gap-10">    
                <div className="relative basis-1/3 md:basis-1/2 relative">
                    <Image
                        className="w-full h-full object-contain object-cover"
                        src={partner_2_img}
                        alt="retreat image"   
                    />
                </div>
                {/* <Image 
                        src={circle}
                        alt="leaf image"
                        className="absolute z-10 opacity-50 rotate-180 bottom-[-100px] left-[-200px] bg-no-repeat object-cover object-center"
                /> */}
                <div className="basis-2/3 md:basis-1/2 p-4 whitespace-normal ">
                    <p className="font-medium text-xl mt-2  text-yellow-800">
                    3. Positive Brand Association:
                    Aligning your brand with our wellness retreats will enhance your reputation as a socially responsible company that prioritizes the well-being of its customers and employees.
                    <br />
                    4. Customized Partnership Packages: 
                    We offer flexible sponsorship packages tailored to meet the specific needs and objectives of our partners, ensuring that [Company Name] receives maximum value and return on investment.
    
                    </p>
                </div>

            </div>
        </div>  
        <div className="whitespace-normal  m-10 overflow-hidden dark:bg-slate-700">
            <div className="flex flex-col sm:flex-row items-center gap-10 relative"> 
                {/* <Image 
                  src={circle}
                  alt="leaf image"
                  className="absolute z-10 top-[-50px] right-[0px] bg-no-repeat object-cover object-center"
                />  */}
                <div className="basis-2/3 p-4">
                  <p className="font-medium text-xl mt-2  text-yellow-800">
                  We believe that a partnership between your company and JV Ventures has the potential to create a mutually beneficial relationship that not only promotes wellness but also generates positive brand exposure and fosters community engagement.

                  <br />We would love the opportunity to discuss this partnership further and explore how we can work together to create meaningful and impactful wellness experiences for our participants.

                  <br />Please feel free to reach out to me us to schedule a meeting or discuss any questions you may have. 

                  <br />Thank you for considering this partnership opportunity. We look forward to the possibility of working together to inspire and empower individuals to live happier, healthier lives, while positively impacting those around them
                  at home and work.

                  </p>
                </div>  
                <div className="relative basis-1/3 whitespace-normal">
                    <Image
                        className="w-full h-full object-contain object-cover"
                        src={partner_3_img}
                        alt="retreat image"   
                    />
                    
                </div>
                
            </div>
        </div> 
      </div>
    </div>
  );
}
