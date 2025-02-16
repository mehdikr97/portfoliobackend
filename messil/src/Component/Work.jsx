import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import workimg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';

const Work = () => {
  const workRefs = useRef([]);

  useEffect(() => {
    gsap.from(workRefs.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div
      name='work'
      className='w-full md:h-full bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-4'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {[workimg, realEstate, workimg, realEstate, workimg, realEstate].map((img, index) => (
            <div
              key={index}
              ref={el => (workRefs.current[index] = el)}
              style={{ backgroundImage: `url(${img})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effects */}
              <div className='opacity-0 group-hover:opacity-80'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React js
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;