const Contact = () => {
  return (
    <div className='flex flex-col justify-end items-center'>
      <h1 className='text-white main-text md:text-2xl antialiased font-bold tracking-wide mt-7 flex items-center space-x-4'>
        <span className='text-[#ff7f50] md:text-xl mr-2'>05. </span>Contact Me{' '}
        <hr className='md:w-80 w-14 opacity-50' />
      </h1>
      <div className='flex justify-center items-center w-full mt-5 flex-col'>
        <h1 className='md:text-6xl text-white font-extrabold text-4xl'>
          Get in Touch
        </h1>
        <div className='flex justify-center items-center'>
          <p className='secondary-text md:w-2/4 md:mt-4 mt-3 text-center text-white opacity-50'>
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you! I’m always open to new
            opportunities!
          </p>
        </div>
        <div className='md:mt-5 mt-7'>
          <a href='mailto:chad@slicingcode.com?subject=Hello!' tabIndex={10}>
            <button className='btn btn-outline border-[#ff7f50] text-[#ff7f50] hover:bg-[#ff7f50] hover:text-white hover:border-[#ff7f50] main-text antialiased tracking-wider hover:bg-opacity-10'>
              Say hi
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
