import Link from "next/link";
import React from "react";

const About = () => {
    return (
        <section id="about" className="mt-[300px] scroll-mt-[100px]">
            <h1 className="text-2xl md:text-5xl flex justify-center items-center">
                About Me
            </h1>
            <span className="block mx-auto mt-5 h-1 w-25 rounded-full bg-gradient-to-r from-gray-600 to-white"/>
            <p className=" mt-10 text-xl text-center">
                Here you will find more information about me, what I do, and my current
                skills mostly in terms <br/> of programming and technology.
            </p>
            <div
                className="flex mt-20 flex-col md:flex-row md:justify-between items-center md:items-start text-center md:text-left">
                {/* Left Column */}
                <div className="flex flex-col md:items-start items-center max-w-xl">
                    <h2 className="text-2xl text-[#B892FF]">Get to know me !</h2>
                    <p className="mt-7">
                        I'm A{" "}
                        <span className="text-[#B0B0B0]">Full Stack Focused Developer</span>{" "}
                        <span className="text-[#00FF9D]">building</span> and{" "}
                        <span className="text-[#00FF9D]">managing</span>{" "}
                        <span className="text-[#00FF9D]">Front-end</span> <br/> and{" "}
                        <span className="text-[#00FF9D]">Back-end</span> web-applications
                        with a passion for creating user-friendly and efficient
                        solutions. Checkout some of my work in the{" "}
                        <span className="text-[#B0B0B0]">Projects</span> sections. <br/>
                        <br/>
                        I also like sharing my work online and the content related to what I
                        am <br/> learning or what I am passionate about. You can find me on{" "}
                        <a
                            href="https://www.linkedin.com/in/prathmesh-chaudhari-7a35372ab/"
                            className="text-blue-500 underline"
                        >
                            LinkedIn
                        </a> and <a
                        href="https://x.com/prathmcoder"
                        className="text-blue-500 underline"
                    >
                        Twitter
                    </a>
                        . <br/> <br/>
                        I'm open to <span className="text-[#00FF9D]">Job</span>{" "}
                        opportunities where I can contribute, learn and grow. If <br/> you
                        have a good opportunity that matches my skills and experience then{" "}
                        don't hesitate to{" "}
                        <span className="text-[#00FF9D]">contact</span> me.
                    </p>
                    <Link href="#contact" className="mt-[60px] max-md:flex items-center justify-center">
                        <button className=" bg-neutral-50 text-black px-4 py-2 rounded-lg cursor-pointer ">
                            Contact
                        </button>

                    </Link>
                </div>

                {/* Right Column */}
                <div className="flex flex-col md:items-start items-center mt-10 md:mt-0 max-w-xl">
                    <h2 className="text-2xl text-[#B892FF]">My Skills</h2>
                    <div className="flex flex-col gap-4 mt-5">
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {["HTML", "CSS", "JavaScript", "React", "NextJs"].map(
                                (skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#1E1E1E] text-gray-300 px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-[#2a2a2a] transition"
                                    >
                    {skill}
                  </span>
                                )
                            )}
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {[
                                "Bootstrap",
                                "Express",
                                "Node",
                                "Github",
                                "Responsive Design",
                            ].map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-[#1E1E1E] text-gray-300 px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-[#2a2a2a] transition"
                                >
                  {skill}
                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {["Tailwind Css"].map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-[#1E1E1E] text-gray-300 px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-[#2a2a2a] transition"
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
