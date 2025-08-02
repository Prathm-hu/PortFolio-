import React from 'react'
import {FaTwitter, FaGithub, FaLinkedinIn} from "react-icons/fa";
import Link from "next/link";


const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300 py-10 px-6 w-full bottom-0">
            <div className="max-w-7xl mx-auto flex px-5 flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                {/* Logo */}
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold text-white">Prathmesh Chaudhari</h1>
                    <p className="text-sm text-gray-400 mt-1">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                {/* Socials */}
                <div className="flex gap-4 text-xl">
                    <Link target="_blank" href="https://x.com/prathmcoder" className="hover:text-white transition">
                        <FaTwitter />
                    </Link>
                    <Link target="_blank" href="https://github.com/Prathm-hu" className="hover:text-white transition">
                        <FaGithub />
                    </Link>
                    <Link target="_blank" href="https://www.linkedin.com/in/prathmesh-chaudhari-7a35372ab/" className="hover:text-white transition">
                        <FaLinkedinIn />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
export default Footer
