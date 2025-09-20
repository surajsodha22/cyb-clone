import React, {useEffect, useRef, useState} from "react";
import {FaCircle} from "react-icons/fa";

const ProcessTimeline = ({steps = [], image}) => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      {threshold: 0.5}
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      stepRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between ">
      {/* Left side sticky image */}
      <div className="w-full lg:w-96 rounded-lg overflow-hidden lg:sticky lg:top-10 lg:self-start order-2 lg:order-1">
        <img
          src={image}
          alt="Process Illustration"
          className="w-full object-cover"
        />
      </div>

      {/* Right side steps */}
      <div className="flex flex-col justify-start items-start relative min-h-screen w-full lg:w-1/2 order-1 lg:order-2">
        {/* Dotted line */}
        <div className="absolute left-2 top-4 bottom-4 w-0.5 border-l-2 border-dotted border-gray-400 -z-10 h-[85%] sm:h-[88%] md:h-[57%] lg:h-[90%]" />

        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (stepRefs.current[index] = el)}
            className={`flex items-start space-x-4 lg:space-x-6 w-full ${
              index === 0 ? "mt-0" : "mt-72 lg:mt-28"
            }`}
          >
            {/* Circle indicator */}
            <div className="mt-2 flex-shrink-0">
              <FaCircle
                className={`transition-colors duration-300 ${
                  activeStep === index ? "text-red-500" : "text-orange-400"
                }`}
              />
            </div>

            {/* Text content */}
            <div className="flex flex-col items-start max-w-xs lg:max-w-xs w-full">
              <p className="text-lg lg:text-xl font-semibold mb-2">
                {step.title}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
