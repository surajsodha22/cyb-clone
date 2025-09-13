import React from "react";
import {
  devOffer1,
  devOffer2,
  devOffer3,
  devOffer4,
  devOffer5,
} from "../../data/assetes";

const ServicesManagedDevOps = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our DevOps Services Managed Offering
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            follows the best app development practices while digitalizing your
            idea. Here are all the app development services offered by us
          </p>
        </div>

        {/* Service Sections */}
        <div className="space-y-16">
          {/* Section 1: Containerization and Orchestration */}
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src={devOffer1}
                  alt="Containerization and Orchestration"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2 text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Containerization and Orchestration
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Microservices */}
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Microservices
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div>
                <img
                  src={devOffer2}
                  alt="Microservices"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Release Management */}
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src={devOffer3}
                  alt="Release Management"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2 text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Release Management
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Security Management */}
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Security Management
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div>
                <img
                  src={devOffer4}
                  alt="Security Management"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Section 5: IT Infrastructure Management */}
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src={devOffer5}
                  alt="IT Infrastructure Management"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2 text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  IT Infrastructure Management
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesManagedDevOps;
