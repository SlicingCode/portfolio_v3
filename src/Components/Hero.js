import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 3, ease: 'easeInOut', delay: 2 },
      }}
      className='flex justify-center flex-col items-start my-0 mx-auto md:w-8/12 w-4/5 mt-20'>
      <h1 className='text-white main-text md:text-8xl text-4xl antialiased font-bold tracking-wide mt-7'>
        Chad Parker
      </h1>
      <h2 className='text-[#F24405] md:text-6xl main-text antialiased font-bold text-3xl tracking-wide mt-7'>
        I build things with code
      </h2>
      <p className='secondary-text text-white md:w-2/4 md:text-2xl antialiased tracking-wider mt-7'>
        I’m a software engineer that is committed to{' '}
        <span className='text-[#F24405]'>humanitarian</span>,
        <span className='text-[#F24405]'> social</span>, and{' '}
        <span className='text-[#F24405]'>environmental causes</span>. I love
        building things with code.
      </p>
      <div className='flex justify-between space-x-5 mt-10'>
        <button className='btn btn-outline border-[#F24405] text-[#F24405] hover:bg-[#F24405] hover:text-white hover:border-[#F24405] main-text antialiased tracking-wider'>
          Resume
        </button>
        <button className='btn btn-outline border-[#F24405] text-[#F24405] hover:bg-[#F24405] hover:text-white hover:border-[#F24405] main-text antialiased tracking-wider'>
          Blog
        </button>
      </div>
    </motion.div>
  );
};
export default Hero;
