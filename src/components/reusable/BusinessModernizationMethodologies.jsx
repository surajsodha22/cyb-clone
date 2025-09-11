import {women3} from "../../data/assetes";
import {BusinessMethodologies} from "../../data/data";
import SectionHeading from "./SectionHeading";

const BusinessModernizationMethodologies = ({container}) => {
  return (
    <section className={`py-16 px-4 ${container}`}>
      <div className=" flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Image with icons */}

        <div>
          {" "}
          <img src={women3} alt="Woman Professional" className="" />
        </div>

        {/* Right: Text content */}
        <div className="flex-1">
          <SectionHeading
            title="Our Business Modernization Methodologies"
            subtitle="follows the best app development practices while digitalizing your
            idea. Here are all the app development services offered by us:"
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BusinessMethodologies.map((item, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModernizationMethodologies;
