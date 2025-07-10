import React from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative px-6 py-4 min-h-screen flex flex-col items-center justify-between overflow-hidden text-black">
      {/* Glassmorphic Overlay */}
      <div className="absolute inset-0 bg-gray-200 backdrop-blur-md z-0" />

      {/*  Floating Blobs */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full opacity-50 blur-2xl z-0"
        animate={{ x: 60, y: 80 }}
        transition={{
          duration: 8,
          yoyo: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full opacity-60 blur-2xl z-0"
        animate={{ x: 60, y: 80 }}
        transition={{
          duration: 8,
          yoyo: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-500 rounded-full opacity-50 blur-2xl z-0"
        animate={{ x: 60, y: 80 }}
        transition={{
          duration: 8,
          yoyo: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-pink-500 rounded-full opacity-60 blur-2xl z-0"
        animate={{ x: -60, y: -80 }}
        transition={{
          duration: 10,
          yoyo: Infinity,
          ease: "easeInOut",
        }}
      />

      <Navbar />
      {/* Hero Content */}
      <div className="z-[5] text-center flex-1 flex flex-col justify-center items-center px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">
          Loop.AI Event 2025
        </h2>
        <p className="text-lg text-black md:text-xl mt-4 max-w-xl">
          Join Africa’s boldest creators at the intersection of AI and
          storytelling.
        </p>
        <button className="mt-6 px-6 py-3 bg-black backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium hover:bg-white/30 hover:border-black hover:text-black transition">
          Join the Waitlist
        </button>
      </div>

      <div className="z-10 mb-10 text-base font-medium text-black">
        August 30 · Virtual
      </div>
    </section>
  );
};

export default Hero;
