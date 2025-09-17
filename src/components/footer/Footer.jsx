import React from "react";
import {footerLinks, reachUs} from "../../data/data";
import {Link} from "react-router-dom";

const Footer = ({container}) => {
  return (
    <footer className={`${container}`}>
      <div className="bg-primary sm:px-0 px-5 sm:pt-4 pt-0 pb-4 mt-10">
        {/* upper form sections if needed */}
      </div>

      <div className="px-4 flex flex-col sm:flex-row gap-8 flex-wrap sm:justify-between text-sm text-gray-700 mt-10">
        {/* Left Sections */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg mb-3 text-[#170F49]">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="hover:text-orange-600 cursor-pointer">
                  <Link to={item.toLowerCase().replace(/\s+/g, "-")}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Right - Reach Us */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-black">
            {reachUs.title}
          </h3>
          <ul className="space-y-2 mb-4">
            {reachUs.contacts.map((contact, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <img src={contact.icon} alt="" className="w-4 h-4" />
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 text-[#6F6C90]"
                >
                  {contact.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex gap-2 mt-8">
            {reachUs.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full"
              >
                <img src={social.icon} alt="social" className="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
