import React from "react";
// import botImage from "../../assetes/MobileAppDev/aibote2.png"; // update path according to your project

const AiServices = () => {
  const services = [
    {
      title: "Custom AI App Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Machine Learning Integration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Chatbot and Virtual Assistant Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Predictivity Analytics & Data Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="py-12 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Our AI App Development <span className="text-black">Services</span> to
          help you to scale <br /> Your Idea
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          follows the best app development practices while digitalizing your
          idea. Here are all the app development services offered by us:
        </p>
      </div>

      {/* Content Section */}
      <div className="bg-orange-50 rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-10 shadow">
        {/* Image */}
        <div className="flex-shrink-0  bg-[#FEBB4D] rounded-2xl p-3">
          <img
            src={"botImage"}
            alt="AI Bot"
            className="w-64 h-64 object-contain rounded-2xl"
          />
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index}>
              <h3 className="text-lg text-left font-semibold text-red-500 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm text-left leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiServices;
