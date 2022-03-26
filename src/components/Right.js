import { motion } from 'framer-motion';

const Right = () => {
  return (
    <div className='w-min flex flex-col height-fix md:min-h-screen'>
      <motion.h1
        initial={{
          x: 200,
          transition: { type: 'spring', duration: 1.5, delay: 1 },
        }}
        animate={{
          x: 0,
          transition: { type: 'spring', duration: 1.5, delay: 1 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='text-white main-text cursor-pointer md:text-xl focus:outline-none select-none pt-4 pr-4 hidden md:flex'>
        <a>Contact</a>
      </motion.h1>
      <div className='h-full flex md:justify-center items-center ml-1 md:ml-0'>
        <motion.h1
          initial={{
            x: 200,
            transition: { type: 'spring', duration: 1.5, delay: 1 },
          }}
          animate={{
            x: 0,
            rotate: 90,
            transition: { type: 'spring', duration: 1.5, delay: 1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='text-white main-text rotate-90 cursor-pointer md:text-xl focus:outline-none select-none'>
          <a>Blog</a>
        </motion.h1>
      </div>
    </div>
  );
};
export default Right;
