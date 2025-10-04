import { IoDiamond } from "react-icons/io5";
import Spline from "@splinetool/react-spline";
import { MdArrowOutward } from "react-icons/md";

export const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] overflow-hidden relative">
      {/* Left Content */}
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-3xl ml-[5%] z-10 mt-20 md:mt-32 lg:mt-0"
      >
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center text-white gap-x-2 text-sm sm:text-base">
            <IoDiamond />
            INTRODUCING
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-6 text-white tracking-wider mb-6">
          BUILDING THE WEB <br /> ONE LINE AT A TIME
        </h1>

        <p className="text-base text-gray-400 sm:text-lg tracking-wider max-w-[25rem] lg:max-w-[40rem] mb-8">
          I’m a frontend developer passionate about creating fast, responsive,
          and user-friendly web experiences. From interactive UIs to scalable
          applications, I turn ideas into clean, functional code.
        </p>

        <div className="flex gap-4">
          <a
            href="#"
            className="group text-white flex items-center gap-2 border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full text-sm sm:text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
          >
            Documentation{" "}
            <MdArrowOutward className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#"
            className="group text-black flex items-center gap-2 border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full text-sm sm:text-lg font-semibold tracking-wider transition-all duration-300 bg-gray-300 hover:text-black hover:bg-white"
          >
            Get Started{" "}
            <MdArrowOutward className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Right Content (Spline) */}
      <div className="w-full lg:w-1/2 relative flex justify-center items-center">
        <Spline
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="2500"
          className="w-full  h-[400px] sm:h-[500px] lg:h-[800px]"
          scene="https://prod.spline.design/yAcohlfMVM7WPvsW/scene.splinecode"
        />
      </div>
    </main>
  );
};
