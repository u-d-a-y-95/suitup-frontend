import Image from "next/image";

const Hero = () => {
  return (
    <div className="sm:flex gap-6 sm:h-[400px] md:h-[500px] lg:h-[600px] sm:mt-6">
      <div className="h-[400px] sm:h-full bg-teal-100 sm:basis-9/12"></div>
      <div className="flex sm:flex-col sm:basis-3/12 h-[300px] sm:h-full gap-4 mt-4 sm:m-0">
        <div className="relative basis-1/2 sm:basis-7/12 h-full">
          <Image src="/assets/img/banner-3.webp" fill alt="banner3" />
          <div className="absolute bg-white bottom-3 w-11/12 left-3 px-4 py-3 uppercase font-bold rounded-sm hover:bg-gray-700 group">
            <h4 className="group-hover:text-white">Get the hottest styles</h4>
            <h3 className="text-lg text-[#6fcfb8]">at 70% off!</h3>
          </div>
        </div>
        <div className="uppercase basis-1/2 sm:basis-5/12  h-full bg-[#6fcfb8] flex flex-col justify-center items-center text-white">
          <p className="text-2xl tracking-wider font-bold [word-spacing:5px] text-center">
            last chance
          </p>
          <p>up to 60% off</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
