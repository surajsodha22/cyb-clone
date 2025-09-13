import React from "react";

const TaskDevOps = () => {
  const tasks = [
    {
      id: 1,
      title: "DevOps as a Services",
      isOrange: true,
    },
    {
      id: 2,
      title: "DevOps Assessment",
      isOrange: false,
    },
    {
      id: 3,
      title: "Infrastructure as a code",
      isOrange: true,
    },
    {
      id: 4,
      title: "Third Party Software Integration",
      isOrange: false,
    },
    {
      id: 5,
      title: "Continuous Monitoring",
      isOrange: true,
    },
    {
      id: 6,
      title: "Containerization/K8s",
      isOrange: false,
    },
    {
      id: 7,
      title: "Operational Management",
      isOrange: true,
    },
    {
      id: 8,
      title: "Security and Compliance Automation",
      isOrange: false,
    },
    {
      id: 9,
      title: "Release Management",
      isOrange: true,
    },
    {
      id: 10,
      title: "Less Coding",
      isOrange: false,
    },
    {
      id: 11,
      title: "Security Management (DevSecOps)",
      isOrange: true,
    },
    {
      id: 12,
      title: "Cloud Management",
      isOrange: false,
    },
    {
      id: 13,
      title: "Documentation Support",
      isOrange: true,
    },
    {
      id: 14,
      title: "Testing and Health Monitoring",
      isOrange: false,
    },
    {
      id: 15,
      title: "Optimization and Serverless Architecture",
      isOrange: true,
    },
    {
      id: 16,
      title: "Ongoing Performance",
      isOrange: false,
    },
  ];

  // Split tasks into two columns
  const leftColumnTasks = tasks.slice(0, 8);
  const rightColumnTasks = tasks.slice(8, 16);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tasks Our DevOps Engineers Can work On
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumnTasks.map((task) => (
              <div
                key={task.id}
                className={`flex items-center p-4 rounded-lg shadow-sm ${
                  task.isOrange
                    ? "bg-gradient-to-r from-orange-100 to-orange-50"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-6 h-6  rounded-full flex items-center justify-center">
                    <img
                      src="../../src/assetes/DevOps/hugeicons_tick-01.png"
                      alt="Check"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <span className="text-gray-900 font-medium">{task.title}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumnTasks.map((task) => (
              <div
                key={task.id}
                className={`flex items-center p-4 rounded-lg shadow-sm ${
                  task.isOrange
                    ? "bg-gradient-to-r from-orange-100 to-orange-50"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className=" rounded-full flex items-center justify-center">
                    <img
                      src="../../src/assetes/DevOps/hugeicons_tick-01.png"
                      alt="Check"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <span className="text-gray-900 font-medium">{task.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskDevOps;
