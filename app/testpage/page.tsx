"use client";
import { useState } from "react";

export default function Hero() {
    const [open, setOpen] = useState(false);

    return (
      <section className="relative w-full min-h-screen bg-[linear-gradient(to_bottom_right,#FE6B6C,#FBD065,#10D4A1,#118AB3)] overflow-hidden">
        
        {/* Heading */}
        <div className="pt-16 md:pt-24 px-6 text-center">
            <h1 className="font-syne text-4xl md:text-6xl text-white text-center leading-tight">
                <span className="block font-bold tracking-tighter">I believe the purpose of life is</span>
                <span className="block font-medium tracking-tighter">to seek inspiration in pursuit of craft.</span>
            </h1>
        </div>
  
        {/* Floating nav */}
        <nav className="font-syne font-medium hidden md:flex absolute bottom-14 left-1/2 -translate-x-1/2 bg-white/40 backdrop-blur-md rounded-full px-6 py-3 flex gap-6 text-md font-medium">
          <a href="#">About</a>
          <a href="#">Adventures</a>
          <a href="#">Ideas</a>
          <a href="#">Photos</a>
          <a href="#">Library</a>
        </nav>

        {/* Mobile button */}
        <button
            onClick={() => setOpen(!open)}
            className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/40 backdrop-blur-md rounded-full p-4 z-20"
        >
            ☰
        </button>

        {/* Mobile menu overlay */}
        {open && (
            <div className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center gap-6 text-white text-xl z-10">
            <a href="#">About</a>
            <a href="#">Adventures</a>
            <a href="#">Ideas</a>
            <a href="#">Photos</a>
            <a href="#">Library</a>
            </div>
        )}
      
      </section>
    );
  }