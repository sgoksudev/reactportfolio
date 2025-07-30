"use client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="../image.png"
            alt="image"
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 
            transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              {/**
               *  Link: https://ui.aceternity.com/components/text-generate-effect
               *
               *  change md:text-6xl, add more responsive code
               */}

              <p className="text-center md:tracking-wider mb-4 md:text-xl lg:text-4xl font-light tracking-widest text-sm">
                Hi! I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  Sena Goksu Kanik
                </span>{" "}
                <br />
                Frontend Developer
              </p>
              <div className="flex flex-row items-center justify-center gap-6 px-5">
                <a href="#projects">
                  <MagicButton
                    title="Show my work"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>

                <a href="/sgoksu.pdf">
                  <MagicButton
                    title="Download CV"
                    icon={<FaDownload />}
                    position="left"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
