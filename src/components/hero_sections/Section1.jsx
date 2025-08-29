import React from "react";
import {FaRocket} from "react-icons/fa";
import {image} from "../../data/assetes";
import {trustArr} from "../../data/data";
import Button from "../reusable/Button";

const Section1 = ({container}) => {
  return (
    <section
      className={`flex ${container}  flex-col md:flex-row items-center justify-between`}
    >
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Driving The <span className="text-red-400">Vision</span> of <br />
          Global <span className="text-secondary">Innovators</span>
        </h1>
        <p className="text-gray-600 text-lg">
          We shape the future by solving business challenges with smart ideas
          and flexible solutions
        </p>
        <p className="text-gray-500">
          Our customers love to work with us <strong>Clutch 4.9 ★★★★</strong>
        </p>
        <Button
          text="Speak to Our Experts"
          icon={FaRocket}
          onClick={() => alert("Experts")}
        />
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="rounded-[30px] overflow-hidden">
          <img src={image} alt="VR people" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
