import { useState } from "react";
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon , } from '@heroicons/react/24/solid'
import {  CommandLineIcon} from '@heroicons/react/24/outline'

import { LINKS } from "../data";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <CommandLineIcon className='w-7 h-7 text-blue-600' />
                    <span>Analin Flores</span>
                </div>
                {/* Menu icon */}
                <div onClick={handleClick} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* linke items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        LINKS.map((link) => (
                            <li key={link.id} className='md:ml-8 md:my-0 my-7 font-semibold'>
                                <NavLink to={link.path} className={({ isActive }) =>
                                    isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" : "text-gray-800 hover:text-blue-400 duration-500"
                                } >{link.name}</NavLink>
                            </li>))
                    }
                    <button className='btn  text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  '>Download cv</button>
                </ul>
                {/* button */}
            </div>
        </div>
    )
}
