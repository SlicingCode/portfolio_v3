import { motion } from 'framer-motion';
import loader from '../assets/images/spin.svg';
import { AiOutlineHome } from 'react-icons/ai';

const Main = () => {
  return (
    <div className='w-full flex justify-center flex-col'>
      <div className='w-full h-min flex justify-center'>
        <motion.a
          initial={{
            y: -200,
            transition: { type: 'spring', duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: 'spring', duration: 1.5, delay: 1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <AiOutlineHome className='text-white text-xl md:text-3xl mt-4 cursor-pointer ml-7 md:ml-0' />
        </motion.a>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { type: 'easeIn', duration: 5, delay: 1 },
        }}
        className='w-full h-full flex justify-center items-center flex-col ml-5 md:ml-0'>
        <div>
          <img
            className='loader w-48 md:w-full cursor-pointer'
            src={loader}
            alt='loader'></img>
        </div>
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='cursor-pointer select-none'>
          click here
        </motion.span>
      </motion.div>
      <motion.div
        initial={{
          y: 200,
          transition: { type: 'spring', duration: 1.5, delay: 1 },
        }}
        animate={{
          y: 0,
          transition: { type: 'spring', duration: 1.5, delay: 1 },
        }}
        className='w-full h-min flex justify-around mb-5 ml-5 md:ml-0'>
        <motion.h1
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='cursor-pointer select-none'>
          About
        </motion.h1>
        <motion.h1
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='cursor-pointer select-none'>
          Skills
        </motion.h1>
      </motion.div>
    </div>
  );
};
export default Main;
