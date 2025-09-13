import React from "react";

const MethodsSoftware = () => {
  return (
    <section className="py-16  sm:px-6 lg:px-8 bg-[#FFFFAF2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end gap-12">
          {/* Left Side - Image */}
          <div className="w-full lg:w-2/5">
            <img
              src="../../src/assetes/MobileAppDev/Group 1000001831.png"
              alt="Professional developer with laptop"
              className="w-full max-w-md mx-auto lg:mx-0 object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-3/5 text-left">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6 text-left">
              Our methods of software development
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed text-left">
              We use these methods for developing software. These methodologies
              are tailored to different types of organizations, and our choice
              depends on your specific business needs. Here are the methods:
            </p>

            {/* Methodology Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8 text-left">
                <div>
                  <h3 className="text-md font-bold text-gray-900 mb-3 text-left">
                    Agile Development Methodology
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-left">
                    Agile development boosts flexibility, speed, and quality by
                    allowing teams to continuously develop and release new
                    features quickly.
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-bold text-gray-900 mb-3 text-left">
                    Waterfall Development Methodology
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-left">
                    The Waterfall model is a traditional approach best for
                    projects with well-defined requirements, using our expert
                    developers for a successful outcome.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8 text-left">
                <div>
                  <h3 className="text-md  font-bold text-gray-900 mb-3 text-left">
                    Scrum Development
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-left">
                    Scrum's pillars of transparency, inspection, and adaptation
                    provide faster delivery, adaptability, and enhanced customer
                    satisfaction.
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-bold text-gray-900 mb-3 text-left">
                    DevOps Services
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-left">
                    DevOps is a modern method that removes software development
                    problems, increasing speed, collaboration, and quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodsSoftware;
