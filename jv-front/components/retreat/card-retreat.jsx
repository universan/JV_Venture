import Image from 'next/image';

const CardRetreat = ({title, description, period, imageSrc }) => {
  return (
    <div className="w-[350px]  hover:scale-105 ease-in duration-200 mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-slate-700">
      <div className="flex flex-col items-center">    
        <div className="relative">
          <Image
            width={350} height={250}                        
            className="h-[250px] w-[350px] object-cover cursor-pointer"
            src={imageSrc}
            alt="retreat image"
          />
    
        </div>
        <div className="p-2">
          <div className="capitalize text-cardText font-black text-yellow-800 text-[20px] leading-[30px] dark:text-white">
            {title}
          </div>
        </div>
        <div className="p-2">
          <p className="font-medium text-base p-1  text-yellow-800 dark:text-gray-300">
            {description}
          </p>
        </div>
        <div className="p-2">
          <p className="font-medium text-base p-1  text-yellow-800 dark:text-gray-300">
            {period} 
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardRetreat;
