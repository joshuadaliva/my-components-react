import { ArrowDown } from "lucide-react"

const SDropDown = ({title, desc, isOpen, onClick}) => {
  return (
    <div>
      <div className="bg-blue-500 p-3 w-96 flex justify-center cursor-pointer gap-5" onClick={onClick}>
        <h1 className="text-white font-bold">{title}</h1>
        <ArrowDown color="white" size={23}/>
      </div>
      <div className={`w-96 ${isOpen ? 'h-28' : 'h-0'} duration-300 bg-white overflow-hidden`}>
        <p className="text-black">{desc}</p>
      </div>
    </div>
  )
}

export default SDropDown