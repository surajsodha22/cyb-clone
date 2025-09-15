import React, {useState} from "react";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import {FaTwitter, FaLinkedinIn, FaInstagram} from "react-icons/fa";
import {ellipse793, ellipse794, letterSend1} from "../../../data/assetes";
// import letterSend from "../../assetes/Testimonial/letter_send 1.png";

export default function ContactUs() {
  const [selectedSubject, setSelectedSubject] = useState("General Inquiry");

  const subjects = ["General Inquiry", "Sales", "Support", "Partnership"];

  return (
    <div className="flex flex-col items-center justify-center my-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h2>
        <p className="text-gray-500 text-lg">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Card */}
      <div className="relative bg-white rounded-3xl  shadow-md w-full max-w-6xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Panel - Contact Information */}
          <div className="relative lg:w-2/5 bg-[#FFB74D] p-8 lg:p-10 text-white flex flex-col border-2 m-4 rounded-2xl justify-between min-h-[500px]">
            {/* Decorative circles - using actual images */}
            <img
              src={ellipse793}
              alt="Decorative circle"
              className="absolute -right-0 -bottom-0 w-32 h-32  pointer-events-none"
            />
            <img
              src={ellipse794}
              alt="Decorative circle"
              className="absolute right-10 bottom-16 w-28 h-28 opacity-90 pointer-events-none"
            />

            <div>
              <h3 className="text-2xl text-left font-bold mb-3">
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
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <FaTwitter className="text-sm" />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <FaLinkedinIn className="text-sm" />
              </a>

              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <FaInstagram className="text-sm" />
              </a>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="lg:w-3/5 p-8 lg:p-10 relative">
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-left  text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full pb-2 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm text-left  font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full pb-2 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm  text-left  font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full pb-2 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm text-left  font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+1 012 3456 789"
                    className="w-full pb-2 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Subject Selection */}
              <div>
                <label className="block text-gray-900 text-md text-left mb-4">
                  Select Subject?
                </label>
                <div className="flex flex-wrap gap-4">
                  {subjects.map((subject, index) => (
                    <label
                      key={index}
                      className={`flex items-center gap-1 px-4 py-3 rounded-full  cursor-pointer transition-all ${
                        selectedSubject === subject
                          ? "border-[#FFB74D] bg-[#FFB74D]/10"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
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
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedSubject === subject
                            ? "border-[#FFB74D] bg-[#FFB74D]"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {selectedSubject === subject && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="text-sm text-gray-700 font-medium">
                        {subject}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-900 text-md text-left mb-4">
                  Message
                </label>
                <textarea
                  placeholder="Write your message.."
                  rows="1"
                  className="w-full pb-2 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none resize-none text-gray-700 placeholder-gray-400"
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
            <div className="pointer-events-none absolute right-20 -bottom-4">
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
