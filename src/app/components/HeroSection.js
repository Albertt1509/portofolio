"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
              Hello, I'm {""}
            </span>
            Alpha👋
          </h1>
          <TypeAnimation
            sequence={[
              " Front End Web Developer",
              1000,
              "Back End Web Developer",
              1000,
              "Full Stack Web Developer",
              1000,
            ]}
            wrapper="span"
            className="font-bold"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <p className="text-white">
            "I craft captivating digital experiences, blending creativity with
            code to build visually stunning and functional solutions."
          </p>
          <div className="flex flex-col lg:flex-row items-center mx-auto mt-4">
            <button className="px-6 py-3 rounded-full mb-4 lg:mb-0 w-full sm:w-fit lg:mr-4 bg-white hover:bg-slate-200 text-whi bg-gradient-to-br from-blue-500  to-pink-500">
              My CV
            </button>
            <button className="px-6 py-3 rounded-full bg-transparent w-full sm:w-fit hover:bg-slate-800 border border-white">
              Look Me
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-5 lg:mt-0 self-end lg:self-auto">
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mx-auto lg:mx-0">
            <Image
              src="/images/profile.png"
              alt="hero-icon"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
