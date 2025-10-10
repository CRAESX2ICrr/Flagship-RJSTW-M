"use client";
import { useState } from "react";
import Link from "next/link"; 
import useBGblur from "@/hooks/BGblur";                                     // Import BGblur hook

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useBGblur(isOpen, 6);                                                     // Apply bgblur when mobile menu is open

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-teal-900/70 border-b border-white/20 shadow-lg py-4 px-8 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-2">
          <img src="/file.svg" alt="Logo" className="w-12 h-12 object-contain" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-white font-medium text-lg">
          <Link href="/" className="hover:text-orange-400 transition">Home</Link>
          <Link href="/brands" className="hover:text-orange-400 transition">Brands</Link>
          <Link href="/phones" className="hover:text-orange-400 transition">Phones</Link>
          <Link href="/compare" className="hover:text-orange-400 transition">Compare</Link>
          <Link href="/about" className="hover:text-orange-400 transition">About</Link>
        </nav>


        {/* Right Section: Title */}
        <h1 className="hidden md:block text-xl font-semibold text-white tracking-wide">
          Flagship Sail
        </h1>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Mobile Menu + Overlay */}
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-200"
          >
          </div>

          <div className="
              md:hidden fixed top-[100px] left-1/2 -translate-x-1/2
              w-[92%] bg-gradient-to-b from-teal-900/90 to-teal-800/90
              backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl
              p-5 animate-fadeSlideDown transition-all duration-300 ease-out z-50"
          >
            
          <nav className="flex flex-col items-center space-y-4 text-white font-medium text-lg">
            <Link href="/" onClick={() => setIsOpen(false)} className="w-full text-center py-2 rounded-lg hover:bg-white/10 transition-all">Home</Link>
            <Link href="/brands" onClick={() => setIsOpen(false)} className="w-full text-center py-2 rounded-lg hover:bg-white/10 transition-all">Brands</Link>
            <Link href="/phones" onClick={() => setIsOpen(false)} className="w-full text-center py-2 rounded-lg hover:bg-white/10 transition-all">Phones</Link>
            <Link href="/compare" onClick={() => setIsOpen(false)} className="w-full text-center py-2 rounded-lg hover:bg-white/10 transition-all">Compare</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="w-full text-center py-2 rounded-lg hover:bg-white/10 transition-all">About</Link>
          </nav>

          </div>
        </>
      )}
    </header>
  );
}
