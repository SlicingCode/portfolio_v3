import { motion } from 'framer-motion';

import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';

import arrowSvg from '../assets/images/Arrow.svg';

const Left = () => {
  return (
    <div className='w-min flex flex-col justify-between height-fix md:min-h-screen md:pl-4 md:pr-4 pl-1 pr-1'>
      <motion.h1
        initial={{
          y: -200,
          transition: { type: 'spring', duration: 1.5, delay: 1 },
        }}
        animate={{
          y: 0,
          transition: { type: 'spring', duration: 1.5, delay: 1 },
        }}
        className='text-white logo-text md:text-3xl text-2xl pt-4 pl-2'
        tabIndex={1}>
        CP
      </motion.h1>
      <motion.h1
        initial={{
          x: -200,
          transition: { type: 'spring', duration: 1.5, delay: 1 },
        }}
        animate={{
          x: 0,
          rotate: -90,
          transition: { type: 'spring', duration: 1.5, delay: 1 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='text-white main-text -rotate-90 cursor-pointer md:text-xl focus:outline-none select-none'>
        <a>Wip</a>
      </motion.h1>
      <motion.h1
        initial={{
          x: -200,
          transition: { type: 'spring', duration: 1.5, delay: 1 },
        }}
        animate={{
          x: 0,
          rotate: -90,
          transition: { type: 'spring', duration: 1.5, delay: 1 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='text-white main-text -rotate-90 cursor-pointer md:text-xl focus:outline-none select-none'>
        <a>Work</a>
      </motion.h1>
      <motion.div
        initial={{
          y: 250,
          transition: { type: 'spring', duration: 1.5, delay: 1 },
        }}
        animate={{
          y: 0,
          transition: { type: 'spring', duration: 1.5, delay: 1 },
        }}
        className='text-white flex flex-col items-center space-y-4'>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <FiGithub className='cursor-pointer md:text-xl' />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <FiLinkedin className='cursor-pointer md:text-xl' />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <FiTwitter className='cursor-pointer md:text-xl' />
        </motion.a>
        <img src={arrowSvg} alt='arrow' className='h-24' />
      </motion.div>
    </div>
  );
};
export default Left;
