import { Trash2 } from "lucide-react"
import { useState } from "react"


const Modal = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button className="btn-desctructive flex gap-2" onClick={() => setIsOpen(!isOpen)}><Trash2 /> Show Modal</button>
      <div className={`${isOpen ? 'visible' : 'invisible'} fixed inset-0 bg-black/20 backdrop-blur-xl flex flex-col justify-center items-center `}>
        <div className={`${isOpen? 'scale-100 duration-200':'scale-0 duration-200'}  bg-white rounded-lg p-4 flex flex-col justify-between items-center gap-4`}>
          <h1 className="text-lg">Do you want to delete this item? </h1>
          <div className="flex gap-2">
            <button className="btn-outline text-gray-900" onClick={() => setIsOpen(!isOpen)}>NO</button>
            <button className="btn-desctructive" onClick={() => setIsOpen(!isOpen)}>Delete</button>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Modal