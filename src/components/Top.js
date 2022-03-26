import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiOutlineHome } from 'react-icons/ai';

const Top = () => {
  return (
    <div className='w-full h-min flex justify-center sticky top-0 bg-black z-10'>
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
        <Link to='/'>
          <AiOutlineHome className='text-white text-xl md:text-3xl mt-4 cursor-pointer' />
        </Link>
      </motion.a>
    </div>
  );
};
export default Top;
