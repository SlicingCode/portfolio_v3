import { Leftdefault, Top } from './index';
import bankEth from '../assets/images/banketh.png';
import slackClone from '../assets/images/slackclone.png';

import { VscGithub } from 'react-icons/vsc';

const Work = () => {
  return (
    <div className='flex bg-black'>
      <Leftdefault />
      <div className='flex flex-col w-full h-full -ml-5 md:ml-0'>
        <Top />
        <div className='flex justify-center items-center flex-col'>
          <div className='card lg:card-side bg-base-100 shadow-xl m-5 md:w-3/5'>
            <figure>
              <img src={bankEth} alt='Landing Page' className='w-96 h-96' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title main-text'>
                Bank of Ethereum Landing Page
              </h2>
              <p className='secondary-text'>
                Built on top of ReactJS, with tailwindcss
                <hr className='mt-2 mb-2' />
                #ReactJs #TailwindCss #Ethereum
              </p>

              <div className='card-actions justify-between items-center'>
                <a href='https://github.com/dAppTechie/bank-of-ethereum'>
                  <VscGithub className='text-white text-4xl' />
                </a>
                <button className='btn btn-primary'>Visit</button>
              </div>
            </div>
          </div>
          <div className='card lg:card-side bg-base-100 shadow-xl m-5  md:w-3/5'>
            <figure>
              <img src={slackClone} alt='Web App' className='w-96 h-96' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title main-text'>Slack Clone</h2>
              <p className='secondary-text'>
                Built on top of ReactJS, Redux, Styled components, and Firebase
                Hooks
                <hr className='mt-2 mb-2' />
                #ReactJs #styled-components #Redux #Firebase
              </p>
              <div className='card-actions justify-between items-center'>
                <a href='https://github.com/dAppTechie/slack-clone'>
                  <VscGithub className='text-white text-4xl' />
                </a>
                <button className='btn btn-primary'>Visit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
