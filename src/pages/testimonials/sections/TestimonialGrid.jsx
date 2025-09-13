import React from "react";

const TestimonialGrid = () => {
  const testimonials = [
    {
      text: "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines. We've received numerous compliments on the new site, and it's easier for customers to navigate.",
      author: "Jane Cooper",
      title: "President of Sales",
      rating: 5,
    },
    {
      text: "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines. We've received numerous compliments on the new site, and it's easier for customers to navigate.",
      author: "Jane Cooper",
      title: "President of Sales",
      rating: 5,
    },
    {
      text: "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines. We've received numerous compliments on the new site, and it's easier for customers to navigate.",
      author: "Jane Cooper",
      title: "President of Sales",
      rating: 5,
    },
    {
      text: "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines. We've received numerous compliments on the new site, and it's easier for customers to navigate.",
      author: "Jane Cooper",
      title: "President of Sales",
      rating: 5,
    },
    {
      text: "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines. We've received numerous compliments on the new site, and it's easier for customers to navigate.",
      author: "Jane Cooper",
      title: "President of Sales",
      rating: 5,
    },
    {
      text: "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines. We've received numerous compliments on the new site, and it's easier for customers to navigate.",
      author: "Jane Cooper",
      title: "President of Sales",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex text-amber-500">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={`full-${i}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M11.48 3.499a.562.562 0 011.04 0l2.123 5.158 5.402.405a.562.562 0 01.32.996l-4.113 3.535 1.257 5.051a.562.562 0 01-.86.611l-4.64-2.885-4.64 2.885a.562.562 0 01-.86-.61l1.257-5.051-4.113-3.535a.562.562 0 01.32-.996l5.402-.405 2.123-5.158z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M11.48 3.499a.562.562 0 011.04 0l2.123 5.158 5.402.405a.562.562 0 01.32.996l-4.113 3.535 1.257 5.051a.562.562 0 01-.86.611l-4.64-2.885-4.64 2.885a.562.562 0 01-.86-.61l1.257-5.051-4.113-3.535a.562.562 0 01.32-.996l5.402-.405 2.123-5.158z" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={`empty-${i}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.123 5.158 5.402.405a.562.562 0 01.32.996l-4.113 3.535 1.257 5.051a.562.562 0 01-.86.611l-4.64-2.885-4.64 2.885a.562.562 0 01-.86-.61l1.257-5.051-4.113-3.535a.562.562 0 01.32-.996l5.402-.405 2.123-5.158z"
            />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Hear From Those Who've Trusted Us to Bring Their Vision to Life.
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From startups to established enterprises, these videos bring to life
            the experiences of partners who trusted us to transform their ideas
            into impactful solutions.
          </p>
        </div>

        {/* Testimonial Grid - Using Frame 427318979 Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="">
            <img
              src="/src/assetes/testimonial/frame 427318979.png"
              alt="Testimonial Cards"
              className="w-full h-auto  "
            />
          </div>
          <div className="col-span-1">
            <img
              src="/src/assetes/testimonial/frame 427318979.png"
              alt="Testimonial Cards"
              className="w-full h-auto "
            />
          </div>
          <div className="col-span-1">
            <img
              src="/src/assetes/testimonial/frame 427318979.png"
              alt="Testimonial Cards"
              className="w-full h-auto "
            />
          </div>
          <div className="col-span-1">
            <img
              src="/src/assetes/testimonial/frame 427318979.png"
              alt="Testimonial Cards"
              className="w-full h-auto "
            />
          </div>
          <div className="col-span-1">
            <img
              src="/src/assetes/testimonial/frame 427318979.png"
              alt="Testimonial Cards"
              className="w-full h-auto "
            />
          </div>
          <div className="col-span-1">
            <img
              src="/src/assetes/testimonial/frame 427318979.png"
              alt="Testimonial Cards"
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialGrid;
