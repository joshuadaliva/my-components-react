import { ArrowLeft } from "lucide-react"
import { useState } from "react"

const Sidebar = () => {

    const [isOpen , setIsOpen] = useState(true)

  return (
    <div className="flex">
        {/* Sidebar */}
        <div className={` ${isOpen ? 'w-72' : 'w-20' } p-5 shadow-md shadow-slate-700  duration-300 h-screen bg-gradient-to-r from-blue-800 to-blue-900 relative `}>
            <ArrowLeft color="white" size={40} className={`absolute cursor-pointer -right-5 top-5 w-7 border-2 
                border-blue-800  rounded-full bg-blue-900 m-1 ${isOpen && 'rotate-180'}`} 
                onClick={() => setIsOpen(!isOpen)}
            />
            <div className="flex items-center gap-x-2">
                <img src="./public/user-3.png" alt="" style={{width:"40px", height:"40px"}} className=" duration-300 cursor-pointer rounded-full"/>
                <h1 className={`font-semibold text-white text-lg origin-left duration-300 ${!isOpen && "scale-0"}`}>ICE CREAM</h1>
            </div>
        </div>
        {/* dashboard */}
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">Homescreen</div>
    </div>
  )
}

export default Sidebar