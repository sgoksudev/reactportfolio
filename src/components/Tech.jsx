import React from "react";
import {
  BiLogoBootstrap,
  BiLogoJavascript,
  BiLogoNetlify,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoCss3,
  BiLogoHtml5,
} from "react-icons/bi";
import { motion } from "framer-motion";
import { RiNextjsLine } from "react-icons/ri";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      id="tech"
      className="grid min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>{" "}
      <div className="container px-4">
        <div className="grid grid-cols-6 sm:grid-cols-2 md:grid-cols-3 gap-10 p-5">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <BiLogoReact className="cursor-pointer text-sky-300 transition-all duration-300 hover:translate-y-5 text-[100px]" />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <BiLogoJavascript className="cursor-pointer text-yellow-300 transition-all duration-300 hover:translate-y-5 text-[100px]" />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <BiLogoTypescript className="cursor-pointer text-blue-800 transition-all duration-300 hover:translate-y-5 text-[100px]" />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <BiLogoNetlify className="cursor-pointer text-green-200 transition-all duration-300 hover:translate-y-5 text-[100px]" />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <BiLogoTailwindCss className="cursor-pointer text-sky-400 transition-all duration-300 hover:translate-y-5 text-[100px]" />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <BiLogoBootstrap className="cursor-pointer text-purple-700 transition-all duration-300 hover:translate-y-5 text-[100px]" />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <BiLogoCss3 className="cursor-pointer text-red-600 transition-all duration-300 hover:translate-y-5 text-[100px]" />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <BiLogoHtml5 className="cursor-pointer text-blue-600 transition-all duration-300 hover:translate-y-5 text-[100px]" />
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <RiNextjsLine className="cursor-pointer text-white transition-all duration-300 hover:translate-y-5 text-[100px]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
