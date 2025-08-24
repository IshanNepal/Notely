import Spline from '@splinetool/react-spline';
import { StoreIcon } from 'lucide-react';

const NoNotesPages = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center overflow-x-hidden bg-accent-content">
        <section className='Card flex justify-center flex-col items-center shadow-md shadow-primary bg-base-300 p-8 rounded-2xl sm:w-[25rem]'>
          <div className="Graphics rounded-full bg-primary-content p-6 text-primary">
            <StoreIcon size={40}/>
          </div>
        <div className="Text flex flex-col items-center justify-center p-1">
            <span>No Notes Currently</span>
            <span>Create Notes to See them ! </span>            
        </div>
        <div className="Action text-primary bg-accent-content p-4 rounded-full shadow-xs mt-3">
            <button>CreateNote</button>
        </div>
    </section>
    </main>
  );
};

export default NoNotesPages;
