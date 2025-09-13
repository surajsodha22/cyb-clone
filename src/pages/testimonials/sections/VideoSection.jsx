import React from "react";

const VideoSection = ({img}) => {
  return (
    <div>
      <div className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Video Testimonials Of Partnerships That We Cherish
            </h2>
            <p className="text-md text-gray-600 leading-relaxed">
              From startups to established enterprises, these videos bring to
              life the experiences of partners who trusted us to transform their
              ideas into impactful solutions.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={img}
                  alt="Client Testimonial"
                  className="w-full h-80 object-cover rounded-t-3xl"
                />
                {/* Play Button */}
                <div className="absolute bottom-[-25px] right-2">
                  <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors cursor-pointer border border-orange-200">
                    <img src={img} alt="Play" className="w-7 h-7" />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-black">
                  Paydeer Fintech Portal
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={img}
                  alt="Client Testimonial"
                  className="w-full h-80 object-cover rounded-t-3xl"
                />
                {/* Play Button */}
                <div className="absolute bottom-[-25px] right-2">
                  <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors cursor-pointer border border-orange-200">
                    <img src={img} alt="Play" className="w-7 h-7" />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-black">
                  Paydeer Fintech Portal
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={img}
                  alt="Client Testimonial"
                  className="w-full h-80 object-cover rounded-t-3xl"
                />
                {/* Play Button */}
                <div className="absolute bottom-[-25px] right-2">
                  <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors cursor-pointer border border-orange-200">
                    <img src={img} alt="Play" className="w-7 h-7" />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-black">
                  Paydeer Fintech Portal
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
