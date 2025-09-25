import React, {useState} from "react";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import {FaCircleCheck} from "react-icons/fa6";

import {FaTwitter, FaLinkedinIn, FaInstagram} from "react-icons/fa";
import {letterSend1, bgContact} from "../../../data/assetes";
import HeadingSection from "../../../components/reusable/SectionHeading";
// import letterSend from "../../assetes/Testimonial/letter_send 1.png";

export default function ContactUs() {
  const [selectedSubject, setSelectedSubject] = useState("General Inquiry");

  const subjects = ["General Inquiry", "Sales", "Support", "Partnership"];

  return (
    <div className="flex flex-col items-center">
      {/* Heading */}
      <HeadingSection
        title="Contact Us"
        subtitle="Any question or remarks? Just write us a message!"
      />

      {/* Card */}
      <div className="relative bg-white rounded-lg shadow-[0px_4px_4px_0px_#00000040] w-full">
        <div className="flex flex-col lg:flex-row  rounded-lg justify-between shadow-[0px_0px_60px_30px_#00000008]">
          {/* Left Panel - Contact Information */}
          <div
            className="relative lg:w-2/5  p-8 lg:p-10 text-white flex flex-col  m-4 rounded-lg justify-between min-h-[500px]"
            style={{
              backgroundImage: `url(${bgContact})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <h3 className="text-2xl text-left font-bold">
                Contact Information
              </h3>
              <p className="text-white/90 mb-8  text-left  text-lg">
                Say something to start a live chat!
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-xl text-white">
                    <FaPhoneAlt />
                  </span>
                  <div>
                    <div className="text-white text-lg ">+1012 3456 789</div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-1 text-xl text-white">
                    <FaEnvelope />
                  </span>
                  <div>
                    <div className="text-white text-lg ">info@cybdeer.com</div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-1 text-xl text-white">
                    <FaMapMarkerAlt />
                  </span>
                  <div className="text-white text-left  text-lg ">
                    132 Dartmouth Street Boston,
                    <br /> Massachusetts 02156 United States
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="lg:w-3/5 p-8 lg:p-10 relative">
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-left  text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full pb-2 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-left  font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full pb-2 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm  text-left  font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full pb-2 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-left  font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+1 012 3456 789"
                    className="w-full pb-2 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none placeholder-[#8D8D8D]"
                  />
                </div>
              </div>

              {/* Subject Selection */}
              <div>
                <label className="block text-md text-left mb-4">
                  Select Subject?
                </label>
                <div className="flex flex-wrap gap-4">
                  {subjects.map((subject, index) => (
                    <label
                      key={index}
                      className={`flex items-center text-[12px] font-[400] gap-1 px-4 py-3 rounded-full  cursor-pointer transition-all `}
                    >
                      <input
                        type="radio"
                        name="subject"
                        value={subject}
                        checked={selectedSubject === subject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full  flex items-center justify-center ${
                          selectedSubject === subject
                            ? "border-[#FFB74D]"
                            : "bg-gray-300"
                        }`}
                      >
                        {selectedSubject === subject ? (
                          <FaCircleCheck className="text-[#FEBB4D] w-5 h-5" />
                        ) : null}
                      </div>
                      <span className="text-sm font-medium">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-md text-left mb-4">Message</label>
                <textarea
                  placeholder="Write your message.."
                  rows="1"
                  className="w-full pb-2 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none resize-none placeholder-[#8D8D8D]"
                ></textarea>
              </div>

              {/* Send Button */}
              <div className="flex justify-end pb-20">
                <button
                  type="button"
                  className="bg-gradient-to-r from-[#f26e6e] to-[#e05555] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Paper plane decoration bottom-right */}
            <div className="pointer-events-none absolute right-32 -bottom-4">
              <img
                src={letterSend1}
                alt="Paper plane decoration"
                className="w-45 h-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
