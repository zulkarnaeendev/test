import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-6 border-b border-white/10 bg-[#1b1b1b] text-white relative z-10">
      <div className="flex items-center gap-6">
        <div className="text-[38px]">P</div>
        <div className="flex gap-4 text-sm text-gray-400">
          <span>f</span>
          <span>t</span>
          <span>in</span>
        </div>
      </div>
      <nav className="flex gap-10 text-sm tracking-widest">
        <NavLink to="/" className="hover:text-orange-500">HOME</NavLink>
        <NavLink to="/projects" className="hover:text-orange-500">PROJECTS</NavLink>
        <NavLink to="/awards" className="hover:text-orange-500">AWARDS</NavLink>
        <NavLink to="/testimonials" className="hover:text-orange-500">TESTIMONIALS</NavLink>
        <NavLink to="/blog" className="hover:text-orange-500">BLOG</NavLink>
        <NavLink to="/contact" className="hover:text-orange-500">CONTACT</NavLink>
      </nav>
      <div className="text-gray-400 text-sm">
        +23(15) 500 83 68
      </div>

    </header>
  );
};

export default Navbar;