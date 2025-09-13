import React from "react";
import {headSalesForces} from "../../data/assetes";
import VideoSection from "./sections/VideoSection";
import TestimonialGrid from "./sections/TestimonialGrid";

const Testimonials = () => {
  return (
    <div>
      <VideoSection img={headSalesForces} />
      <TestimonialGrid />
    </div>
  );
};

export default Testimonials;
