"use client";
import React from "react";
import Image from "next/image";
import recipeImage from "@/public/recipehub.png";
import codeSnippetsImage from "@/public/codesnippets-new.png";
import todoImage from "@/public/todoapp.png";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
	const projects = [
		{
			title: "Code Snippets",
			description:
				"Code Snippets is a website that provides a way of organising all your code snippets for various programming languages. The website is hosted on a vps with coolify and has a MySQL database.",
			image: codeSnippetsImage,
			technologies: ["NextJS", "Tailwind", "Prisma", "MySQL"],
			link: "https://codesnippets.lukeacoleman.com/",
			github: "https://github.com/LukeAndrewColeman/code-snippets-nextjs",
		},
		{
			title: "Recipe Hub",
			description:
				"Recipe Hub is a website that provides a way of organising all your recipes, which can be filtered and organised by cuisine. The website is hosted on a shared sever.",
			image: recipeImage,
			technologies: ["Craft CMS", "JavaScript", "Twig", "Tailwind"],
			link: "https://recipeapp.lukeacoleman.com/",
			github: "https://github.com/LukeAndrewColeman/recipeapp",
		},
		{
			title: "Todo App",
			description:
				"Todo App is a JavaScript application that helps users organize their to-do lists. The app allows users to create, filter, mark as complete, and delete todos.",
			image: todoImage,
			technologies: ["HTML & CSS", "JavaScript", "GitHub Pages"],
			link: "https://lukeandrewcoleman.github.io/Todo-List/",
			github: "https://github.com/LukeAndrewColeman/Todo-List",
		},
	];

	return (
		<section
			id="projects"
			className="py-24 scroll-mt-20 bg-gradient-to-b from-transparent to-luke-light-blue/5"
		>
			<div className="container mx-auto px-4 relative z-10">
				<h2 className="text-5xl font-bold text-center mb-20 text-luke-light-blue tracking-tight">
					Featured Projects
				</h2>
				<div className="space-y-24 max-w-7xl mx-auto">
					{projects.map((project, index) => (
						<div
							key={index}
							className="flex flex-col lg:flex-row lg:gap-8 items-center animate-fade-in"
							style={{ animationDelay: `${index * 200}ms` }}
						>
							{/* Image Container */}
							<div
								className={`w-full lg:w-3/5 ${
									index % 2 === 1 ? "lg:order-2" : ""
								}`}
							>
								<div className="relative aspect-video rounded-lg overflow-hidden">
									<Image
										src={project.image}
										alt={project.title}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw"
										className="object-cover rounded-lg"
										priority={index === 0}
									/>
								</div>
							</div>

							{/* Content Container */}
							<div
								className={`w-full lg:w-2/5 ${
									index % 2 === 1 ? "lg:order-1" : ""
								}`}
							>
								<div className="p-8">
									<div className="flex items-start justify-between mb-4">
										<h3 className="text-3xl font-bold text-luke-light-blue">
											{project.title}
										</h3>
										<div className="flex gap-3">
											<Link
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="hover:scale-110 transition-transform duration-200"
												aria-label={`GitHub repository for ${project.title}`}
											>
												<Github className="w-6 h-6 text-luke-light-blue" />
											</Link>
											<Link
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="hover:scale-110 transition-transform duration-200"
												aria-label={`Visit ${project.title} website`}
											>
												<ExternalLink className="w-6 h-6 text-luke-light-blue" />
											</Link>
										</div>
									</div>
									<p className="text-luke-dark-blue/80 mb-6 leading-relaxed">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 pt-4 border-t border-luke-light-blue/10">
										{project.technologies.map((tech, i) => (
											<span
												key={i}
												className="bg-luke-green/10 text-luke-green px-4 py-1.5 rounded-full text-sm font-medium"
											>
												{tech}
											</span>
										))}
									</div>
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
