import Container from "@/components/container";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "@/sections/about";
import Image from "next/image";
import Project from "@/sections/project";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <>
            <Container className="flex items-center justify-center h-screen">
                <Navbar/>
                <Hero/>
                <About/>
                <Project/>
                <Contact/>
            </Container>
            <div className="w-full">
                <Footer/>
            </div>
        </>
    );
}
