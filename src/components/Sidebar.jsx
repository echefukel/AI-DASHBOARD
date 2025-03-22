import { FaHome, FaChartPie, FaSignOutAlt, FaBars, FaHamburger  } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);


  // Close Sidebar when a link is clicked (only while on mobile )
    const handleClose = ()=>{
      if(window.innerWidth < 768){
        setIsOpen(false)
      }
    }
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="absolute top-4 left-4 text-white text-2xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 h-screen w-64 bg-gray-800 text-white flex flex-col transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}
        onClick={handleClose}
      >
        <div className="text-2xl font-bold p-6">AI Dashboard</div>
        <nav className="flex-1">
          <ul>
            <li className="p-4 hover:bg-gray-700 flex items-center gap-3 cursor-pointer">
               <Link to='/' className="flex place-items-center gap-3" onClick={handleClose}>
               <FaHome /> Dashboard

               </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center gap-3 cursor-pointer">
              <Link to='/Analytics' className="flex items-center gap-3" onClick={handleClose}>
              <FaChartPie /> Analytics

              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center gap-3 cursor-pointer">
              <Link to='/Settings' className=" flex items-center gap-3" onClick={handleClose}>
              <FaHamburger /> Setting

              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={logout}
          className="p-4 flex items-center gap-3 bg-red-600 hover:bg-red-700"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </>
  );
}

export default Sidebar;
