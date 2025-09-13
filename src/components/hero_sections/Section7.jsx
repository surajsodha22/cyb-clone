import React from "react";
import {CiMobile1} from "react-icons/ci";
import {features, features2} from "../../data/data";
import SectionHeading from "../reusable/SectionHeading";

const Section7 = ({
  title = "Empowering Digital Transformation with Innovative Tech Solutions",
  subtitle,
}) => {
  return (
    <div className="mt-10">
      <SectionHeading title={title} subtitle={subtitle} />

      <div className="flex flex-wrap gap-2 mt-6 justify-center ">
        <div className="bg-secondary px-4 py-2 rounded w-96">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" mt-0 hover:bg-[#FFD694] hover:shadow-sm p-4 rounded flex gap-2 items-center"
            >
              <div>
                <CiMobile1 />
              </div>
              <div>{feature.title}</div>
            </div>
          ))}
        </div>
        <div className=" bg-primary">
          <div className="flex w-full flex-wrap justify-center items-center gap-4 max-w-2xl mx-auto p-4 mt-10">
            {features2.map((feature, index) => (
              <div
                key={index}
                className="flex sm:w-52 w-32 bg-white border rounded  gap-2 items-center p-2"
              >
                <div>
                  <img src={feature.img} alt="img" />
                </div>
                <div>{feature?.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
