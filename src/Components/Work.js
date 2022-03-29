import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub } from 'react-icons/fi';
import { WorkData } from '../data/Work';

const Work = () => {
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
  const { type, title, desc, tags, visit, github } = WorkData[value];
  return (
    <motion.div ref={ref} animate={controls} className='flex flex-col'>
      <h1 className='text-white main-text md:text-2xl antialiased font-bold tracking-wide mt-7 flex items-center space-x-4'>
        <span className='text-[#F24405] md:text-xl mr-2'>03. </span>My Work{' '}
        <hr className='md:w-80 w-40 opacity-50' />
      </h1>
      <div className='flex mt-10'>
        <div className='w-[350px] h-[350px] bg-[#F24405] relative'>
          {WorkData.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={item.title}
              className='absolute object-cover w-full h-full'
            />
          ))}
          <div className='absolute w-[600px] h-[200px] flex flex-col bg-gray-900 top-20 left-64 drop-shadow-xl p-4 rounded-lg z-10 2'>
            <h1 className='text-[#F24405] flex justify-end w-full tracking-wide antialiased'>
              {type}
            </h1>
            <h1 className='text-white flex justify-end w-full tracking-wide text-xl font-bold antialiased'>
              {title}
            </h1>
            <p className='flex justify-end w-full secondary-text antialiased'>
              {desc}
            </p>
            <ul className='flex justify-end space-x-2'>
              {tags.map((item, index) => (
                <li className='secondary-text text-sm antialiased' key={index}>
                  #{item}
                </li>
              ))}
            </ul>
            <div className='flex justify-end space-x-4 w-full items-center mt-5'>
              <a
                href={github}
                target='_blank'
                rel='noopener noreferrer'
                alt='Bank of Ethereumn'>
                <FiGithub className='text-white text-4xl' />
              </a>
              <a
                href={visit}
                target='_blank'
                rel='noopener noreferrer'
                alt='Bank of Ethereumn'>
                <button className='btn btn-outline border-[#F24405] text-[#F24405] hover:bg-[#F24405] hover:text-white hover:border-[#F24405] main-text antialiased tracking-wider'>
                  Visit
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Work;
