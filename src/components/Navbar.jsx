import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#f6f2ea]">
      <div className="w-full px-5 md:px-8 py-5 flex items-center justify-between">

        {/* Left Name */}
        <div className="text-lg md:text-base font-bold text-black">
          shrutirautela
        </div>


        {/* Center Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[15px] uppercase font-extrabold text-black">
          <li><Link to="/">HOME</Link></li>
           <li><Link to="/work">WORK</Link></li>
           <li><Link to="/about">ABOUT</Link></li>
           <li><Link to="/resume">RESUME</Link></li>
          <li>
  <HashLink smooth to="/#contact">
    CONTACT
  </HashLink>
</li>
           </ul>

        {/* Right LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shrutirautela/"
          target="_blank"
          rel="noreferrer"
          className="text-lg md:text-base font-bold text-black"
        >
          LinkedIn
        </a>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl font-bold text-black"
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f6f2ea]">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm uppercase font-bold text-black">

           <li><Link to="/">HOME</Link></li>
           <li><Link to="/work">WORK</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/resume">RESUME</Link></li>
          <li>
  <HashLink smooth to="/#contact">
    CONTACT
  </HashLink>
</li>

            <li>
              <a href="https://www.linkedin.com/in/shrutirautela/">
                LINKEDIN
              </a>
            </li>

          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;