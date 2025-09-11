import {blogs} from "../../data/data";
import Button from "../reusable/Button";

const Section9 = () => {
  return (
    <div>
      <div className="text-3xl text-center pb-8 font-semibold">
        Our Latest Blog
      </div>
      <div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 ">
          {blogs.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col gap-2 p-4 rounded-lg border "
            >
              <div className="w-full h-48 overflow-hidden rounded-lg">
                <img src={item.image} className="w-full" alt="" />
              </div>
              <div className="text-secondary font-semibold text-lg">
                {item.category}
              </div>
              <div className="font-semibold">{item.title}</div>
              <div className="text-gray-500 text-sm">{item.description}</div>
              <div className="flex items-center gap-4">
                <div>
                  <img src={item.author.avtar} alt="" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">{item.author.name}</div>
                  <div className="text-gray-500">{item.author.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center sm:mt-8 mt-4">
        <Button text={"More"} onClick={() => alert("More")} />
      </div>
    </div>
  );
};

export default Section9;
