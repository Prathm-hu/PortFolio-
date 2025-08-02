import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div id="home" className="mt-[250px] scroll-mt-[2000px] flex flex-col justify-center items-center md:items-start">
      <p className="text-xl md:text-2xl">Hi, my name is </p>
      <h1 className="text-3xl md:text-8xl py-5 font-semibold">
        Prathmesh Chaudhari.
      </h1>
      <h1 className="text-3xl md:text-7xl py-2 text-[#00FF9D] font-semibold">
        I love to build things on the web.
      </h1>
      <p className="mt-[30px] text-xl text-center md:text-start">
        I am a Full Stack Developer loves to build new things on the web and
        learn new technologies. <br />
        And I currently focused on upscaling my skills and upgrading through various new projects. <br />
        I can build a wide range of web applications, with a user friendly interface and a robust backend.
      </p>
      <Link href="#projects" scroll={true} className="max-md:flex items-center justify-center">
      <button className="mt-[50px] bg-neutral-50 text-black px-4 py-2 rounded-lg cursor-pointer ">
        Projects
      </button>
      </Link>
    </div>
  );
};

export default Hero;
