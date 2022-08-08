import React from 'react'

//import image 

import Image from '../assets/img/about.webp'

const About = () => {
  return (
   <section className='section bg-tertiary'>
     <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-24'>
       <img className='rounded-2xl object-cover h-full w-[566px] md:mx-auto lg:mx-0' src={Image} alt="" />
       <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
        <div className='flex flex-col'>
         <h2 className='text-3xl lg:text-4xl 
         font-medium lg:font-extrabold mb-3 
         before:content-about relative 
         before:absolute before: opacity-40
         before:-top-[2rem] before:hidden
         before:lg-block'
         >
           Mustee
         </h2>
         <p className='mb-4 text-accent'>Freelance Web Developer </p>
         <hr className='mb-8 opacity-5' />
         <p className='mb-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et inventore saepe nisi esse obcaecati nam sapiente nemo voluptas temporibus eum. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit! 
         </p>
        </div>
        <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all rounded-xl'>
        Contact me
       </button>
       </div>
      </div>
     </div>
   </section>
  );
};

export default About