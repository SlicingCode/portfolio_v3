import { Left, Main, Right } from './components';
import './App.css';

function App() {
  return (
    <div className='bg-[#000] w-full height-fix md:min-h-screen flex overflow-hidden'>
      <Left />
      <Main />
      <Right />
    </div>
  );
}

export default App;
