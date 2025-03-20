import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-3">
          <NavLink to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition duration-300">
            MyWebsite
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/" className={({ isActive }) => `hover:text-blue-400 transition duration-300 ${isActive ? "text-yellow-400 font-bold" : ""}`}>
            Home
          </NavLink>
          <NavLink to="/hostels" className={({ isActive }) => `hover:text-blue-400 transition duration-300 ${isActive ? "text-yellow-400 font-bold" : ""}`}>
            Hostels
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `hover:text-blue-400 transition duration-300 ${isActive ? "text-yellow-400 font-bold" : ""}`}>
            About Us
          </NavLink>
          <NavLink to="/fee-payment" className={({ isActive }) => `hover:text-blue-400 transition duration-300 ${isActive ? "text-yellow-400 font-bold" : ""}`}>
            Fee Payment
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <NavLink to="/login" className={({ isActive }) => `hover:text-blue-400 transition duration-300 flex items-center ${isActive ? "text-yellow-400 font-bold" : ""}`}>
            Login
          </NavLink>
          <NavLink to="/signup" className={({ isActive }) => `bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-500 transition duration-300 flex items-center ${isActive ? "bg-yellow-500" : ""}`}>
            Get Started
          </NavLink>
        </div>
        <button className="md:hidden text-blue-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-2">
          <NavLink to="/" className={({ isActive }) => `py-2 hover:text-blue-400 transition duration-300 ${isActive ? "text-yellow-400 font-bold" : ""}`} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/hostels" className={({ isActive }) => `py-2 hover:text-blue-400 transition duration-300 ${isActive ? "text-yellow-400 font-bold" : ""}`} onClick={() => setIsOpen(false)}>
            Hostels
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `py-2 hover:text-blue-400 transition duration-300 ${isActive ? "text-yellow-400 font-bold" : ""}`} onClick={() => setIsOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/fee-payment" className={({ isActive }) => `py-2 hover:text-blue-400 transition duration-300 ${isActive ? "text-yellow-400 font-bold" : ""}`} onClick={() => setIsOpen(false)}>
            Fee Payment
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => `py-2 hover:text-blue-400 transition duration-300 flex items-center ${isActive ? "text-yellow-400 font-bold" : ""}`} onClick={() => setIsOpen(false)}>
            Login
          </NavLink>
          <NavLink to="/signup" className={({ isActive }) => `bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-500 transition duration-300 flex items-center ${isActive ? "bg-yellow-500" : ""}`} onClick={() => setIsOpen(false)}>
            Get Started
          </NavLink>
        </div>
      )}
    </header>
  );
}
