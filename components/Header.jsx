"use client";
import React, { useMemo } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Header = () => {
	const socialLinks = useMemo(
		() => [
			{
				Icon: FaGithub,
				href: "https://github.com/LukeAndrewColeman",
				label: "GitHub",
			},
			{
				Icon: FaLinkedin,
				href: "https://www.linkedin.com/in/luke-andrew-coleman/",
				label: "LinkedIn",
			},
			{
				Icon: FaEnvelope,
				href: "mailto:lukecoleman123@gmail.com",
				label: "Email",
			},
		],
		[]
	);

	return (
		<section id="home" className="mt-10">
			<div className="mx-auto container py-24 rounded-xl flex items-center justify-center overflow-hidden bg-gradient-to-r from-luke-dark-blue to-luke-light-blue">
				<div className="z-10 text-center text-white max-w-4xl px-4">
					<h1 className="font-bold text-5xl md:text-6xl lg:text-8xl mb-6">
						Full Stack Web Developer
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl mb-8">
						Hi, I'm Luke Andrew Coleman, a dedicated web developer
						from Bradford, West Yorkshire, with a passion for
						creating innovative and impactful digital experiences.
					</p>
					<div className="flex gap-6 justify-center items-center">
						{socialLinks.map(({ Icon, href, label }) => (
							<SocialIcon
								key={label}
								Icon={Icon}
								href={href}
								label={label}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

const SocialIcon = ({ Icon, href, label }) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		aria-label={label}
		className="text-white hover:text-luke-green transition-colors duration-300 shadow"
	>
		<Icon className="w-8 h-8" />
	</a>
);

export default Header;
