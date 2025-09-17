import {homeMan, payvendor} from "../../data/assetes";
import SectionHeading from "../reusable/SectionHeading";

const Section1 = ({container}) => {
  return (
    <section className={` ${container}  `}>
      <SectionHeading title="Our Business" align="center" />

      <div className="flex flex-col md:flex-row items-center justify-between bg-primary px-14 py-16 shadow-md rounded-sm">
        <div className="">
          <div className="w-72 bg-white border shadow-sm rounded-sm">
            <img src={homeMan} className="w-full" alt="" />
          </div>
        </div>
        <div>
          <div className="max-w-2xl">
            <div>
              <img src={payvendor} alt="" />
            </div>
            <div className="mt-5 font-sans text-gray-700">
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
