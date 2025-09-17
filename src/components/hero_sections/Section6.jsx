import Input from "../reusable/Input";
import {IoPerson} from "react-icons/io5";
import {MdOutlineEmail} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import Button from "../reusable/Button";
import SectionHeading from "../reusable/SectionHeading";

const Section6 = ({container}) => {
  return (
    <>
      <div
        className={`${container} px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}
      >
        <div className="max-w-96">
          <SectionHeading
            title="Our Technology Experts are Catalysts for Digital Transformation"
            subtitle=" Book a Free call with Our Experts and Start Building the future
            Today."
            align="left"
          />
        </div>

        <div>
          <div
            className="bg-white border-2 max-w-lg py-8 px-6 rounded-xl"
            style={{boxShadow: "0px 1px 4px 0px #FEBB4D"}}
          >
            <form action="">
              <div className="mb-6">
                <Input
                  type={"text"}
                  icon={IoPerson}
                  placeholder={"Full Name"}
                />
              </div>
              <div className="mb-6">
                <Input
                  type={"email"}
                  icon={MdOutlineEmail}
                  placeholder={"Email"}
                />
              </div>
              <div className="mb-6">
                <div className="max-w-96 mx-auto relative">
                  <label className=" text-xs font-medium bg-[#FEBB4D] mb-1 px-5 rounded-full absolute -top-2 left-4">
                    Number
                  </label>
                  <div className="flex gap-2 border border-gray-300 items-center rounded-lg px-3 py-2 bg-white">
                    <span className="text-gray-600 text-sm">
                      <FaPhoneAlt />
                    </span>
                    <span className="text-gray-500 text-sm">+91</span>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="outline-none border-none bg-transparent w-full text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="border border-gray-300 max-w-96 mx-auto rounded-lg px-3 py-2 bg-white">
                  <textarea
                    className="outline-none border-none bg-transparent w-full resize-none min-h-[80px] text-sm"
                    placeholder="Enter Your Message"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  className={"mt-2"}
                  text={"Request a proposal"}
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Proposal requested!");
                  }}
                >
                  Request a proposal
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
