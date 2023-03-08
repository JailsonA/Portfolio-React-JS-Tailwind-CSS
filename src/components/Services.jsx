import React from "react";

//import services data
import { services } from "../data";

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto ">
        {/* section title */}
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-16 before:hidden before:lg:block ">
            Confira os nosos serviços
          </h2>
        </div>
        {/* item grid */}
        <div className="grid lg:grid-cols-4 gap-8" >
            { 
                services.map((service, index) => {
                    const {icon, name, description} = service;
                    return (<div className="bg-secondary p-6 rounded-2xl" key={index}>
                            {/* Icons */}
                            <div className="text-accent rounded-sm  h-12 flex justify-center items-center mb-14 text-[28px]" >
                                {icon}
                            </div>
                            {/* name */}
                            <h4 className="text-xl mb-2 font-medium flex justify-center items-center" >{name}</h4>
                            {/* Description */}
                            <p className="text-center">{description}</p>
                    </div>)
            })}
        </div>
      </div>
    </section>
  );
};

export default Services;
