import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../assets/images/logo.svg';

const icon = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(255, 127, 80,0)',
  },
  visible: {
    pathLength: 1,
    stroke: 'rgba(255, 127, 80,1)',
    transition: { type: 'easeIn', duration: 2.5, delay: 1.8 },
  },
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='flex justify-between items-center w-full p-4 sticky top-0 bg-[#0D0D0D] z-20'>
      <a href='#home' className='md:hidden'>
        <img src={Logo} alt='logo' className='h-12 md:hidden' />
      </a>
      <motion.div
        initial={{
          y: -200,
        }}
        animate={{
          y: 0,
          transition: { type: 'spring', duration: 1.5, delay: 1 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='cursor-pointer hidden md:flex'>
        <a href='#home' tabIndex={0}>
          <svg
            width='90'
            height='76'
            viewBox='0 0 90 76'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M45.3099 44.8532C43.1819 44.8532 41.5259 44.1332 40.3419 42.6932C39.1579 41.2372 38.5659 39.1012 38.5659 36.2852C38.5659 33.4692 39.1579 31.3092 40.3419 29.8052C41.5259 28.2852 43.1819 27.5252 45.3099 27.5252C46.7179 27.5252 47.8939 27.8452 48.8379 28.4852C49.7979 29.1252 50.5419 30.0292 51.0699 31.1972L49.4379 32.1812C49.1019 31.3172 48.5899 30.6292 47.9019 30.1172C47.2139 29.5892 46.3499 29.3252 45.3099 29.3252C44.5899 29.3252 43.9419 29.4612 43.3659 29.7332C42.8059 30.0052 42.3259 30.3972 41.9259 30.9092C41.5419 31.4052 41.2459 32.0052 41.0379 32.7092C40.8299 33.3972 40.7259 34.1732 40.7259 35.0372V37.5332C40.7259 39.2612 41.1259 40.6132 41.9259 41.5892C42.7259 42.5652 43.8539 43.0532 45.3099 43.0532C46.3819 43.0532 47.2779 42.7812 47.9979 42.2372C48.7179 41.6772 49.2459 40.9412 49.5819 40.0292L51.1899 41.0372C50.6619 42.2212 49.9019 43.1572 48.9099 43.8452C47.9179 44.5172 46.7179 44.8532 45.3099 44.8532Z'
              fill='#ff7f50'
            />
            <motion.path
              d='M35.1222 16.0805C39.8922 9.16566 50.1078 9.16566 54.8778 16.0805L69.0882 36.6807C74.5795 44.6411 68.8812 55.4946 59.2105 55.4946H30.7895C21.1188 55.4946 15.4205 44.6411 20.9118 36.6807L35.1222 16.0805Z'
              stroke='#ff7f50'
              strokeWidth='2'
              variants={icon}
              initial='hidden'
              animate='visible'
            />
          </svg>
        </a>
      </motion.div>
      <div className='flex'>
        <ul className='text-white w-fit space-x-5 mr-36 hidden md:flex '>
          <motion.li
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='main-text cursor-pointer hover:text-[#ff7f50] tracking-wider select-none'>
            <a href='#about' tabIndex={1}>
              <span className='text-[#ff7f50]'>01.</span> About
            </a>
          </motion.li>
          <motion.li
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
              transition: {
                type: 'spring',
                duration: 1.5,
                delay: 1.2,
              },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='main-text cursor-pointer hover:text-[#ff7f50] tracking-wider select-none'>
            <a href='#experience' tabIndex={2}>
              <span className='text-[#ff7f50]'>02.</span> Experience
            </a>
          </motion.li>
          <motion.li
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
              transition: {
                type: 'spring',
                duration: 1.5,
                delay: 1.3,
              },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='main-text cursor-pointer hover:text-[#ff7f50] tracking-wider select-none'>
            <a href='#work' tabIndex={3}>
              <span className='text-[#ff7f50]'>03.</span> Work
            </a>
          </motion.li>
          <motion.li
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
              transition: {
                type: 'spring',
                duration: 1.5,
                delay: 1.4,
              },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='main-text cursor-pointer hover:text-[#ff7f50] tracking-wider select-none'>
            <a href='#workprogress' tabIndex={4}>
              <span className='text-[#ff7f50]'>04.</span> Wip
            </a>
          </motion.li>
          <motion.li
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
              transition: {
                type: 'spring',
                duration: 1.5,
                delay: 1.5,
              },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='main-text cursor-pointer hover:text-[#ff7f50] tracking-wider select-none'>
            <a href='#contact' tabIndex={5}>
              <span className='text-[#ff7f50]'>05.</span> Contact
            </a>
          </motion.li>
        </ul>
        <div className='flex relative'>
          {!toggleMenu && (
            <motion.div
              initial={{
                rotate: 0,
              }}
              animate={{
                rotate: 180,
                transition: { type: 'easeIn', duration: 2, delay: 0.1 },
              }}>
              <AiOutlineMenu
                className='text-[#ff7f50] text-3xl md:hidden'
                onClick={() => setToggleMenu(true)}
              />
            </motion.div>
          )}

          {toggleMenu && (
            <motion.div
              initial={{
                x: 300,
              }}
              animate={{
                x: 0,
                transition: { type: 'spring', duration: 1, delay: 0 },
              }}
              className='z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md bg-[#333333] text-white'>
              <AiOutlineClose
                className='text-[#ff7f50] text-4xl mr-2'
                onClick={() => setToggleMenu(false)}
              />

              <ul className='text-white flex justify-center w-full items-center flex-col space-y-10 mt-16'>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='main-text cursor-pointer flex flex-col items-center select-none'>
                  <a href='#about'>
                    <span className='text-[#ff7f50]'>01.</span>About
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='main-text cursor-pointer flex flex-col items-center select-none'>
                  <a href='#experience'>
                    <span className='text-[#ff7f50]'>02.</span>Experience
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='main-text cursor-pointer flex flex-col items-center select-none'>
                  <a href='#work'>
                    <span className='text-[#ff7f50]'>03.</span>Work
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='main-text cursor-pointer flex flex-col items-center select-none'>
                  <a href='#workprogress'>
                    <span className='text-[#ff7f50]'>04.</span>Wip
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='main-text cursor-pointer flex flex-col items-center select-none'>
                  <a href='#contact'>
                    <span className='text-[#ff7f50]'>05.</span>Contact
                  </a>
                </motion.li>
              </ul>
              <div className='w-full flex justify-center mt-10'>
                <a href='/resume.pdf'>
                  <button class='btn btn-outline border-[#ff7f50] text-[#ff7f50] hover:bg-[#ff7f50] hover:text-white main-text hover:border-[#ff7f50]'>
                    Resume
                  </button>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
