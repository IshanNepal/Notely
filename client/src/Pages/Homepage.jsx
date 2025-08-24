import { PenBox, Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Homepage = () => {
  const [notes, setNotes] = useState([]);
  const usehandlefetch = async () => {
    try{
      // Calling the API
      const res = await fetch(' http://127.0.0.1:5000/api')
      
      if(!res.ok) {
        console.log('res not ok', res)
        toast.error('Unsucessfull attempt at fetching notes!')
      }
      
      // parsing the json
      const data =  await res.json();
      const Notes = data.notes;
      setNotes(Notes);
      toast.success('Sucessfully fetched Notes!')
    }
    catch (e){
      console.log('error occured!')
      console.log(e)
      toast.error('Unsucessfull Request!')
      
    }
  }
    function clampText(text) {
      return text.length > 50 
        ? text.slice(0, 50) + "..." 
        : text;
  }


  useEffect(() => {
    usehandlefetch()
  }, [])
  return (
    <main className='bg-secondary-content overflow-x-hidden w-full h-screen'>
        <section className='m-8 flex justify-center items-center '>
          <table className='shadow-md shadow-primary bg-base-200 rounded-2xl flex-col items-center justify-center sm:w-[60rem]'>
            <tbody className=''>
              {notes?.map((note, idx) => (
                <tr key={idx} className='p-4 grid grid-cols-4 gap-4  justify-items-center hover:bg-accent rounded-2xl hover:cursor-pointer hover:transition-transform duration-75 m-4'>
                  <td className='font-bold justify-items-start'>{note.id}</td>
                  <td className='font-bold'>{note.title}</td>
                  <td className='font-semibold'>{clampText(note.content)}</td>
                  <td>
                    <div className="actions flex gap-2">
                      <button className='text-red-700 bg-red-300 rounded-xl p-2 hover:cursor-pointer hover:scale-105'>
                        <Trash size={20} />
                      </button>
                      <button className='text-primary bg-primary-content p-2 rounded-xl hover:cursor-pointer hover:scale-105'>
                        <PenBox size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
        </section>
    </main>
  )
}

export default Homepage;