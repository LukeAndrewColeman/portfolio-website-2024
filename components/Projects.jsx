'use client'
import React from 'react';
import Image from 'next/image';
import recipeImage from '@/public/recipehub.png';
import codeSnippetsImage from '@/public/codesnippets.png';
import todoImage from '@/public/todoapp.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FiExternalLink } from 'react-icons/fi'; // Add this import
import Link from 'next/link'; // Assuming you're using Next.js

const Projects = () => {
  const projects = [
    {
      title: 'Recipe Hub',
      description: 'Recipe Hub is a website that provides a way of organising all your recipes, which can be filtered and organised by cuisine. The website is hosted on a shared sever.',
      image: recipeImage,
      technologies: ['Craft CMS', 'JavaScript', 'PHP', 'Tailwind'],
      link: 'https://recipeapp.lukeacoleman.com/',
    },
    {
      title: 'Todo App',
      description: 'Todo App is a JavaScript application that helps users organize their to-do lists. The app allows users to create, filter, mark as complete, and delete todos.',
      image: todoImage,
      technologies: ['HTML & CSS','JavaScript', 'GitHub Pages'],
      link: 'https://lukeandrewcoleman.github.io/Todo-List/',
    },
    {
      title: 'Code Snippets',
      description: 'Code Snippets is a website that provides a way of organising all your code snippets for various programming languages. The website is hosted on Netlify and has a Supabase backend.',
      image: codeSnippetsImage,
      technologies: ['React', 'Tailwind', 'Supabase', 'Netlify'],
      link: 'https://code-snippets.netlify.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 scroll-mt-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="90" cy="10" r="30" fill="#3A51ED" fillOpacity="0.05" />
          <circle cx="10" cy="90" r="20" fill="#FF6B6B" fillOpacity="0.1" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#3A51ED] tracking-tight">Personal Projects</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          loop
          className="custom-swiper" // Change this to a regular class name
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group h-[420px] flex flex-col">
                <div className="relative h-48">
                  <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <button className="py-2 px-4 bg-[#FF6B6B] hover:bg-[#ff8c8c] transition-colors duration-300 text-white rounded-md">View Project</button>
                    </Link>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow overflow-auto">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-[#3A51ED] bg-opacity-10 text-[#3A51ED] px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;