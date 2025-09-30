import React from "react";
import {teamData} from "../../data/data";

const Team = ({container}) => {
  return (
    <div className={`${container} my-72`}>
      {/* Decorative background elements */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl p-6 shadow-[0px_0px_16px_0px_#00000026] max-w-sm min-h-80 mx-auto"
          >
            <div className="w-80 h-80 mb-4 rounded-xl overflow-hidden relative">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="">
              <p className="text-sm text-[#F26064] mb-2 font-medium uppercase tracking-wider">
                {member.role}
              </p>
              <h3 className="text-base font-bold text-gray-800 mb-2 relative inline-block">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed text-left">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
