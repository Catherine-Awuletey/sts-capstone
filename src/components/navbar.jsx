import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";


const Navbar = () => {
  return (
      <nav className="text-black flex justify-between py-2 px-5 mx-3 my-5 items-center border border-gray-400 rounded-full">
        {/* <p className="font-bold text-xl">Cathy's</p> */}
        <img src={Logo} alt="Logo" className="h-10 w-10 rounded-full"/>
        <div className="flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>  
  );
};

export default Navbar;
