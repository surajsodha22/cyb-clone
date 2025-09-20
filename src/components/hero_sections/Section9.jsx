import {blogs} from "../../data/data";
import {rightUpArrow} from "../../data/assetes";
import Button from "../reusable/Button";
import SectionHeading from "../reusable/SectionHeading";

const Section9 = () => {
  return (
    <div>
      <SectionHeading title="Our Latest Blog" />

      <div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 sm:gap-6">
          {blogs.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 sm:gap-4 py-4 sm:py-6 px-4 sm:px-6 rounded-[30px] border h-[500px] sm:h-[550px] md:h-[580px] w-full max-w-[360px] mx-auto sm:mx-0 shadow-[0_4px_6px_-2px_#10182808,0_12px_16px_-4px_#10182814]"
            >
              <div className="w-full h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between h-[100%]">
                <div>
                  <div className="text-secondary font-semibold text-xs sm:text-sm md:text-[14px]">
                    {item.category}
                  </div>

                  <div>
                    <div className="font-semibold text-base sm:text-lg md:text-[20px] flex items-center gap-2 justify-between my-3 sm:my-4">
                      {item.title}
                      <img
                        src={rightUpArrow}
                        alt=""
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </div>
                    <div className="text-gray-500 text-sm sm:text-base md:text-[16px] mt-1">
                      {item.description}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 pb-2">
                  <div>
                    <img
                      src={item.author.avtar}
                      alt=""
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <div className="font-semibold">{item.author.name}</div>
                    <div className="text-gray-500">{item.author.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center sm:mt-8 mt-4">
        <Button
          text={"More"}
          onClick={() => alert("More")}
          className="w-[180px]"
        />
      </div>
    </div>
  );
};

export default Section9;
