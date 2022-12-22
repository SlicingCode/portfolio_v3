import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Job } from '../data/Job.js';
import { BsArrowRightShort } from 'react-icons/bs';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 2, ease: 'easeInOut', delay: 0.5 },
      });
    }
    if (!inView) {
      controls.start({
        opacity: 0,
        y: 50,
        transition: { duration: 2, ease: 'easeInOut', delay: 0.5 },
      });
    }
  }, [controls, inView]);

  const [value, setValue] = useState(0);
  const { company, title, dates, desc } = Job[value];
  return (
    <motion.div ref={ref} animate={controls} className='flex flex-col'>
      <h1 className='text-white main-text md:text-2xl antialiased font-bold tracking-wide mt-7 flex items-center space-x-4'>
        <span className='text-[#ff7f50] md:text-xl mr-2'>02. </span>Professional
        Experience <hr className='md:w-80 w-14 opacity-50' />
      </h1>
      <div className='flex mt-5 '>
        <div className='flex md:justify-start flex-col md:flex-row justify-center w-4/5 md:w-full'>
          <div className='flex md:flex-col'>
            {Job.map((item, index) => (
              <button
                key={index}
                className={
                  index === value
                    ? 'text-[#ff7f50] main-text text-xs antialiased cursor-pointer select-none md:w-40 text-left p-4 md:border-l-[#ff7f50] md:border-l-2 md:border-l-full'
                    : 'text-white main-text text-xs antialiased cursor-pointer select-none md:w-40 text-left p-4 md:border-l-stone-800  md:border-l-2 md:border-l-full'
                }
                onClick={() => setValue(index)}>
                <span>{item.short}</span>
              </button>
            ))}
          </div>
          <div className='w-full flex flex-col justify-center mt-2 md:mt-0 ml-5 md:ml-0'>
            <h3 className='main-text text-base text-white'>
              {title} <span className='text-[#ff7f50]'>@ {company}</span>
            </h3>
            <h4 className='main-text text-sm mt-1 text-white opacity-50'>{dates}</h4>
            {desc.map((item) => (
              <ul key={item} className='md:mt-1 mt-3'>
                <li className='text-white flex items-center antialiased secondary-text md:text-sm'>
                  <BsArrowRightShort className='text-[#ff7f50] hidden md:flex' />
                  {item}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Experience;
