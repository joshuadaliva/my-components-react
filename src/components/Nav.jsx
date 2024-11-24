import { Menu } from "lucide-react"
import { useState } from "react"


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
        <header className=" fixed w-full top-0 left-0 p-3 bg-black/20 backdrop-blur-lg flex justify-between">
            <img src="../public/logo.png" alt="" className="w-36 cursor-pointer" />
            <ul className="hidden md:flex text-white font-semibold gap-6 cursor-pointer">
                <li className="hover:rounded-md hover:bg-violet-400 py-1 px-3">Dashboard</li>
                <li className="hover:rounded-md hover:bg-violet-400 py-1 px-3">Services</li>
                <li className="hover:rounded-md hover:bg-violet-400 py-1 px-3">Help</li>
            </ul>
            <Menu color="white" className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
        </header>
        <div className={` ${isOpen? 'visible' :'invisible'} fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm ` } onClick={() => setIsOpen(!isOpen)}>
            <div className={`${isOpen? 'translate-x-0' :'translate-x-full'} duration-300 bg-white fixed h-full right-0 w-5/6 flex  flex-col justify-center items-center `}>
                <Menu color="black" className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}/> 
                <h1 className="p-2 font-bold w-full text-center cursor-pointer hover:text-white hover:bg-blue-500">Services</h1>
                <h1 className="p-2 font-bold w-full text-center cursor-pointer hover:text-white hover:bg-blue-500">Dashboard</h1>
                <h1 className="p-2 font-bold w-full text-center cursor-pointer hover:text-white hover:bg-blue-500">Help</h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar