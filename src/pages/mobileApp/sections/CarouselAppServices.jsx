import React, {useState} from "react";

function CarouselAppServices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    {
      id: 1,
      category: "FinTech",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: "Group 1000001862 (1).png",
    },
    {
      id: 2,
      category: "Healthcare",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: "Group 1000001862 (1).png",
    },
    {
      id: 3,
      category: "E-commerce",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: "Group 1000001862 (1).png",
    },
    {
      id: 4,
      category: "Education",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: "Group 1000001862 (1).png",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const currentItem = carouselData[currentIndex];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Industry Specific Mobile App Development Services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            follows the best app development practices while digitalizing your
            idea. Here are all the app development services offered by us:
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
          >
            <img
              src="../../src/assetes/MobileAppDev/Vector.png"
              alt="Previous"
              className="w-6 h-6 transform rotate-180"
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
          >
            <img
              src="../../src/assetes/MobileAppDev/Vector.png"
              alt="Next"
              className="w-6 h-6"
            />
          </button>

          {/* Main Carousel Card */}
          <div className="mx-16">
            <div className="bg-gradient-to-r from-orange-200 to-white-200 rounded-3xl shadow-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Text Content */}
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-left text-gray-900">
                    {currentItem.category}
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-800 leading-relaxed text-left">
                      {currentItem.description}
                    </p>
                  </div>
                </div>

                {/* Right Side - Illustration */}
                <div className="relative flex justify-center lg:justify-end">
                  <div className="relative">
                    {/* Decorative background circles */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-300 rounded-full opacity-30"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-300 rounded-full opacity-20"></div>

                    {/* Main illustration */}
                    <div className="relative z-10">
                      <img
                        src={`../../src/assetes/MobileAppDev/${currentItem.image}`}
                        alt={`${currentItem.category} Mobile App`}
                        className="w-full max-w-md h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
        </div>
      </div>
    </div>
  );
}

export default CarouselAppServices;
