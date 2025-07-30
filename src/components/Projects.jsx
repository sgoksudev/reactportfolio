"use client";
import { ExternalLink, ArrowRight } from "lucide-react";
import { project } from "../assets/index.js";
import { FaGithub } from "react-icons/fa6";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-5 max-w-8xl">
      <div className="mx-auto max-w-8xl py-30 px-5 tracking-wide ">
        <h2 className="text-4xl font-light text-white md:text-6xl mb-10">
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-6xl font-light transition-all duration-300 hover:opacity-100 md:text-6xl">
            Projects
          </span>
        </h2>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5 px-5">
          {project.map((project, index) => (
            <div
              key={project.id || index}
              className="group bg-gradient-to-r from-slate-800 via-white-950 font-light rounded-lg overflow-hidden shadow-xs card-hover hover:shadow-blue-900"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-2">
                <div className="flex flex-wrap gap-2 mb-4 justify-center mt-5">
                  {project.iconLists?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium rounded-full"
                    >
                      <img src={tag} alt="tech" className="w-6 h-6 mt-3" />
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-light mb-1 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 mr-5 ml-5  text-gray-300 mt-4">
                  {project.des}
                </p>

                <div className="flex">
                  <div className="absolute bottom-4 right-4 flex space-x-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.link?.includes("github.com") && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white transition-colors duration-300"
                      >
                        <FaGithub
                          size={20}
                          className="text-gray-300 hover:text-white-600 transition-colors duration-300 cursor-pointer"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 text-white">
          <a
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sgoksudev"
          ></a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
