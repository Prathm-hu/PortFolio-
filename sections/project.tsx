import React from 'react'
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        img: "/images/project1.png",
        title: "3D Portfolio",
        description: "It is a portfolio I have made using React, ThreeJs and GSAP. You can show case your projects and also you can use the contact section and contact to me directly."
    },
    {
        img: "/images/project2.png",
        title: "Movie Searcher",
        description: "It's a Website where you can search your every favourite movies. It is a full stack for database I have use appwrite."
    }
]

const Project = () => {
    return (
        <section id="projects" className="mt-[150px] scroll-mt-[100px]">
            <h1 className="text-center text-2xl md:text-5xl">Projects</h1>
            <span className="block mx-auto mt-5 h-1 w-25 rounded-full bg-gradient-to-r from-gray-600 to-white"/>
            <p className="mt-10 text-xl text-center">Here you will find some of the personal projects that I created
                with each project <br/> containing
                its own case study.</p>
            <div className="flex flex-col gap-12 mt-20">

                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 w-full"
                    >
                        {/* Image Card */}
                        <div className="bg-white shadow-lg rounded-xl p-4 w-full md:w-[500px] flex justify-center">
                            <Image
                                src={project.img}
                                alt={`Project ${index + 1}`}
                                width={450}
                                height={350}
                                className="rounded-lg object-cover"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="w-full md:w-[500px] text-center md:text-left">
                            <h1 className="text-2xl font-semibold mb-2">{project.title}</h1>
                            <p className="text-gray-700">{project.description}</p>
                        </div>
                    </div>
                ))}

            </div>


        </section>
    )
}
export default Project
