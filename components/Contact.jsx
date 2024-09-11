import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="-10" cy="10" r="20" fill="#3A51ED" fillOpacity="0.05" />
                    <polygon points="-5,100 20,80 45,100" fill="#3A51ED" fillOpacity="0.05" />
                    <circle cx="100" cy="100" r="25" fill="#3A51ED" fillOpacity="0.05" />
                </svg>
            </div>
            <div className="container max-w-[800px] py-10 bg-gradient-to-r from-[#3A51ED] to-[#9966FE] mx-auto flex flex-col items-center rounded-xl relative z-10">
                <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
                <p className="w-[80%] text-center mx-auto">I'm always open to exploring new opportunities within web development. Whether you have a potential job offer or simply want to connect, I'd love to hear from you. Feel free to reach out using the button below.</p>
                <a href="mailto:lukecoleman123@gmail.com">
                    <button className="py-2 px-6 mt-10 bg-[#FF6B6B] hover:bg-[#ff8c8c] transition-colors duration-300 text-white font-bold rounded-3xl shadow">Get in Touch</button>
                </a>
            </div>
        </section>
    );
};

export default Contact;