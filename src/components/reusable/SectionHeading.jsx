import React from "react";

const SectionHeading = ({title, subtitle, align = "center"}) => {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`w-full flex flex-col ${alignment} gap-2 sm:mb-10 mb-5`}>
      <h2 className="text-2xl md:text-3xl font-bold text-black">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
