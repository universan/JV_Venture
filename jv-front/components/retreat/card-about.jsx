import Image from 'next/image';

const CardAbout = ({title, description,  imageSrc }) => {
  return (
    <div className="w-[350px]  hover:scale-105 ease-in duration-200 mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-slate-700">
      <div className="flex flex-col items-center">    
        <div className="p-4">
          <div className="capitalize text-cardText font-bold text-yellow-800 text-[20px] leading-[30px] dark:text-white">
            {title}
          </div>
        </div>
        <div className="relative">
          <Image
            width={350} height={150}
            className="w-full object-contain"
            src={imageSrc}
            alt="retreat image"
            
          />
        </div>
        <div className="p-4">
          <p className="font-medium text-base mt-2  text-yellow-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
