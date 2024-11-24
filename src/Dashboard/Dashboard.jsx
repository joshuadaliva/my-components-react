import Sidebar from "./Sidebar";
import Header from "./Header";
import { Filter, User } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="min-h-screen w-full bg-slate-100 dark:bg-slate-700 md:ml-64 pt-20">
        <Header />
        <div className="flex justify-end mx-10 cursor-pointer">
          <div className="flex ring-1 bg-white ring-black/20 p-1 items-center gap-2 rounded-md px-4">
            <Filter size={20} />
            <p className="font-myfont font-bold text-[12px]">Filter</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 mx-10 my-4">
          <div className="bg-white rounded-lg ring-1 ring-black/10 shadow-md  p-5 md:p-2 lg:p-5 flex gap-4">
            <div className=" px-4 bg-teal-300 rounded-md flex items-center">
              <User color="white" size={40} />
            </div>
            <div>
              <h1 className="font-myfont font-semibold text-slate-600 text-[15px]">
                Total Borrowed Money
              </h1>
              <h1 className="font-myfont font-bold text-slate-600 text-[20px]">
                10
              </h1>
              <div className="flex gap-2">
                <p className="font-myfont text-[12px] text-slate-400">
                  vs yesterday
                </p>
                <div className="bg-green-300/20 ring-1 ring-green-400 rounded-md px-2">
                  <p className="font-myfont text-[12px] text-green-800]">12%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg ring-1 ring-black/10 shadow-md p-5 md:p-2 lg:p-5 flex gap-4">
            <div className=" px-4 bg-red-500 rounded-md flex items-center">
              <User color="white" size={40} />
            </div>
            <div>
              <h1 className="font-myfont font-semibold text-slate-600 text-[15px]">
                Total Borrowed Money
              </h1>
              <h1 className="font-myfont font-bold text-slate-600 text-[20px]">
                10
              </h1>
              <div className="flex gap-2">
                <p className="font-myfont text-[12px] text-slate-400">
                  vs yesterday
                </p>
                <div className="bg-green-300/20 ring-1 ring-green-400 rounded-md px-2">
                  <p className="font-myfont text-[12px] text-green-800]">12%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg ring-1 ring-black/10 shadow-md p-5 md:p-2 lg:p-5 flex gap-4">
            <div className=" px-4 bg-green-400 rounded-md flex items-center">
              <User color="white" size={40} />
            </div>
            <div>
              <h1 className="font-myfont font-semibold text-slate-600 text-[15px]">
                Total Borrowed Money
              </h1>
              <h1 className="font-myfont font-bold text-slate-600 text-[20px]">
                10
              </h1>
              <div className="flex gap-2">
                <p className="font-myfont text-[12px] text-slate-400">
                  vs yesterday
                </p>
                <div className="bg-green-300/20 ring-1 ring-green-400 rounded-md px-2">
                  <p className="font-myfont text-[12px] text-green-800]">12%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white md:col-span-2 rounded-lg ring-1 ring-black/10 shadow-md  p-5">
            <h1 className="font-myfont font-semibold text-slate-600 text-[15px] mb-3">
              Analytics
            </h1>
            <h1 className="font-myfont font-bold text-slate-600 text-[20px]">
              10
            </h1>
            <div className="flex gap-2">
              <p className="font-myfont text-[12px] text-slate-400">
                vs yesterday
              </p>
              <div className="bg-green-300/20 ring-1 ring-green-400 rounded-md px-2">
                <p className="font-myfont text-[12px] text-green-800]">12%</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg ring-1 ring-black/10 shadow-md  p-5">
            <h1 className="font-myfont font-semibold text-slate-600 text-[15px] mb-3">
              Total Borrowers
            </h1>
            <h1 className="font-myfont font-bold text-slate-600 text-[20px]">
              10
            </h1>
            <div className="flex gap-2">
              <p className="font-myfont text-[12px] text-slate-400">
                vs yesterday
              </p>
              <div className="bg-green-300/20 ring-1 ring-green-400 rounded-md px-2">
                <p className="font-myfont text-[12px] text-green-800]">12%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
