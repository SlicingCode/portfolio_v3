import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import loader from '../assets/images/spin.svg';

const Main = () => {
  return (
    <div className='w-full flex justify-center flex-col h-full'>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { type: 'easeIn', duration: 2, delay: 1 },
        }}
        className='w-full h-full flex justify-center items-center flex-col'>
        <div>
          <Link to='/intro'>
            <img
              className='loader w-48 md:w-full cursor-pointer'
              src={loader}
              alt='loader'></img>
          </Link>
        </div>
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='cursor-pointer select-none main-text text-white'>
          <Link to='/intro'>click here</Link>
        </motion.span>
      </motion.div>
    </div>
  );
};
export default Main;
