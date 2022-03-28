import { motion } from 'framer-motion';

const Emailbar = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { type: 'easeIn', duration: 3, delay: 2 },
      }}
      className='w-[40px] fixed bottom-0 left-auto right-[100px] z-10 hidden md:flex h-full'>
      <ul className='flex flex-col items-center justify-end space-y-28'>
        <li className='text-white h-3/5 border'>
          <hr />
        </li>
        <li className='rotate-90'>
          <a className='hover:text-[#F24405] tracking-widest cursor-pointer main-text text-white'>
            chad@slicingcode.com
          </a>
        </li>
        <li className='text-white h-1/5 border'>
          <hr />
        </li>
      </ul>
    </motion.div>
  );
};
export default Emailbar;
