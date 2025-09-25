import {man3, playIcon, bgBlur2} from "../../data/assetes";
import {testimonialsData} from "../../data/data";
import VideoSection from "./sections/VideoSection";
import HeadingSection from "../../components/reusable/SectionHeading";
import TestimonialGrid from "./sections/TestimonialGrid";

export default function Testimonials({container}) {
  return (
    <>
      <div className={`bg-gradient-to-br from-primary to-white py-72 relative`}>
        <VideoSection img={man3} container={container} playIcon={playIcon} />

        <div className={`${container} pt-72 px-2`}>
          <HeadingSection
            title="Hear From Those Who've Trusted Us to Bring Their Vision to Life."
            subtitle="From startups to established enterprises, these videos bring to life the experiences of partners who trusted us to transform their ideas into impactful solutions."
          />

          <TestimonialGrid testimonialsData={testimonialsData} />

          <img
            src={bgBlur2}
            alt=""
            className="absolute bottom-0 right-0 w-full"
          />
        </div>
      </div>
    </>
  );
}
