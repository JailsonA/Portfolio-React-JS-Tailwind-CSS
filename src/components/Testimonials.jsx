import React from "react";

//import components
import TestimonialSlider from "./TestimonialSlider";

function Testimonials() {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-[9.7rem] before:hidden before:lg:block">
            "Obrigado pela vossa confiança"
          </h2>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
}

export default Testimonials;
