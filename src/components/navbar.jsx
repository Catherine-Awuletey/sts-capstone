import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
      <nav className="text-black flex justify-between py-2 px-5 mx-3 my-5 items-center border border-gray-400 rounded-full">
        {/* <p className="font-bold text-xl">Cathy's</p> */}
        <img src="/src/assets/Logo.jpg" alt="Logo" className="h-10 w-10 rounded-full"/>
        <div className="flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>  
  );
};

export default Navbar;
