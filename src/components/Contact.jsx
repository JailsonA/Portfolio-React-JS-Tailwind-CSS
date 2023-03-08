import React from 'react'

//import contact data
import {contact} from '../data'

const Contact = () => {
  return (
    <section id='contact' className='section bg-primary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center mb-24'>
            <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-[1.5rem] before:hidden before:lg:block'>Seremos breves a responder</h2>
        </div>

        <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
            {/* info */}
            <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
                {
                    contact.map((item, index) => {
                        const {icon, title, subtitle, description}  = item;
                        return <div key={index} className='flex flex-col mx-auto lg:mx-0  lg:flex-row gap-x-4 '>
                            <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl mx-auto lg:mx-0'>
                            {icon}
                            </div>
                            <div className='text-center lg:text-left'>
                                <h4 className='font-body text-xl mb-1'>{title}</h4>
                                <p className='mb-1'>{subtitle}</p>
                                <p className='text-accent italic'>{description}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            {/* Contact form*/}
            <div>
                <form className='space-y-8 w-full max-w-[780px]'>
                    <div className='flex gap-8'>
                        <input className='input rounded-2xl' type="text" placeholder='Your Name' />
                        <input className='input rounded-2xl' type="email" placeholder='Your Email@email.com' />
                    </div>
                    <input type="text" className="input rounded-2xl" placeholder='Subject'/>
                    <textarea name='mesage' className='textarea rounded-2xl' placeholder='Your message'></textarea>
                    <button className='btn btn-lg bg-accent hover:bg-accent-hover rounded-2xl' >Enviar</button>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
