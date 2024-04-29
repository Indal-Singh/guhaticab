import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";



function Navbar() {
const [dropdown, setDropdown] = useState(false);
const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-gray-100">
      <div className="container mx-auto lg:px-3 w-full">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2"> 
            <div><h2 className="text-primary font-bold text-3xl hover:text-red-500 cursor-pointer">GuwahatiCab</h2><h4 className="font-bold text-1xl text-red-500 font-style: italic font-family:Courier New text-align:right;" >Quality-Value-Trust</h4></div>
           </div>
           </div>
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
  
          <li className="hover:text-red-500 text-lg leading-10 cursor-pointer font-style: bold">
          <Link to={'/'}>Home</Link>
            </li>
            <li className="hover:text-red-500 text-lg leading-8 cursor-pointer font-style: bold">
          <Link to={'/about'}>About</Link>
            </li>
            <li className="hover:text-red-500 text-lg leading-8 cursor-pointer font-style: bold">
          <Link to={'/book'}>Book Now</Link>
            </li>
            <li className="hover:text-red-500 text-lg leading-8 cursor-pointer font-style: bold">
          <Link to={'/contact'}>Contact Us</Link>
            </li>
            
           
            <li className="bg-primary rounded shadow h-12 px-6 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary flex justify-center font-style:bold">
                <Link to={'/login'}>Login</Link>
            </li> 
          </ul>
          {dropdown ? (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              <MdClose />
            </div>
          ) : (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              <HiMenuAlt3 />
            </div>
          )}
        </div>
        {dropdown && (
          <div className="lg:hidden w-full fixed top-24 bg-primary transition-all">
            <div className="w-full flex flex-col items-baseline gap-4">
              <ul className="flex flex-col justify-center w-full">
                <li
                  className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                 <Link to={'/'}>Home</Link>
                </li>
                <li
                  className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  <Link to={'/about'}>About Us</Link>
                </li>
                <li
                  className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  <Link to={'/book'}>Book Now</Link>
                </li>
                <li
                  className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                 <Link to={'/contact'}>Contact Us</Link>
                </li>
               
            <li className="bg-primary rounded shadow h-12 px-6 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary flex justify-center font-style:bold">
                <Link to={'/login'}>Login</Link>
            </li> 
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
