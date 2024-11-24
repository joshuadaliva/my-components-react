import { Menu } from "lucide-react"
import { useState } from "react"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
        <header className="w-full fixed top-0 left-0 bg-black/20 backdrop-blur-sm p-2 flex justify-between items-center">
            <img src="../public/logo.png" alt="" className="w-36"/>
            <ul className="hidden text-white md:flex gap-4 mr-4">
                <li className="font-semibold hover:bg-blue-500 cursor-pointer rounded-md px-4 py-2">Home</li>
                <li className="font-semibold hover:bg-blue-500 cursor-pointer rounded-md px-4 py-2">Services</li>
                <li className="font-semibold hover:bg-blue-500 cursor-pointer rounded-md px-4 py-2">Team</li>
                <li className="font-semibold hover:bg-blue-500 cursor-pointer rounded-md px-4 py-2">About</li>
            </ul>
            <Menu color="white" size={25} className="cursor-pointer md:hidden m-2" onClick={() => setIsOpen(!isOpen)}/>
        </header>
        <div className={`${isOpen ? 'visible' : 'invisible'} fixed inset-0 bg-black/20 backdrop-blur-sm`}>
            <div className={` ${isOpen ? 'translate-x-0' : 'translate-x-full'} duration-500 fixed right-0 h-full w-4/5 bg-white flex flex-col justify-center items-center`}>
                <Menu className="absolute top-5 right-5 cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
                <h1 className="hover:bg-blue-400 rounded-sm hover:text-white p-2 w-full text-center cursor-pointer">Home</h1>
                <h1 className="hover:bg-blue-400 rounded-sm hover:text-white p-2 w-full text-center cursor-pointer">Services</h1>
                <h1 className="hover:bg-blue-400 rounded-sm hover:text-white p-2 w-full text-center cursor-pointer">Team</h1>
                <h1 className="hover:bg-blue-400 rounded-sm hover:text-white p-2 w-full text-center cursor-pointer">About</h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar