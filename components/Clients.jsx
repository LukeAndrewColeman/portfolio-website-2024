import React from 'react';
import Image from 'next/image';

// Image Imports
import Arrow from "@/public/arrow-logo-white.png"
import Alveo from "@/public/alveo-logo-white.png"
import Ugp from "@/public/ugp-white-logo.png"
import Springfield from "@/public/springfield-white-logo.png"
import Christeyns from "@/public/christeyns-logo-white.png"

const Clients = () => {
    const textureStyle = {
        backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
    };

    return (
        <section className="bg-[#3A51ED] py-20 relative">
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10" style={textureStyle}></div>
            
            <div className="container mx-auto flex flex-col items-center relative z-10">
                <h2 className="text-4xl font-bold mb-10 text-center text-white">Clients Worked With</h2>
                <div className="flex flex-wrap justify-center items-center gap-10">
                    <Image src={Arrow} alt="Arrow" height={20} />
                    <Image src={Alveo} alt="Alveo" height={30} />
                    <Image src={Ugp} alt="UGP" height={40} />
                    <Image src={Springfield} alt="Springfield" height={40} />
                    <Image src={Christeyns} alt="Christeyns" height={30} />
                </div>
            </div>
        </section>
    );
};

export default Clients;