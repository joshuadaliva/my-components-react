import user from '../assets/user-3.png'
import { useState } from 'react'
import { Settings, Users, Section } from 'lucide-react'

const Dropdown = () => {

    const [IsOpen, setIsOpen] = useState(false)

  return (
    <div className=" h-screen flex flex-col items-center text-white justify-center ">
        <div className='flex flex-col items-center p-3 relative'>
            <img src={user} alt="" className='rounded-full w-20 h-20 cursor-pointer ' onClick={() => setIsOpen(!IsOpen)}/>
            <div className={` bg-white rounded-lg flex flex-col gap-1 p-3 absolute top-[93px] left-10 duration-400 overflow-hidden ${!IsOpen && 'hidden'} `}>
                <div className='flex gap-x-2 cursor-pointer'>
                    <Settings size={24} color='gray'  />
                    <p className='text-black font-semibold'>Setting</p>
                </div>
                <div className='p-[0.9px] bg-gray-200 '></div>
                <div className='flex gap-x-2 cursor-pointer '>
                    <Users size={24} color='gray' />
                    <p className='text-black font-semibold'>User</p>
                </div>
                <div className='p-[0.9px] bg-gray-200 '></div>
                <div className='flex gap-x-2 cursor-pointer '>
                    <Section size={24} color='gray' />
                    <p className='text-black font-semibold'>User</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Dropdown