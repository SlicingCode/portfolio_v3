import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsArrowRightShort } from 'react-icons/bs';
import chadImg from '../assets/images/chad.png';

const About = () => {
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

  return (
    <motion.div ref={ref} animate={controls} className='flex flex-col'>
      <h1 className='text-white main-text md:text-2xl antialiased font-bold tracking-wide mt-7 flex items-center space-x-4'>
        <span className='text-[#ff7f50] md:text-xl mr-2'>01. </span>About Me{' '}
        <hr className='md:w-80 w-40 opacity-50' />
      </h1>
      <div className='flex text-white secondary-text flex-col md:flex-row'>
        <div className='flex flex-col'>
          <p className='md:w-3/4 mt-10 leading-normal tracking-wide antialiased'>
            {' '}
            I'm a <span className='text-[#ff7f50]'>Humanitarian</span>,
            <span className='text-[#ff7f50]'> Environmentalist</span> and{' '}
            <span className='text-[#ff7f50]'>Full-Stack Developer</span> that
            loves to travel and write code. I've had the opportunity to work in{' '}
            <span className='text-[#ff7f50]'>UI, UX</span>,{' '}
            <span className='text-[#ff7f50]'>Front-end</span> and
            <span className='text-[#ff7f50]'> Back-end</span> for multiple
            businesses small and large where I helped design, develope and
            launch their online e- commerce presence
          </p>
          <p className='mt-5 antialiased'>
            Here are a few technologies I’ve been working with recently:
          </p>

          <div className='flex mt-5 space-x-5'>
            <ul className='flex antialiased flex-col'>
              <li className='flex items-center'>
                <BsArrowRightShort className='text-[#ff7f50]' />
                JavaScript
              </li>
              <li className='flex items-center'>
                <BsArrowRightShort className='text-[#ff7f50]' />
                TypeScript
              </li>
              <li className='flex items-center'>
                <BsArrowRightShort className='text-[#ff7f50]' />
                Node.js
              </li>
            </ul>
            <ul className='flex antialiased flex-col'>
              <li className='flex items-center'>
                <BsArrowRightShort className='text-[#ff7f50]' />
                React.js
              </li>
              <li className='flex items-center'>
                <BsArrowRightShort className='text-[#ff7f50]' />
                Framer Motion
              </li>
              <li className='flex items-center'>
                <BsArrowRightShort className='text-[#ff7f50]' />
                Next.js
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full mt-5 flex justify-center'>
          <div className='md:w-[305px] md:h-[356px] w-[200px] h-[234px] border-4 border-[#ff7f50] rounded-lg relative mt-5 md:-mt-10 md:mr-10 '>
            <motion.img
              whileHover={{ x: 15, y: 15 }}
              src={chadImg}
              alt='chad'
              className='absolute md:w-[300px] md:h-[351px] w-[200px] h-[234px] -left-4 -top-4 rounded-lg cursor-pointer'
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default About;
