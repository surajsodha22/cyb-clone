import React from "react";
import SectionHeading from "./SectionHeading";

const FAQ = ({container}) => {
  const faqData = [
    {
      id: 1,
      question: "What is Cybdeer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      id: 2,
      question: "Why only Cybdeer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      id: 3,
      question: "How many services does Cybdeer offer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      id: 4,
      question: "What technologies does Cybdeer use?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      id: 5,
      question: "How can I contact Cybdeer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      id: 6,
      question: "What is Cybdeer's experience?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
  ];

  return (
    <div className={`${container}`}>
      <SectionHeading title="Frequently Asked Questions" align="center" />

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <details
            key={faq.id}
            className="group [&_summary::-webkit-details-marker]:hidden [&[open]_summary]:border-[#FFF7EA]"
            open={index === 0}
          >
            <summary
              className="flex items-center gap-4 rounded-lg p-6 text-gray-800 cursor-pointer transition-all duration-300 bg-[#FFF7EA] "
              style={{
                border: "1px solid transparent",
              }}
            >
              <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 border-4 border-[#E5B15F]">
                {faq.id}
              </div>
              <h2 className="text-lg font-semibold flex-1">{faq.question}</h2>
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

            <div className="px-6 pb-6 text-gray-600 leading-relaxed bg-[#FFF7EA] ">
              <p className="text-justify">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
