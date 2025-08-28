import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className="text-black flex justify-between py-2 px-5 mx-3 my-5 items-center border border-gray-400 rounded-full">
        <p className="font-bold text-xl">Cathy's</p>
        <div className="flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>  
  );
};

export default Navbar;
