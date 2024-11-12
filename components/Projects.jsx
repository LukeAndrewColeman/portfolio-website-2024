"use client";
import React from "react";
import Image from "next/image";
import recipeImage from "@/public/recipehub.png";
import codeSnippetsImage from "@/public/codesnippets-new.png";
import todoImage from "@/public/todoapp.png";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Recipe Hub",
      description:
        "Recipe Hub is a website that provides a way of organising all your recipes, which can be filtered and organised by cuisine. The website is hosted on a shared sever.",
      image: recipeImage,
      technologies: ["Craft CMS", "JavaScript", "PHP", "Tailwind"],
      link: "https://recipeapp.lukeacoleman.com/",
    },
    {
      title: "Code Snippets",
      description:
        "Code Snippets is a website that provides a way of organising all your code snippets for various programming languages. The website is hosted on a vps with coolify and has a MySQL database.",
      image: codeSnippetsImage,
      technologies: ["NextJS", "Tailwind", "Prisma", "MySQL"],
      link: "https://codesnippets.lukeacoleman.com/",
    },
    {
      title: "Todo App",
      description:
        "Todo App is a JavaScript application that helps users organize their to-do lists. The app allows users to create, filter, mark as complete, and delete todos.",
      image: todoImage,
      technologies: ["HTML & CSS", "JavaScript", "GitHub Pages"],
      link: "https://lukeandrewcoleman.github.io/Todo-List/",
    },
  ];

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="absolute inset-0 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-luke-light-blue tracking-tight">
          Personal Projects
        </h2>
        <div class="flex gap-6 flex-wrap justify-center">
          {projects.map((project, index) => (
            <div className="bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group flex flex-col max-w-[400px]">
              <div className="relative h-48">
                <Image src={project.image} alt={project.title} layout="fill" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="py-2 px-4 bg-luke-green hover:bg-luke-hover transition-colors duration-300 text-white rounded-full">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow overflow-auto">
                <h3 className="text-2xl font-bold mb-3 text-luke-green">
                  {project.title}
                </h3>
                <p className="text-luke-dark-blue mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-luke-light-blue bg-opacity-10 text-luke-light-blue px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
