import React, {useState, useEffect} from "react";
import {AiOutlineUser, AiOutlineMail} from "react-icons/ai";
import {FiPhone} from "react-icons/fi";
import {IoIosGlobe, IoMdClose} from "react-icons/io";
import Button from "../reusable/Button";
import {callcenter_popup} from "../../data/assetes";
import {LiaPiggyBankSolid} from "react-icons/lia";

import {IoBagOutline} from "react-icons/io5";
import {MdOutlineLocalPhone} from "react-icons/md";

const DelayedQuotePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Show popup after 2.5 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-gray-800/50 flex items-center justify-center z-20 p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-[8px] shadow-2xl flex flex-col lg:flex-row relative animate-fadeIn my-4 lg:my-0 lg:h-[550px] min-h-96  ">
        {/* Close Btn */}
        <button
          className="absolute top-1 right-1 sm:-top-4 sm:-right-4 bg-yellow-400 text-gray-800 rounded-full p-1 sm:p-2 hover:bg-yellow-500 z-50 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose size={12} className="sm:hidden" />
          <IoMdClose size={16} className="hidden sm:block" />
        </button>

        {/* Left Side */}
        <div className="bg-white px-4 py-6  w-full lg:w-96 border rounded-t-[8px] lg:min-h-[300px] sm:rounded-[8px] md:relative lg:block hidden ">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-500 mb-2">
              Wait
            </h2>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 font-semibold">
                Before You Go
              </p>
              <div className="text-lg sm:text-xl lg:text-2xl">👋</div>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 font-semibold">
              Our Experts Are Here to Help with:
            </p>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700 mb-4 sm:mb-6">
              <li className="flex items-center gap-2 sm:gap-3">
                <div className="relative w-3 h-3 sm:w-4 sm:h-4">
                  <div className="absolute inset-0 bg-[#F5E8D3] rounded-full"></div>
                  <div className="absolute inset-1 bg-secondary rounded-full"></div>
                </div>
                Custom Development Plans
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <div className="relative w-3 h-3 sm:w-4 sm:h-4">
                  <div className="absolute inset-0 bg-[#F5E8D3] rounded-full"></div>
                  <div className="absolute inset-1 bg-secondary rounded-full"></div>
                </div>
                Accurate Budget Estimates
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <div className="relative w-3 h-3 sm:w-4 sm:h-4">
                  <div className="absolute inset-0 bg-[#F5E8D3] rounded-full"></div>
                  <div className="absolute inset-1 bg-secondary rounded-full"></div>
                </div>
                Quick Project Timelines
              </li>
            </ul>
            <p className="text-xs sm:text-sm text-gray-700 font-semibold">
              Let's start your journey today!
            </p>
          </div>
          <div className="absolute bottom-0 flex justify-center items-end left-8 ">
            {/* Main image with background circle */}
            <div className="w-80">
              <img
                src={callcenter_popup}
                alt="girl"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="py-6 px-4 bg-[#FFF9F0] flex-1 rounded-b-[8px] xl:rounded-b-none xl:rounded-r-[8px] xl:rounded-t-none
        rounded-t-[8px]  xl:overflow-y-auto"
        >
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 ">
            Get a Perfect Quote
          </h2>
          <p className="text-xs sm:text-[14px]  mb-4 sm:mb-6 ">
            Share your project requirements here, we guarantee to follow up
            within 24 hours. We ensure to provide 100% return on investment.
          </p>

          <form className="space-y-3 sm:space-y-3">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <AiOutlineUser
                  className="absolute left-3 sm:top-3 top-2"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 rounded-lg  shadow-[0px_2px_6px_0px_#00000026] focus:ring-1 focus:ring-secondary outline-none text-xs sm:text-sm bg-white placeholder-black"
                />
              </div>
              <div className="relative">
                <MdOutlineLocalPhone
                  className="absolute left-3 sm:top-3 top-2"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 rounded-lg  shadow-[0px_2px_6px_0px_#00000026] focus:ring-1 focus:ring-secondary outline-none text-xs sm:text-sm bg-white placeholder-black"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <AiOutlineMail
                  className="absolute left-3 sm:top-3 top-2"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 rounded-lg  shadow-[0px_2px_6px_0px_#00000026] focus:ring-1 focus:ring-secondary outline-none text-xs sm:text-sm bg-white placeholder-black"
                />
              </div>
              <div className="relative">
                <IoIosGlobe
                  className="absolute left-3 sm:top-3 top-2"
                  size={18}
                />
                <select
                  className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 rounded-lg shadow-[0px_2px_6px_0px_#00000026] focus:ring-1 focus:ring-secondary outline-none text-xs sm:text-sm bg-white placeholder-black"
                  defaultValue=""
                >
                  <option value="" disabled className="">
                    Select Country
                  </option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Budget */}
            <div className="relative">
              <LiaPiggyBankSolid
                className="absolute left-3 sm:top-3 top-2"
                size={18}
              />
              <input
                type="text"
                placeholder="Budget Range"
                className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 rounded-lg  shadow-[0px_2px_6px_0px_#00000026] focus:ring-1 focus:ring-secondary outline-none text-xs sm:text-sm bg-white placeholder-black"
              />
            </div>

            {/* Outline */}
            <div className="relative">
              <IoBagOutline
                className="absolute left-3 sm:top-3 top-2"
                size={18}
              />
              <textarea
                placeholder="Project Outline"
                rows={3}
                className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 rounded-lg  shadow-[0px_2px_6px_0px_#00000026] focus:ring-1 focus:ring-secondary outline-none text-xs sm:text-sm resize-none bg-white placeholder-black"
              ></textarea>
            </div>

            {/* Submit Btn */}
            <div className="flex justify-center pt-2">
              <Button
                text="Submit"
                className="w-full text-xs sm:text-sm py-2 sm:py-3"
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DelayedQuotePopup;
