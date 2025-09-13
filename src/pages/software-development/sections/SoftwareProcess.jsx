import React from "react";

function SoftwareProcess() {
  const steps = [
    {
      icon: "Software Development Process",
      title: "Discovery, Analysis & Planning",
      description:
        "The initial phase of our process involves a thorough consultation with stakeholders to understand your business objectives and requirements.",
    },
    {
      icon: "Software Development Process (1)",
      title: "UI UX / Architecture Design",
      description:
        "UI and UX design are crucial for a better user experience. While UI focuses on the visual design and layout, UX is about the user's feeling and journey.",
    },
    {
      icon: "Software Development Process (2)",
      title: "Agile Development",
      description:
        "Agile development is a smarter approach to building software, offering flexibility, continuous improvement, and close collaboration.",
    },
    {
      icon: "Software Development Process (3)",
      title: "Testing and Quality Ensurance",
      description:
        "As one of our most important steps for ensuring a high-quality product, we focus on both verification and validation, catching bugs and ensuring customer needs are met.",
    },
    {
      icon: "_x37_7_x2C__Computer_x2C__Website_x2C__Wireframe",
      title: "Software Development",
      description:
        "As the final step, our expert developers create innovative software tailored to your needs, backed by deep knowledge of programming languages and frameworks.",
    },
  ];

  return (
    <section className="py-12 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Our Software Development Process
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
          Our comprehensive, five-step roadmap guarantees a transparent,
          efficient, and reliable methodology for building your custom software.
        </p>
      </div>

      {/* Process Steps */}
      <div className="space-y-8">
        {/* Top Row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.slice(0, 3).map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#FFE5BB] to-[#FFFFAF2] border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition flex flex-col h-48"
            >
              {/* Heading and Icon */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-900 flex-1 pr-4">
                  {step.title}
                </h3>
                <div className="flex-shrink-0">
                  <img
                    src={`../../src/assetes/MobileAppDev/${step.icon}.png`}
                    alt={step.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 cards centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
            {steps.slice(3, 5).map((step, index) => (
              <div
                key={index + 3}
                className="bg-gradient-to-br from-[#FFE5BB] to-[#FFFFAF2] border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition flex flex-col h-48"
              >
                {/* Heading and Icon */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pr-4">
                    {step.title}
                  </h3>
                  <div className="flex-shrink-0">
                    <img
                      src={`../../src/assetes/MobileAppDev/${step.icon}.png`}
                      alt={step.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SoftwareProcess;
