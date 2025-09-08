import React, {useState} from "react";
import {FaRocket, FaBars, FaTimes, FaAngleDown} from "react-icons/fa";
import {logo} from "../../data/assetes";
import Button from "../reusable/Button";
import {Link} from "react-router-dom";
import {navMenu} from "../../data/data";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(0);

  return (
    <nav className="w-full pt-4 ">
      <div className="sm:px-0 px-5">
        <div className="flex items-center justify-between h-16 ">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 text-gray-800 ">
            <ul className="flex items-center gap-6">
              {navMenu.map((item, index) => (
                <li
                  key={index}
                  onClick={() =>
                    setNavMenuOpen(index === navMenuOpen ? null : index)
                  }
                  className="cursor-pointer flex items-center gap-1"
                >
                  {item.name}
                  <FaAngleDown />
                </li>
              ))}
            </ul>

            <Link to={"/blog"} className="block">
              Blog
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex">
            <Button
              text="Contact Us"
              icon={FaRocket}
              onClick={() => alert("Clicked!")}
            />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden px-6 py-4 space-y-4 bg-primary">
          <ul>
            {navMenu.map((item, index) => (
              <li key={index} className="pt-2 flex items-center gap-1">
                {item.name} <FaAngleDown />
              </li>
            ))}
          </ul>
          <Link to={"/blog"} className="block">
            Blog
          </Link>
          <Button
            text="Contact Us"
            icon={FaRocket}
            onClick={() => alert("Clicked!")}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
