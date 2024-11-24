import { Bell, BoxIcon, Info, Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";

const Header = () => {

    const [dark , setDark] = useState(false)

    const toggleDarkMode = () => {
        setDark(!dark)
        document.body.classList.toggle("dark")
    }

  return (
    <header className="fixed top-0 left-0 md:left-64 right-0 p-4 md:p-2 border-b-[1px] dark:bg-slate-800 bg-white  shadow-sm dark:border-none flex md:justify-between items-center">
      {dark ? <Menu className="cursor-pointer md:hidden" color="white"/> : <Menu className="cursor-pointer md:hidden" />}
      <h1 className=" text-lg ml-3 font-myfont dark:text-white">Dashboard</h1>
      <div className="hidden md:flex gap-4 items-center">
        <div className="flex gap-2 items-center border-[1px] dark:bg-slate-600 cursor-pointer shadow-sm border-slate-900/20 rounded-lg px-2 p-1" 
            onClick={toggleDarkMode}
        >
          {dark? <Moon size={20} color="white"  /> : <Sun size={20}/>}
          <p className="text-sm font-bold dark:text-white">{dark ? "Dark Mode" : "White Mode"}</p>
        </div>
        <p className="text-slate-900/20 dark:text-slate-300/20">|</p>
        {dark? <Bell size={17} color="white"/> : <Bell size={17} color="black"/>}
        {dark? <Info size={17} color="white"/> : <Info size={17} color="black"/>}
        <p className="text-slate-900/20 dark:text-slate-300/20">|</p>
        <img
          src="public/vite.svg"
          alt="this is an image"
          className="rounded-full bg-slate-900/20"
        />
        <div>
          <h1 className="font-medium tracking-tight font-myfont dark:text-white">
            Joshua Daliva
          </h1>
          <p className="text-sm text-slate-500 font-myfont dark:text-slate-400">Developer</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
