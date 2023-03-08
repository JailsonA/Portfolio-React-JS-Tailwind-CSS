import React, {useState, useEffect} from 'react'

//import Link
import {Link, animateScroll as scroll} from 'react-scroll'

//import icons
import { ChevronUpIcon } from '@heroicons/react/outline'

const BackToTopBtn = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 600 ? setShow(true) : setShow(false);
        })
    });

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

  return (
    show && (
        <button onClick={() => scrollToTop()} className='bg-accent w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent-hover text-white fixed right-14 bottom-24 cursor-pointer transition-all'>
            <ChevronUpIcon className='w-6 h-6'/>
        </button>
    )
  )
}

export default BackToTopBtn
