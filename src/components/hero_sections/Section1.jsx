import {homeMan, payvendor} from "../../data/assetes";
import SectionHeading from "../reusable/SectionHeading";

const Section1 = ({container}) => {
  return (
    <section className={` ${container}  `}>
      <SectionHeading title="Our Business" align="center" />

      <div className="flex flex-col lg:flex-row items-center justify-between bg-primary px-4 sm:px-8 lg:px-14 py-16 sm:py-24 lg:py-72 shadow-md rounded-xl gap-6 sm:gap-8 lg:gap-10">
        <div className="w-full lg:w-auto">
          <div className="w-full max-w-[390px] mx-auto lg:mx-0 bg-white shadow-[0px_4px_16px_0px_#2A2A2A1A] rounded-xl">
            <img src={homeMan} className="w-full" alt="" />
          </div>
        </div>
        <div className="w-full lg:w-auto">
          <div className="text-center lg:text-left">
            <div className="w-[100px] sm:w-[131px] mx-auto lg:mx-0">
              <img src={payvendor} alt="" className="w-full" />
            </div>
            <div className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl font-sans text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              vero perferendis ducimus recusandae unde porro molestiae alias,
              repellendus earum eius illo facilis deserunt accusamus officia non
              culpa quis ipsa nobis! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Sed, vel? Sed commodi nemo omnis in eligendi
              consequatur dolorum, voluptate pariatur, mollitia vitae assumenda
              nobis. Unde sequi amet repellendus dicta quod.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
