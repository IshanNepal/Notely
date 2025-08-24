import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateNotePage = () => {
        // Defining States
        const [title, setTitle] = useState('');
        const [content, setContent] = useState('');
        const navigate = useNavigate();

    const handleSumbit = async (e) => {
        e.preventDefault();
        if ((title || content).trim() == "" ){
            return toast.error('All Feilds are Necessary While Creating a note!')
        }
        else if ((title || content).trim() < 5) {
             return toast.error('All Input should be greater than 5 letters!')
        }
        try{
            const res =  await fetch(' http://127.0.0.1:5000/api/add_note', {
                method:"POST",
                 headers: {
                "Content-Type": "application/json",
                },
                body:JSON.stringify({title:title, content:content})
            })
            if (!res.ok) {
                console.log('Res not Ok', res)
                toast.error('Problem in the Response!')
            }

            const data = await res.json()
            console.log(data);
            toast.success('Sucessfull at Creating a note')
            navigate('/')
        }
        catch (e) {
            console.log('error occured', e)
            toast.error('Unsucessfull at creating a Note!')
        }
    }
  return (
    <main className='overflow-x-hidden'>
        <section className='Card-Contianer m-6 flex justify-center'>
            <div className="Card flex flex-col w-fit sm:w-[60rem] h-[32rem] max-h-[80rem] bg-base-200 p-5 rounded-xl shadow-2xs shadow-primary">
                <div className="Title text-xl">
                    <span className='font-bold text-2xl'>Title ➕</span>
                    <input type='text' name="title" id="notetitle" className='w-full outline-none p-2' onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="Content ">
                    <span className='text-2xl font-bold'>Content 🗃️</span>
                    <textarea name="Content" id="noteContent" className='w-full outline-none h-[22rem] p-2' onChange={(e) => setContent(e.target.value)}/>
                </div>
            </div>
        </section>
        <section className="Actions flex justify-end m-4 gap-4 items-center">
            <button className='bg-accent-content text-white p-3 rounded-xl hover:cursor-pointer hover:scale-105 w-[12rem] transition-transform duration-200' onClick={(e)=>handleSumbit(e)}>Create Note</button>
            <button className='bg-primary text-white p-3 rounded-xl hover:cursor-pointer hover:scale-105 w-[12rem] transition-transform duration-200'>Generate Note</button>
        </section>
    </main>
  )
}

export default CreateNotePage