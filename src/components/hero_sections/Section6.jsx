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
        className={`${container} px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}
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
          <div className="border max-w-lg py-10 rounded-md border-secondary">
            <form action="">
              <div className="mb-4">
                <Input type={"text"} icon={IoPerson} placeholder={"Name"} />
              </div>
              <div className="mb-4">
                <Input
                  type={"text"}
                  icon={MdOutlineEmail}
                  placeholder={"Email"}
                />
              </div>
              <div className="mb-4">
                <Input type={"text"} icon={FaPhoneAlt} placeholder={"Phone"} />
              </div>
              <div className="border max-w-96 mx-auto rounded-sm px-2 py-1 ">
                <textarea
                  className="outline-none border-none bg-transparent w-full resize-none"
                  placeholder="Enter your Massage"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <Button
                  className={"mt-4"}
                  text={"Request a proposal"}
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Proposal requested!");
                  }}
                >
                  Submit
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
