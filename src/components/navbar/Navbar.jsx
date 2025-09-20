import {FaBars, FaTimes} from "react-icons/fa";
import {FaAngleDown, FaAngleUp} from "react-icons/fa6";
import {logo} from "../../data/assetes";
import Button from "../reusable/Button";
import {Link} from "react-router-dom";
import {navMenu} from "../../data/data";
import {useState} from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <nav className="w-full pt-4">
      <div className="sm:px-0 px-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to={"/"} className="cursor-pointer">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6  text-[18px]">
            <ul className="flex items-center gap-6 ">
              {navMenu.map((item, index) => (
                <li key={index} className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer hover:font-semibold">
                    {item.name}
                    <FaAngleDown className="mt-1" />
                  </div>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <ul className="absolute left-0 mt-2 w-48 z-50 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.submenu.map((sub, i) => (
                        <Link to={sub?.link} key={i}>
                          <li className="px-4 py-2 hover:bg-[#FEBB4DE0] cursor-pointer">
                            {sub?.name}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <Link to={"/blog"} className="block">
              Blog
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex">
            <Button text="Contact Us" onClick={() => alert("Clicked!")} />
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
              <li key={index} className="pt-2">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleSubMenu(index)}
                >
                  <span>{item.name}</span>
                  {activeMenu === index ? <FaAngleUp /> : <FaAngleDown />}
                </div>

                {/* Submenu */}
                {activeMenu === index && item.submenu && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {item.submenu.map((sub, i) => (
                      <li key={i}>
                        <Link
                          to={sub.link}
                          className="block py-1 hover:text-orange-600"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <Link to={"/blog"} className="block">
            Blog
          </Link>

          <Button text="Contact Us" onClick={() => alert("Clicked!")} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
