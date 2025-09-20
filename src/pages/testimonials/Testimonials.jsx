import {man3, playIcon} from "../../data/assetes";
import {testimonialsData} from "../../data/data";
import VideoSection from "./sections/VideoSection";
import HeadingSection from "../../components/reusable/SectionHeading";

export default function Testimonials({container}) {
  let marginTop = "pt-72";
  return (
    <>
      <div
        className={`bg-gradient-to-br from-primary to-white ${marginTop} mb-72`}
      >
        <VideoSection img={man3} container={container} playIcon={playIcon} />

        <div className={`${container} ${marginTop}`}>
          <HeadingSection
            title="Hear From Those Who've Trusted Us to Bring Their Vision to Life."
            subtitle="From startups to established enterprises, these videos bring to life the experiences of partners who trusted us to transform their ideas into impactful solutions."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData?.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col justify-between relative mt-10 "
              >
                {/* Quote Image */}
                <img
                  src={item.quote}
                  alt="quote"
                  className="w-14 h-14  absolute -top-8 left-40"
                />

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.text}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                  {/* Stars Image */}
                  <img src={item.stars} alt="stars" className="w-20 h-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
