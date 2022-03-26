import { Outlet } from 'react-router-dom';
import { Top, Left, Right, Bottom } from './components';
import './App.css';

function App() {
  return (
    <div className='bg-[#000] w-full height-fix md:min-h-screen flex overflow-hidden'>
      <Left />
      <div className='w-full h-full flex flex-col'>
        <Top />
        <Outlet />
        <Bottom />
      </div>
      <Right />
    </div>
  );
}

export default App;
