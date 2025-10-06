import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold">
        Peace<span className="text-yellow-300">OS</span>
      </div>

      {/* Menu */}
      <ul className="flex gap-6">
        <li className="hover:text-yellow-300 cursor-pointer">Home</li>
        <li className="hover:text-yellow-300 cursor-pointer">Projects</li>
        <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
