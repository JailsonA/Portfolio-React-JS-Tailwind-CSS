import React from "react";

// import image

import Image from "../assets/img/about.webp";

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            src={Image}
            alt="about"
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left ">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                QUEM SOMOS ?
              </h2>
              <p className="mb-4 text-accent">
                O nome DACRIMA STUDIOS hoje define-se pela conjugação dos nomes
                dos membros que deram vida a este projeto.
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                <strong>O QUE FAZEMOS ?</strong> A DACRIMA STUDIOS é uma
                produtora de conteúdo audiovisual, que atua em várias áreas,
                desde o momento da primeira apresentação da ideia, à sua
                elaboração escrita, passando pela filmagem e edição, tendo como
                objetivo entregar um produto final que corresponda exactamente,
                ou que vá para além daquele imaginado. <br /> A DCS também conta
                com um sector que presta serviços na área do marketing digital e
                design gráfico. Deste modo, dispomos de uma vasta oferta de
                serviços, que nesta era cada vez mais digital, são essenciais
                para o desenvolvimento e criação de projetos globais. <br />
                Impulsionamos o seu negócio!
              </p>
            </div>
            <button></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
