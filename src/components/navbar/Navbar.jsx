import {FaBars, FaTimes} from "react-icons/fa";
import {FaAngleDown, FaAngleUp} from "react-icons/fa6";
import {logo} from "../../data/assetes";
import Button from "../reusable/Button";
import {Link} from "react-router-dom";
import {navMenu} from "../../data/data";
import {useState, useEffect} from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        !event.target.closest(".mobile-drawer") &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent body scroll
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <nav className="w-full pt-2 sm:pt-4 xl:px-0        ">
      <div className="">
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
            <button
              className="mobile-menu-button p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setOpen(!open)}
            >
              {open ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {open && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="mobile-drawer fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-primary shadow-2xl transform transition-transform duration-300 ease-in-out">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-2">
                  {navMenu.map((item, index) => (
                    <li
                      key={index}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <div
                        className="flex items-center justify-between py-4 cursor-pointer hover:bg-gray-50 rounded-lg px-3 transition-colors duration-200"
                        onClick={() => toggleSubMenu(index)}
                      >
                        <span className="text-gray-800 font-medium">
                          {item.name}
                        </span>
                        {activeMenu === index ? (
                          <FaAngleUp className="text-gray-500" />
                        ) : (
                          <FaAngleDown className="text-gray-500" />
                        )}
                      </div>

                      {/* Submenu */}
                      {activeMenu === index && item.submenu && (
                        <div className="pl-4 pb-2 space-y-1 animate-fadeIn">
                          {item.submenu.map((sub, i) => (
                            <Link
                              key={i}
                              to={sub.link}
                              className="block py-3 px-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                              onClick={() => setOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Blog Link */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link
                    to="/blog"
                    className="block py-3 px-3 text-gray-800 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                    onClick={() => setOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <Button
                  text="Contact Us"
                  onClick={() => {
                    alert("Clicked!");
                    setOpen(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
