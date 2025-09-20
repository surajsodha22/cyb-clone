import React, {useMemo, useState} from "react";

const TabIcon = ({label}) => {
  const common = "h-5 w-5";
  switch (label) {
    case "Mobility":
      return (
        <svg
          className={common}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      );
    case "Frontend":
      return (
        <svg
          className={common}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 18l6-6-6-6M8 6l-6 6 6 6"
          />
        </svg>
      );
    case "Backend":
      return (
        <svg
          className={common}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7h18M3 12h18M3 17h18"
          />
        </svg>
      );
    case "Artificial Intelligence":
      return (
        <svg
          className={common}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v12m6-6H6m10.5-5A2.5 2.5 0 1114 4.5M7.5 20A2.5 2.5 0 115 17.5"
          />
        </svg>
      );
    case "Machine Learning":
      return (
        <svg
          className={common}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7h16M4 12h10M4 17h7"
          />
        </svg>
      );
    case "Data Analytics":
      return (
        <svg
          className={common}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3v18h18M7 15v3M11 11v7M15 7v11M19 5v13"
          />
        </svg>
      );
    case "CMS & E-Commerce":
      return (
        <svg
          className={common}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7h18M6 7l2 12h8l2-12M9 11h6"
          />
        </svg>
      );
    default:
      return null;
  }
};

const categories = {
  Mobility: [
    {name: "Swift", logo: "../../src/assetes/swift 1.png"},
    {name: "Xcode", logo: "../../src/assetes/xcode 1.png"},
    {name: "Kotlin", logo: "../../src/assetes/kotlin 1.png"},
    {name: "Ionic", logo: "../../src/assetes/Ionic 1.png"},
    {name: "Xamarin", logo: "../../src/assetes/xamarin-icon 1.png"},
    {name: "React Native", logo: "../../src/assetes/react-native 1.png"},
  ],
  Frontend: [
    {name: "React", logo: "../../src/assets/react.svg"},
    {name: "Vite", logo: "../../public/vite.svg"},
    {
      name: "Tailwind",
      logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    },
    {name: "Redux", logo: "https://cdn.worldvectorlogo.com/logos/redux.svg"},
  ],
  Backend: [
    {
      name: "Node.js",
      logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
    {
      name: "Express",
      logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    },
    {name: "MongoDB", logo: "../../src/assetes/mongodb Logo.png"},
    {
      name: "PostgreSQL",
      logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    },
    {
      name: "GraphQL",
      logo: "https://cdn.worldvectorlogo.com/logos/graphql.svg",
    },
    {name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg"},
  ],
  "Artificial Intelligence": [
    {
      name: "Python",
      logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    },
    {
      name: "TensorFlow",
      logo: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg",
    },
    {
      name: "PyTorch",
      logo: "https://cdn.worldvectorlogo.com/logos/pytorch.svg",
    },
    {
      name: "OpenAI",
      logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
    },
    {name: "Pandas", logo: "https://cdn.worldvectorlogo.com/logos/pandas.svg"},
    {name: "NumPy", logo: "https://cdn.worldvectorlogo.com/logos/numpy-1.svg"},
  ],
  "Machine Learning": [
    {
      name: "Python",
      logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    },
    {
      name: "TensorFlow",
      logo: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg",
    },
    {
      name: "PyTorch",
      logo: "https://cdn.worldvectorlogo.com/logos/pytorch.svg",
    },
    {
      name: "scikit-learn",
      logo: "https://cdn.worldvectorlogo.com/logos/scikit-learn.svg",
    },
    {name: "Keras", logo: "https://cdn.worldvectorlogo.com/logos/keras-1.svg"},
    {
      name: "Jupyter",
      logo: "https://cdn.worldvectorlogo.com/logos/jupyter.svg",
    },
  ],
  "Data Analytics": [
    {
      name: "Python",
      logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    },
    {name: "Pandas", logo: "https://cdn.worldvectorlogo.com/logos/pandas.svg"},
    {name: "NumPy", logo: "https://cdn.worldvectorlogo.com/logos/numpy-1.svg"},
    {
      name: "Tableau",
      logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
    },
    {
      name: "Power BI",
      logo: "https://cdn.worldvectorlogo.com/logos/power-bi-1.svg",
    },
    {
      name: "Apache Spark",
      logo: "https://cdn.worldvectorlogo.com/logos/apache-spark-5.svg",
    },
  ],
  "CMS & E-Commerce": [
    {
      name: "WordPress",
      logo: "https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg",
    },
    {
      name: "Shopify",
      logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    },
    {
      name: "WooCommerce",
      logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg",
    },
    {
      name: "Magento",
      logo: "https://cdn.worldvectorlogo.com/logos/magento-1.svg",
    },
    {
      name: "Strapi",
      logo: "https://cdn.worldvectorlogo.com/logos/strapi-2.svg",
    },
    {name: "Sanity", logo: "https://cdn.worldvectorlogo.com/logos/sanity.svg"},
  ],
};

const menuItems = Object.keys(categories);

const TechSolutionsSection = () => {
  const [active, setActive] = useState("Mobility");

  const items = useMemo(() => categories[active] || [], [active]);

  return (
    <div className="bg-white py-72 px-4 sm:px-6 lg:px-8">
      <div className="max-w-10xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#231f20] leading-tight">
            Empowering Digital Transformation with{" "}
            <br className="hidden sm:inline" /> Innovative Tech Solutions
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
          <div className="bg-[#f7b968] p-4 sm:p-6 lg:p-8 flex-shrink-0 lg:w-1/2">
            <nav>
              <ul className="space-y-2 sm:space-y-3 text-[#231f20]">
                {menuItems.map((label) => (
                  <li
                    key={label}
                    onClick={() => setActive(label)}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                      active === label
                        ? "bg-white text-[#231f20] shadow-sm ring-1 ring-black/5"
                        : "hover:bg-black/5"
                    }`}
                  >
                    <TabIcon label={label} />
                    <span className="font-medium">{label}</span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex-1 p-6 sm:p-8 bg-[#fff7ed]">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-16 sm:gap-16 pt-6">
              {items.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-10 w-10 object-contain"
                  />
                  <span className="font-semibold text-gray-800">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSolutionsSection;
