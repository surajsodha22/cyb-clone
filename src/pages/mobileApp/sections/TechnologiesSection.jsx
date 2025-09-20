import React from "react";

const TechnologiesSection = () => {
  const technologies = [
    {
      name: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    },
    {
      name: "CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "HTML",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "React.js",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Node.js",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {name: "Swift", logo: "../../src/assetes/swift 1.png"},
    {
      name: "Angular",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    },
    {
      name: "Spring Boot",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Spring_Boot.svg",
    },
    {
      name: "Vue.js",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    },
    {
      name: "Shopify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Shopify_logo_2020.svg",
    },
    {
      name: "Drupal",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Drupal_logo.svg/1200px-Drupal_logo.svg.png",
    },
    {
      name: "HubSpot",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/HubSpot_Logo.svg",
    },
    {
      name: "WordPress",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
    },
    {
      name: "Laravel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    },
    {
      name: "Magento",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Magento_logo.svg",
    },
    {
      name: "WooCommerce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/WooCommerce_logo.svg",
    },
  ];

  // Duplicate the list to create a seamless marquee
  const marqueeItems = [...technologies, ...technologies];
  const defaultLogo = "../../src/assets/react.svg";

  return (
    <div className="bg-white py-72 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
            Technologies and Platforms We Use
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            follows the best app development practices while digitalizing your
            idea. Here are all the app development services offered by us:
          </p>
        </div>

        {/* Auto-scrolling rows */}
        <div className="relative space-y-8 mt-10">
          <div className="overflow-hidden">
            <div
              className="flex gap-12 sm:gap-16 items-center"
              style={{
                width: "200%",
                animation: "scroll-left 30s linear infinite",
              }}
            >
              {marqueeItems.map((tech, idx) => (
                <div
                  key={`row1-${idx}-${tech.name}`}
                  className="flex flex-col items-center justify-center w-40 sm:w-44"
                >
                  <div className="h-28 w-28 sm:h-32 sm:w-32 flex items-center justify-center bg-gray-50 rounded-xl p-4">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      title={tech.name}
                      className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = defaultLogo;
                      }}
                    />
                  </div>
                  <p className="mt-2 text-[11px] sm:text-xs font-medium text-gray-700 text-center whitespace-nowrap">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - right to left  */}
          <div className="overflow-hidden">
            <div
              className="flex gap-12 sm:gap-16 items-center"
              style={{
                width: "200%",
                animation: "scroll-right 32s linear infinite",
              }}
            >
              {marqueeItems.map((tech, idx) => (
                <div
                  key={`row2-${idx}-${tech.name}`}
                  className="flex flex-col items-center justify-center w-40 sm:w-44"
                >
                  <div className="h-28 w-28 sm:h-32 sm:w-32 flex items-center justify-center bg-gray-50 rounded-xl p-4">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      title={tech.name}
                      className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = defaultLogo;
                      }}
                    />
                  </div>
                  <p className="mt-2 text-[11px] sm:text-xs font-medium text-gray-700 text-center whitespace-nowrap">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
