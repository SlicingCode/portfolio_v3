import Navbar from './Components/Navbar';
import Socialbar from './Components/Socialbar';
import Emailbar from './Components/Emailbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Work from './Components/Work';

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-[#0D0D0D] w-full'>
      <Navbar />
      <Socialbar />
      <Emailbar />
      <Hero />
      <section
        id='about'
        className='flex justify-center flex-col items-start my-0 mx-auto w-4/5 md:w-8/12 mt-40'>
        <About />
      </section>
      <section
        id='experience'
        className='flex justify-center flex-col items-center my-0 mx-auto w-4/5 md:w-8/12 mt-32'>
        <Experience />
      </section>
      <section
        id='work'
        className='flex justify-center flex-col items-start my-0 mx-auto w-4/5 md:w-8/12 mt-32'>
        <Work />
      </section>
    </div>
  );
}

export default App;
