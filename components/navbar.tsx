"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Links = [
  { href: "#home", name: "Home" },
  { href: "#about", name: "About" },
  { href: "#projects", name: "Projects" },
  { href: "#contact", name: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-neutral-800 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex max-w-7xl mx-auto items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl md:text-2xl font-semibold hover:scale-105 transition-all duration-300">
            Prathmesh
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {Links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-white font-medium hover:text-neutral-400 transition duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu (Visible on mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-neutral-700 px-4 py-4">
          <div className="flex flex-col gap-4">
            {Links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white font-medium hover:text-neutral-400 transition duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
