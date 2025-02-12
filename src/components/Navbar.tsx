import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo - Light Theme.png";
import { Login, Menu, Close } from "@mui/icons-material";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu state
    const [isLoginOpen, setLOginIsOpen] = useState(false); // Login State state

    const navLinks = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Service", path: "/service" },
    ];

    return (
        <div className="bg-gradient-to-b from-green-100 to-gray-3">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo */}
                <div>
                    <img className="w-16 md:w-20" src={logo} alt="logo" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-5 text-[1.1rem] text-[#097588]">
                    {navLinks.map((link, index) => (
                        <Link 
                            key={index} 
                            className="px-3 py-1 font-semibold rounded-4xl hover:bg-gradient-to-b hover:from-green-200 hover:to-gray-200 transition-all duration-500" 
                            to={link.path}
                        >
                            {link.title}
                        </Link>
                    ))}
                </ul>
                <div className="flex gap-3">
                    <button className="bg-[#097588] text-white px-3 py-1 rounded" onClick={() => setLOginIsOpen(true)}>
                        Login <Login fontSize="small" />
                    </button>
                    <button 
                        className="bg-[#097588] md:hidden z-1 text-white cursor-pointer px-3 py-1 rounded"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <Close /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/2 backdrop-blur-sm flex flex-col items-center justify-center text-white transform ${isOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-500`}
            >
                <ul className="text-lg space-y-6 text-[1.1rem] text-[#097588]">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link 
                                to={link.path} 
                                className="px-3 py-1 font-semibold rounded-4xl hover:bg-gradient-to-b hover:from-green-200 hover:to-gray-200 transition-all duration-500" 
                                onClick={() => setIsOpen(false)}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Login Page */}
<div className={`fixed top-0 left-0 w-full h-screen bg-black/50 z-40 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${isLoginOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-sm text-center transform transition-all duration-300">
        <h1 className="text-3xl font-bold text-[#097588]">Login</h1>
        <p className="text-gray-600 text-sm mt-1">Welcome back! Please enter your details.</p>

        {/* Login Form */}
        <form className="flex flex-col gap-4 mt-4">
            <input 
                type="text" 
                placeholder="Username" 
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#097588] transition-all duration-300"
            />
            <input 
                type="password" 
                placeholder="Password" 
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#097588] transition-all duration-300"
            />
            <button className="bg-[#097588] cursor-pointer text-white px-4 py-2 rounded-md font-semibold shadow-md hover:scale-105 transition-transform duration-300">
                Login
            </button>
        </form>

        {/* Close Button */}
        <button 
            className="mt-4 text-[#097588] cursor-pointer font-semibold hover:underline transition-all duration-300"
            onClick={() => setLOginIsOpen(false)}
        >
            Close
        </button>
    </div>
</div>

        </div>
    );
};

export default Navbar;
