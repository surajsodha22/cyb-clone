import React from "react";

const AboutHero = ({
  container = "container mx-auto px-6",
  title,
  description,
  image,
}) => {
  return (
    <section
      className={`flex ${container} flex-col md:flex-row items-center justify-between pt-5 md:h-[74vh]`}
    >
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <hr className="border-b-2 border-black w-20" />
        {description && <p className="mt-4 text-gray-600">{description}</p>}
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
        <div className="rounded-[30px]  w-full   md:pr-10">
          <img src={image} alt="banner" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
