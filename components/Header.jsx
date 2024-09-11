'use client'
import React, { useMemo } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header = () => {
    const socialLinks = useMemo(() => [
        { Icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
        { Icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
        { Icon: FaEnvelope, href: "mailto:lukecoleman123@gmail.com", label: "Email" },
    ], []);

    const textureStyle = {
        backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
    };

    return (
        <section id="home" className="relative mx-auto h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#3A51ED] via-[#6A5ACD] to-[#9966FE] font-poppins">
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10" style={textureStyle}></div>

            {/* Existing background animation */}
            <div className="absolute inset-0 opacity-30">
                <div className="animate-pulse-slow absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
                <div className="animate-pulse-slow absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl" style={{animationDelay: '2s'}}></div>
                
                {/* Animated lines */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-slide"></div>
                    <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-slide-reverse"></div>
                </div>
            </div>
            
            <div className="relative z-10 text-center text-white max-w-4xl px-4">
                <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
                    <span className=" text-white">
                        Front End Developer
                    </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8">
                    Hi, I'm <span className="font-semibold">Luke Andrew Coleman</span>, a passionate Front End Developer
                    <br />based in Bradford, West Yorkshire
                </p>
                <div className="flex gap-6 justify-center items-center">
                    {socialLinks.map(({ Icon, href, label }) => (
                        <SocialIcon key={label} Icon={Icon} href={href} label={label} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const SocialIcon = ({ Icon, href, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
       className="text-white hover:text-[#FF6B6B] transition-colors duration-300 shadow">
        <Icon className="w-8 h-8" />
    </a>
);

export default Header;
