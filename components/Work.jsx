import React from 'react';

const workExperience = [
    {
        title: "Web Developer",
        company: "EXTREME MARKETING",
        period: "March 2024 - Present",
        description: "Responsible for developing client websites while following best practices in coding and design. Implemented responsive design strategies to improve user experience on different devices, ensuring cross-browser compatibility and optimizing site performance for smooth interactions."
    },
    {
        title: "Front End Developer",
        company: "WISH AGENCY",
        period: "April 2022 - March 2024",
        description: "Assisted in the development of client websites, adhering to best practices in coding and design principles. Implemented responsive design techniques to enhance user experience across various devices and ensured cross-browser compatibility and optimized website performance for seamless user experiences. I continuously learn and develop my skills to stay current with evolving web technologies."
    },
    {
        title: "Designer / AV Engineer",
        company: "FINITE SOLUTIONS",
        period: "September 2014 - April 2022",
        description: "Responsible for comprehensive system design, documentation, installation, and testing of cutting-edge smart home control systems and intelligent lighting solutions. Led cinema design initiatives and crafted compelling proposals for both cinema and complete smart home systems."
    },
    {
        title: "Electrician",
        company: "J&R ELECTRICAL",
        period: "October 2013 - September 2014",
        description: "Installation and meticulous testing of electrical systems, encompassing power, lighting, and data provisions for both residential and commercial settings ensuring that every aspect adheres to the most stringent standards, guaranteeing excellence in both functionality and safety."
    }
];

const Work = () => {
    return (
        <section id="work" className="scroll-mt-40 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="90" cy="10" r="30" fill="#3A51ED" fillOpacity="0.05" />
                    <circle cx="5" cy="70" r="15" fill="#FF6B6B" fillOpacity="0.1" />
                </svg>
            </div>
            <div className="container mx-auto my-20 px-10 lg:px-32 relative z-10">
                <h2 className="text-4xl font-bold mb-10 text-center text-[#3A51ED]">Work Experience</h2>
                <ol className="relative border-s border-[#9966fe]">
                    {workExperience.map((job, index) => (
                        <li key={index} className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-[#FF6B6B] rounded-full mt-1.5 -start-1.5 border border-[#FF6B6B]"></div>
                            <h3 className="text-lg font-semibold text-[#3A51ED]">{job.title} - {job.company}</h3>
                            <time className="mb-1 text-sm font-light leading-none">{job.period}</time>
                            <p className="mb-4 mt-4 text-base font-normal">{job.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Work;
