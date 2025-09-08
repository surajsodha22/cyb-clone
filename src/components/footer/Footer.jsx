import React from "react";
import {footImg} from "../../data/assetes";
import {footerLinks} from "../../data/data";
import Section13 from "../hero_sections/Section13";
import {Link} from "react-router-dom";

const Footer = ({container}) => {
  return (
    <footer className={`${container}`}>
      <div className="bg-primary sm:px-0 px-5 sm:pt-4 pt-0  pb-4 mt-10 ">
        <Section13 />
      </div>
      <div className="px-4 flex flex-col sm:flex-row  gap5 flex-wrap sm:justify-between text-sm text-gray-700">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg mt-5 text-black">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="hover:text-orange-600 cursor-pointer">
                  <Link to={item.toLocaleLowerCase()}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
