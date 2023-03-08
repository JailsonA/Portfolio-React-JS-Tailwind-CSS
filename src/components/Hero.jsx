import React from "react";

// Import woman image
import WomanImg from "../assets/img/banner-woman2.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center
     bg-primary lg:bg-cover lg:bg-center 
     lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <h1 className=" text-4xl text-accent mb-[22px] leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Criamos o que você imagina
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Criamos videoclips, anúncios em vídeo, vídeos para redes sociais,
              vídeos de produtos, vídeos explicativos e muito mais. Somos a
              solução perfeita para dar a vida a sua imaginação.
            </p>
            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all rounded-2xl">Nossos Trabalhos</button>
          </div>
          {/* Right side */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={WomanImg} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
