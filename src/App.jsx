import Sidebar from './components/Sidebar'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import Buttons from './components/Buttons'
import Sonnet from './components/Sonnet'
import DarkMode from './components/DarkMode'
import Dashboard from './Dashboard/Dashboard'
import Main from './Dashboard/Main.jsx'


const App = () => {
  return (
    // <div className='p-2 pt-20 min-h-screen bg-gradient-to-r flex flex-col justify-center items-center from-violet-800 to-violet-700'>
    //   {/* <Sidebar/> */}
    //   {/* <Accordion/> */}
    //   {/* <Dropdown /> */}
    //   {/* <Navbar /> */}
    //   {/* <Buttons/> */}
    //   {/* <Modal /> */}
    //   {/* <Sonnet /> */}
    //   {/* <DarkMode /> */}
    // </div>
    <div>
      {/*<Dashboard />*/}
    <Main />
    </div>
  )
}

export default App