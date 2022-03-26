import { motion } from 'framer-motion';
import me from '../assets/images/chad.png';

const Intro = () => {
  return (
    <div className='flex justify-center items-center w-full h-full flex-col md:flex-row bg-black md:ml-2 md:mr-5 mt-5 mb-5 p-4 md:p-0'>
      <motion.div
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          height: 'fit-content',
          transition: { type: 'easeIn', duration: 3, delay: 1 },
        }}
        className='flex flex-col justify-center items-center md:flex-row md:w-9/12 bg-black rounded-lg border-4 border-gray-500 z-20'>
        <div className='text-white md:w-2/5 p-2 md:p-0'>
          <motion.h1
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,

              transition: { type: 'easeIn', duration: 3, delay: 3 },
            }}
            className='main-text md:text-5xl text-xl mb-3'>
            Chad Parker
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { type: 'easeIn', duration: 3, delay: 3 },
            }}
            className='secondary-text md:text-xl'>
            I'm a Humanitarian, Environmentalist and Full-Stack Developer that
            loves to travel and write code. I've had the opportunity to work in
            UI, UX, Front-end and Back-end for multiple businesses small and
            large where I helped design, develope and launch their online
            e-commerce presence
          </motion.p>
        </div>
        <div className='text-white md:p-4 hidden md:flex'>
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { type: 'easeIn', duration: 3, delay: 3 },
            }}
            src={me}
            alt='me'
          />{' '}
        </div>
      </motion.div>
    </div>
  );
};
export default Intro;
