import Input from "../reusable/Input";
import {inputPhone, inputEmail, inputPerson} from "../../data/assetes";
import Button from "../reusable/Button";
import SectionHeading from "../reusable/SectionHeading";

const Section6 = ({container}) => {
  return (
    <>
      <div
        className={`${container} px-4 py-72 grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}
      >
        <div className="max-w-lg">
          <h2
            className="font-montserrat font-[700] text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-8 sm:leading-9 md:leading-[44px] lg:leading-[52px]"
            style={{
              letterSpacing: "0%",
            }}
          >
            Our Technology Experts are Catalysts for Digital Transformation
          </h2>

          <p className="text-gray-600 max-w-2xl text-xs sm:text-sm md:text-base leading-5 sm:leading-6 md:leading-7 lg:leading-[30px] mt-5 pr-10">
            Book a Free call with Our Experts and Start Building the future
            Today.
          </p>
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
                  icon={inputPerson}
                  placeholder={"Full Name"}
                />
              </div>
              <div className="mb-6">
                <Input type={"email"} icon={inputEmail} placeholder={"Email"} />
              </div>
              <div className="mb-6">
                <div className="max-w-96 mx-auto relative">
                  <label className=" text-xs font-medium bg-[#FEBB4D] mb-1 px-5 rounded-full absolute -top-2 left-4">
                    Number
                  </label>
                  <div className="flex gap-2 border border-[#AC9797] items-center rounded-lg px-3 py-2 bg-white">
                    <span className="text-gray-600 w-[17px] h-[17px]">
                      <img
                        src={inputPhone}
                        alt="phone"
                        className="w-full h-full"
                      />
                    </span>
                    <span className="text-gray-500 text-[14px]">+91</span>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="outline-none border-none bg-transparent w-full text-[14px]"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="border border-[#AC9797] max-w-96 mx-auto rounded-lg px-3 py-2 bg-white">
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
