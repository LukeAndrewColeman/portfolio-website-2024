import React from "react";

const Contact = () => {
	return (
		<section
			id="contact"
			className="pt-10 pb-20 text-white relative overflow-hidden bg-luke-white"
		>
			<div className="shadow max-w-[800px] py-10 bg-gradient-to-r from-luke-dark-blue to-luke-light-blue mx-8 md:mx-auto flex flex-col items-center rounded-xl relative z-10">
				<h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
					Contact Me
				</h2>
				<p className="w-[80%] text-center mx-auto">
					I'm always open to exploring new opportunities within web
					development. Whether you have a potential job offer or
					simply want to connect, I'd love to hear from you. Feel free
					to reach out using the button below.
				</p>
				<a href="mailto:lukecoleman123@gmail.com">
					<button className="py-2 px-6 mt-10 bg-luke-green hover:bg-luke-hover transition-colors duration-300 text-white font-bold rounded-3xl shadow">
						Get in Touch
					</button>
				</a>
			</div>
		</section>
	);
};

export default Contact;
