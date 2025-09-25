import React from "react";

const ContactHero = ({title, description, image}) => {
  return (
    <section
      className={`flex  flex-col lg:flex-row items-center justify-between  py-14  `}
    >
      {/* Left Section */}
      <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {title}
        </h1>
        <hr className="border-b-2 border-black w-20 mx-auto lg:mx-0" />
        {description && (
          <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
            {description}
          </p>
        )}
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 mt-6 sm:mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <div className="rounded-[20px] sm:rounded-[30px] overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-xl lg:mr-5">
          <img src={image} alt="banner" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
