import React from "react";

const Benefits = ({container}) => {
  const benefits = [
    {
      id: 1,
      title: "Professional DevOps Engineers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "programming-background-with-person-working-with-codes-computer (1) 1.png",
    },
    {
      id: 2,
      title: "Affordable DevOps Solution",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: "image 793.png",
    },
    {
      id: 3,
      title: "Software Lifecycle Predictability",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: "standard-quality-control-concept-m 1.png",
    },
    {
      id: 4,
      title: "We Follow Agile Methodology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: "image 790.png",
    },
    {
      id: 5,
      title: "Ongoing Monitoring",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: "businessman-announces-company-bankruptcy-meeting 1.png",
    },
    {
      id: 6,
      title: "Complex Delivery Experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: "image 791.png",
    },
  ];

  return (
    <section
      className="py-16 px-4 mt-10 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(to bottom, #FFF8E7, #FFFFFF)",
      }}
    >
      <div className={container}>
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Benefits of our DevOps Services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            follows the best app development practices while digitalizing your
            idea. Here are all the app development services offered by us:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="mb-6 flex justify-center">
                <div className=" rounded-lg overflow-hidden shadow-md">
                  <img
                    src={`../../src/assetes/DevOps/${benefit.image}`}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
