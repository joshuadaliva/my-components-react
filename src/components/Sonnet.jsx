import {InfoIcon } from "lucide-react"
import { useState } from "react"

const Sonnet = () => {

    const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
        <button className="btn-primary font-semibold" onClick={() => setIsVisible(!isVisible)}>click me</button>
        <div className={`${isVisible ? 'visible translate-x-0 right-2' : ' translate-x-full'} duration-300 fixed bottom-2 right-0 border border-gray-300 rounded-md p-3 bg-white flex gap-2`}>
            <InfoIcon color="#4ade80 "/>
            <p>You successfully clicked this</p>
        </div>
    </div>
  )
}

export default Sonnet