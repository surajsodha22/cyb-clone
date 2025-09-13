import React from "react";

function SoftwareServices() {
  const services = [
    {
      icon: (
        <img
          src="../../src/assetes/SoftwareDevelopement/Frame 427319048.png"
          alt="Software Development Consulting"
          className="w-18 h-18"
        />
      ),
      title: "Software Development Consulting",
      description:
        "Our experienced developers are ready to optimize your workflows, and deliver high-quality software solutions for your business. Unlike others who only aim to sell their products, we focus on your needs.",
    },
    {
      icon: (
        <img
          src="../../src/assetes/SoftwareDevelopement/Frame 427319102.png"
          alt="Custom Software Development"
          className="w-18 h-18"
        />
      ),
      title: "Custom Software Development",
      description:
        "We provide software development services that combine advanced technologies and industry experience, ensuring you receive a tailored, future-ready software solution.",
    },
    {
      icon: (
        <img
          src="../../src/assetes/SoftwareDevelopement/Frame 427319102 (1).png"
          alt="Enterprise Software Development"
          className="w-18 h-18"
        />
      ),
      title: "Enterprise Software Development",
      description:
        "Enterprise software development solves complexity, security, and integration challenges for large organizations, addressing needs across multiple departments and users.",
    },
    {
      icon: (
        <img
          src="../../src/assetes/SoftwareDevelopement/Frame 427319102 (2).png"
          alt="AI Software Development"
          className="w-18 h-18"
        />
      ),
      title: "AI Software Development",
      description:
        "To enhance efficiency, accuracy, and innovation, we must adopt AI software development. This fusion of human creativity and AI delivers the best outcome with a future-forward vision.",
    },
    {
      icon: (
        <img
          src="../../src/assetes/SoftwareDevelopement/Frame 427319102 (3).png"
          alt="Custom CRM Development"
          className="w-18 h-18"
        />
      ),
      title: "Custom CRM Development",
      description:
        "Every business faces unique complexities. We offer custom CRM solutions, with tailored functionality, to help you overcome these challenges and boost your sales.",
    },
    {
      icon: (
        <img
          src="../../src/assetes/SoftwareDevelopement/Frame 427319102 (4).png"
          alt="API Development"
          className="w-18 h-18"
        />
      ),
      title: "API Development",
      description:
        "API development is the process of designing, developing, testing, and maintaining APIs, which helps enable faster development, scalability, and new revenue streams in these modern businesses.",
    },
  ];

  return (
    <section className="py-12 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Our Software Development Services
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
          We provide software development services that combine advanced
          technologies and industry experience, ensuring you receive a tailored,
          future-ready software solution.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border-2 border-[#FFE5BB] rounded-xl shadow-md p-8 hover:shadow-lg transition relative"
          >
            {/* Circular Icon Container - Top Right */}
            <div className="absolute -top-6 -right-6">
              <div className="w-20 h-20 bg-white border-2 border-[#FFE5BB] rounded-full flex items-center justify-center shadow-lg">
                <div className="text-red-500 text-3xl object-contain">
                  {service.icon}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="pr-">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SoftwareServices;
