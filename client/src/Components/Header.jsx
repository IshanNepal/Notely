import { LayoutGrid, Bell, Notebook,  } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate();
  return (
      <header className='flex justify-between p-4 shadow-md items-center bg-base-200  z-50 shadow-primary sticky top-0'>
        <div className="Main flex gap-4 items-center">
            <LayoutGrid size={30} />
            <div className="Head flex gap-2 items-center">
                <div className="Logo  ">
                    <Notebook size={25}/>
                </div>
                <div className="Text text-xl">
                    <span className='font-bold text-2xl text-primary'>Notely</span>
                    <p>Get Easy Answers!</p>
                </div>
            </div>
        </div>
        <div className="Other flex gap-2">
             <button className='hidden sm:block' onClick={() => navigate('/login')}>
                Login
            </button>
            <input type="text" placeholder='Search Your Poll!' className='p-2 text-center bg-primary-content rounded-3xl outline-none hidden sm:block'/>
            <button className='bg-primary-content p-2 rounded-full '>
                <Bell size={20}/>
            </button>
        </div>
   </header>
  )
}

export default Header