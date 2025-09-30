import React from "react";
import SectionHeading from "./SectionHeading";

const FAQ = ({container}) => {
  const faqData = [
    {
      id: 1,
      question: "What is Cybdeer?",
      answer:
        "Cybdeer is a leading IT company in India with over eight years of experience. Our expertise allows us to provide top-tier services in software, application, DevOps, Salesforce, UI/UX, and website development, along with future-driven maintenance and update services.",
    },
    {
      id: 2,
      question: "Why only Cybdeer?",
      answer:
        "Cybdeer is the best choice for your IT solutions because it is a web and mobile app company near you. Our developers and experts are ready to provide the best solutions that suit your organization and give the best outcome by building engagement and brand awareness. The benefits of using Cybdeer’s services include their future vision, business expansion, and overall business growth.",
    },
    {
      id: 3,
      question: "How many services does Cybdeer offer?",
      answer:
        "We are in a dynamic field, and we offer a variety of services such as mobile app development, website development, DevOps, UI/UX development, and Salesforce development, among many others that are helpful for your growth. Our top developers, who have over eight years of expertise in this field, are ready to add scalability to your organization.",
    },
    {
      id: 4,
      question: "What is the estimated timeline and cost to develop a website?",
      answer:
        "Cost and time are important factors that are heavily considered when choosing a company for an IT project. These factors are entirely dependent on your company&#39;s specific needs, such as the type of website or app you require, the additional tools you need, your target audience, and many more. We consider all of these factors to ensure you make the right choice with a minimum of cost and time.",
    },
    {
      id: 5,
      question:
        "Does your company provide maintenance and support after software and web development?",
      answer:
        "Our company also provides maintenance and update services, which are crucial for many organizations. Without regular maintenance and updates, your business may struggle to survive in this competitive market due to constant changes. As a leading IT company, Cyber takes you through every step, from analysis to maintenance.",
    },
  ];

  return (
    <div className={`${container}`}>
      <SectionHeading title="Frequently Asked Questions" align="center" />

      <div className="space-y-4 text-base sm:text-lg">
        {faqData.map((faq, index) => (
          <details
            key={faq.id}
            className="group [&_summary::-webkit-details-marker]:hidden [&[open]_summary]:border-[#FFF7EA]"
            open={index === 0}
          >
            <summary
              className="flex items-center gap-4 rounded-lg p-4 sm:p-6 text-gray-800 cursor-pointer transition-all duration-300 bg-[#FFF7EA] text-sm sm:text-base"
              style={{
                border: "1px solid transparent",
              }}
            >
              <div className="bg-secondary w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0 border-4 border-[#E5B15F]">
                {faq.id}
              </div>
              <h2 className="text-base sm:text-lg font-semibold flex-1">
                {faq.question}
              </h2>
              <svg
                className="w-5 h-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 rounded-b-lg leading-relaxed bg-[#FFF7EA] text-sm sm:text-base">
              <p className="text-justify">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
