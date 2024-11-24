import { Menu } from "lucide-react"

const Dashboard2 = () => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex fixed h-full left-0 top-0 bg-blue-400 w-64">
        <h1>Sidebar</h1>
      </div>
      <div className="bg-slate-100 w-full md:ml-64 border-2 pt-24">
        <header className="fixed right-0 left-0 md:left-64 top-0 flex justify-between bg-white shadow-sm p-4">
          <h1>logo</h1>
          <ul className="hidden md:flex gap-4">
            <li>Dashboard</li>
            <li>Home</li>
            <li>About</li>
          </ul>
          <Menu className="md:hidden"/>
        </header>
        <div className="h-screen w-52 bg-pink-400 m-3">
          <h1>content goes here</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard2


// import React, { useState } from 'react';

// const Dashboard2 = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 transition-transform transform ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } md:translate-x-0 md:block w-64`}
//       >
//         <h2 className="text-xl mb-8">Dashboard2 Sidebar</h2>
//         {/* Sidebar content here */}
//         <ul>
//           <li className="mb-4">Menu Item 1</li>
//           <li className="mb-4">Menu Item 2</li>
//           <li className="mb-4">Menu Item 3</li>
//         </ul>
//       </div>

//       {/* Main Content Area */}
//       <div className="flex-1 md:ml-64">
//         {/* Fixed Navbar */}
//         <nav className="fixed top-0 left-0 right-0 bg-blue-600 text-white p-4  md:left-64">
//           <div className="flex items-center justify-between">
//             <h1 className="text-xl"> Navbar</h1>
//             {/* Mobile Menu Button */}
//             <button
//               onClick={toggleSidebar}
//               className="block md:hidden text-white focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </nav>

//         {/* Scrollable Content */}
//         <div className="mt-16 p-4 overflow-y-auto bg-gray-100">
//           <div className="space-y-6">
//             <h2 className="text-2xl">Content Section 1</h2>
//             <p>Some content here...</p>

//             <h2 className="text-2xl">Content Section 2</h2>
//             <p>More content here...</p>
//             <h2 className="text-2xl">Content Section 1</h2>
//             <p>Some content here...</p>

//             <h2 className="text-2xl">Content Section 2</h2>
//             <p>More content here...</p>
//             <h2 className="text-2xl">Content Section 1</h2>
//             <p>Some content here...</p>

//             <h2 className="text-2xl">Content Section 2</h2>
//             <p>More content here...</p>
//             <h2 className="text-2xl">Content Section 1</h2>
//             <p>Some content here...</p>

//             <h2 className="text-2xl">Content Section 2</h2>
//             <p>More content here...</p>
//             <h2 className="text-2xl">Content Section 1</h2>
//             <p>Some content here...</p>

//             <h2 className="text-2xl">Content Section 2</h2>
//             <p>More content here...</p>
//             <h2 className="text-2xl">Content Section 1</h2>
//             <p>Some content here...</p>

//             <h2 className="text-2xl">Content Section 2</h2>
//             <p>More content here...</p>

//             {/* Add more content sections here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard2;



