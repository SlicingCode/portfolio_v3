import { motion } from 'framer-motion';

const Bottom = () => {
  return (
    <motion.div
      initial={{
        y: 200,
        transition: { type: 'spring', duration: 1.5, delay: 1 },
      }}
      animate={{
        y: 0,
        transition: { type: 'spring', duration: 1.5, delay: 1 },
      }}
      className='w-full h-min flex justify-around mb-5'>
      <motion.h1
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='cursor-pointer select-none main-text md:text-xl text-white'>
        About
      </motion.h1>
      <motion.h1
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='cursor-pointer select-none main-text md:text-xl text-white'>
        Skills
      </motion.h1>
    </motion.div>
  );
};
export default Bottom;
