import React from "react";

function AdvanceTech() {
  const technologies = [
    {
      name: "Artificial Intelligence",
      icon: "Software Development Technologies",
      description:
        "To improve efficiency and innovation, our developers use AI's subfields like machine learning to create future-ready solutions.",
    },
    {
      name: "Data Analytics",
      icon: "Software Development Technologies (1)",
      description:
        "By collecting and analyzing your data, we gain insights that lead to key benefits, including better decision-making, reduced costs.",
    },
    {
      name: "Cloud",
      icon: "Software Development Technologies (2)",
      description:
        "we provide the best cloud services, including IaaS, PaaS, and SaaS, and enhanced security for your innovative ideas.",
    },
    {
      name: "Blockchain Software",
      icon: "Software Development Technologies (3)",
      description:
        "As a blockchain developer, we provide custom software solutions to enhance business security, trust, efficiency, and automation.",
    },
  ];

  return (
    <section className="py-16 px-6  bg-white">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#231f20] mb-6">
          Advanced Technology Solutions We Master in
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Our expert developers bring new ideas to digitize your business,
          creating the best software for both you and your customers with their
          professional advice.
        </p>
      </div>

      {/* Technology Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg border border-red-200 hover:shadow-xl transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center ">
              <div className="w-16 h-16  rounded-full flex items-center justify-center">
                <img
                  src={`../../src/assetes/SoftwareDevelopement/${tech.icon}.png`}
                  alt={tech.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#231f20] mb-4 text-center">
              {tech.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed text-left">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdvanceTech;
