import React from "react";

const Process = () => {
  const processSteps = [
    {
      id: 1,
      title: "Business Analysis",
      icon: "Frame 1707479776.png",
      description: "We Prioritize Your Privacy With End-To-End Encryption.",
    },
    {
      id: 2,
      title: "UI/UX Designing",
      icon: "Frame 1707479776 (1).png",
      description: "We Prioritize Your Privacy With End-To-End Encryption.",
    },
    {
      id: 3,
      title: "Launch",
      icon: "Frame 1707479776 (2).png",
      description: "We Prioritize Your Privacy With End-To-End Encryption.",
    },
    {
      id: 4,
      title: "Maintenance & Support",
      icon: "Frame 1707479776 (3).png",
      description: "We Prioritize Your Privacy With End-To-End Encryption.",
    },
  ];

  return (
    <div className="py-16 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ff6b35 2px, transparent 2px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Web Development Process
          </h2>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
          {processSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              {/* Process Card */}
              <div className="bg-white rounded-xl p-4 w-48 h-36 border border-orange-500 shadow-lg hover:shadow-xl transition-shadow">
                {/* Icon */}
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <img
                      src={`../../src/assetes/SoftwareDevelopement/${step.icon}`}
                      alt={step.title}
                      className="w-6 h-6"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-gray-900 text-center mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-700 text-center leading-tight">
                  {step.description}
                </p>
              </div>

              {/* Arrow (except for last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block -mx-2 z-10">
                  <svg
                    width="90"
                    height="8"
                    viewBox="0 0 80 8"
                    fill="none"
                    className="text-red-500"
                  >
                    <path
                      d="M72 4L2 4M72 4L68 0M72 4L68 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile arrows (vertical) */}
        <div className="lg:hidden flex flex-col items-center mt-8 space-y-4">
          {processSteps.slice(0, -1).map((_, index) => (
            <div key={`mobile-arrow-${index}`} className="text-red-500">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="rotate-90"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
