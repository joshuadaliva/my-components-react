import { Moon, Sun } from "lucide-react"
import { useState } from "react"


const DarkMode = () => {

  const [dark, setDark] = useState(false)

  const darkModeHandler = () => {
    setDark(!dark)
    document.body.classList.toggle('dark')
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 shadow-lg ring ring-slate-900/5">
        <div>
            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                <img src="../public/vite.svg" alt="" />
            </span>
        </div>
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight"> writes upside-down</h3>
        <p className="text-slate-900 dark:text-slate-400 mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate ullam aspernatur quam reprehenderit quis placeat voluptas eum natus totam!
        </p>
        <button className='group' onClick={() => darkModeHandler()}>
        {
          dark ? <Sun color='white' className={` transition-transform group-hover:rotate-180 duration-500`}/> : <Moon color="black" className={`group-hover:bg-slate-900 rounded-lg group-hover:rotate-180 duration-500`}/>
        }
      </button>

    </div>
  )
}

export default DarkMode