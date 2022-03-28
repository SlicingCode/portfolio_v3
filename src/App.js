import Navbar from './Components/Navbar';
import Socialbar from './Components/Socialbar';
import Emailbar from './Components/Emailbar';
import Hero from './Components/Hero';

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-[#0D0D0D] w-full'>
      <Navbar />
      <Socialbar />
      <Hero />
      <Emailbar />
    </div>
  );
}

export default App;
