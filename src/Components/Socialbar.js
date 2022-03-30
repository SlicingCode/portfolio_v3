import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

const Socialbar = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { type: 'easeIn', duration: 3, delay: 2 },
      }}
      className='w-[40px] fixed bottom-0 left-[40px] right-auto z-10 hidden md:flex'>
      <ul className='flex flex-col items-center m-0 p-0 space-y-10 text-white'>
        <motion.li whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
          <a
            href='https://github.com/dAppTechie'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-[#ff7f50] cursor-pointer'>
            <FiGithub />
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
          <a
            href='https://twitter.com/SlicingCode'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-[#ff7f50] cursor-pointer'>
            <FiTwitter />
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
          <a
            href='https://www.linkedin.com/in/parkerchadlee/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-[#ff7f50] cursor-pointer'>
            <FiLinkedin />
          </a>
        </motion.li>
        <li className='text-white h-40 border'>
          <hr />
        </li>
      </ul>
    </motion.div>
  );
};
export default Socialbar;
