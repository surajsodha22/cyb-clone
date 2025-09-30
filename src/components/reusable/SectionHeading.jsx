import React from "react";

const SectionHeading = ({
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div
      className={`w-full flex flex-col ${alignment} gap-2 sm:gap-3 mb-5 sm:mb-8 lg:mb-10  ${className}`}
    >
      <h2
        className="font-montserrat font-[700] text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        style={{
          lineHeight: "100%",
          letterSpacing: "0%",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
