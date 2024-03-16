import React,{useState} from 'react';
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className="text-white flex justify-between items-center h-8 max-w-[1240px] text-2xl mx-auto px-4   ">
        <h1 className="w-full text-3xl font-bold text-white">AVESA</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 hover:underline hover:decoration-[#67e8f9]  hover:duration-150 '><a href="#">Home</a></li>
            <li className='p-4 hover:underline hover:decoration-[#67e8f9]  hover:duration-150'><a href="">About</a></li>
            <li className='p-4 hover:underline hover:decoration-[#67e8f9]  hover:duration-150'><a href="">Courses</a></li>
            <li className='p-4 hover:underline hover:decoration-[#67e8f9]  hover:duration-150'><a href="">Contact</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav?  <TiThMenu size={30}/>: <RxCross2 size={30}/>}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[40%] border-r border-r-gray-600 bg-gray-900 h-full ease-in-out duration-500':'fixed left-[-100%]'}>
            <h1 className="w-full text-3xl font-bold text-white m-4">Event</h1>
            <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-700'>Home</li>
            <li className='p-4 border-b border-gray-700'>About</li>
            <li className='p-4 border-b border-gray-700'>TimeLine</li>
            <li className='p-4 border-b border-gray-700'>Contact</li>
            </ul>
            </div>
    </div>
  )
}

export default Navbar;