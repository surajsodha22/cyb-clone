import React from "react";
import {
  aboutBanner,
  image,
  partner,
  headSalesForces,
  aiImg,
  businessHeadImg,
  uiUxHeadImg,
  contactHead,
  softwareHead,
  mobileHead,
  webHead,
  devopsHead,
  testimoHead,
  headCareers,
  headOurTeam,
} from "../../data/assetes";

import HomeHero from "./heroes/HomeHero";
import AboutHero from "./heroes/AboutHero";
import CareerHero from "./heroes/CareerHero";
import ContactHero from "./heroes/ContactHero";
import TestimonialsHero from "./heroes/TestimonialsHero";
import PartnershipHero from "./heroes/PartnershipHero";
import MobileAppHero from "./heroes/MobileAppHero";
import SoftwareHero from "./heroes/SoftwareHero";
import SalesforceHero from "./heroes/SalesforceHero";
import AIDevelopmentHero from "./heroes/AIDevelopmentHero";
import BusinessModernizationHero from "./heroes/BusinessModernizationHero";
import UiUxDesignHero from "./heroes/UiUxDesignHero";
import WebsiteDevelopmentHero from "./heroes/WebsiteDevelopmentHero";
import DevOpsHero from "./heroes/DevOpsHero";
import OurTeamHero from "./heroes/OurTeamHero";

const Banner = ({container, location}) => {
  return (
    <>
      <div className="">
        {location?.pathname === "/" ? (
          <HomeHero
            button={{
              text: "Ready to go to!!",
              onClick: () => alert("Experts"),
            }}
            image={image}
            container={container}
          />
        ) : location?.pathname === "/about" ? (
          <AboutHero
            title="About Us"
            image={aboutBanner}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/careers" ? (
          <CareerHero
            title="Carrier"
            image={headCareers}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/partnership" ? (
          <PartnershipHero title="Partner With Us" image={partner} />
        ) : location?.pathname === "/salesforce" ? (
          <SalesforceHero
            title="Salesforce Development Company"
            description={
              "Cybdeer is a leading mobile app development company with expertise in developing cross-platform and native mobile applications. Hire our dedicated Mobile app developers to build award-winning apps and give wings to your ideas."
            }
            image={headSalesForces}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/ai-development" ? (
          <AIDevelopmentHero
            title="AI Development"
            description={
              "Cybdeer is a leading mobile app development company with expertise in developing cross-platform and native mobile applications. Hire our dedicated Mobile app developers to build award-winning apps and give wings to your ideas."
            }
            image={aiImg}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/business-modernization" ? (
          <BusinessModernizationHero
            title="Business Modernization"
            description={
              "Cybdeer is a leading mobile app development company with expertise in developing cross-platform and native mobile applications. Hire our dedicated Mobile app developers to build award-winning apps and give wings to your ideas."
            }
            image={businessHeadImg}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/ui-ux-design" ? (
          <UiUxDesignHero
            title="UI UX Design "
            description={
              "Cybdeer is a leading mobile app development company with expertise in developing cross-platform and native mobile applications. Hire our dedicated Mobile app developers to build award-winning apps and give wings to your ideas."
            }
            image={uiUxHeadImg}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/contact-us" ? (
          <ContactHero
            title="Get in Touch "
            image={contactHead}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/mobile-app-development" ? (
          <MobileAppHero
            title="Mobile App Development"
            description={
              "Cybdeer is a leading mobile app development company with expertise in developing cross-platform and native mobile applications. Hire our dedicated Mobile app developers to build award-winning apps and give wings to your ideas."
            }
            image={mobileHead}
          />
        ) : location?.pathname === "/software-development" ? (
          <SoftwareHero
            title="Software Development"
            description={
              "As the premier software company, we empower your growth and innovation with a future-forward vision for software development. We focus on your long-term goals, ensuring you are equipped to thrive in this competitive environment."
            }
            image={softwareHead}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/website-development" ? (
          <WebsiteDevelopmentHero
            title="Web Development "
            description={
              "Cybdeer is a leading mobile app development company with expertise in developing cross-platform and native mobile applications. Hire our dedicated Mobile app developers to build award-winning apps and give wings to your ideas."
            }
            image={webHead}
            pathname={location?.pathname}
          />
        ) : location?.pathname === "/devops" ? (
          <DevOpsHero
            title="DevOps Services Solutions"
            description={
              "Cybdeer is a leading mobile app development company with expertise in developing cross-platform and native mobile applications. Hire our dedicated Mobile app developers to build award-winning apps and give wings to your ideas."
            }
            image={devopsHead}
            pathname={location.pathname}
          />
        ) : location?.pathname === "/testimonials" ? (
          <TestimonialsHero
            title="Testimonial"
            image={testimoHead}
            container={container}
          />
        ) : location?.pathname === "/our-team" ? (
          <OurTeamHero
            title="Our Team"
            description="We have expert members in every field, each with over eight years of experience, which is helpful for your company's growth. As a top IT company, we are ready to serve your company with the best services."
            image={headOurTeam}
            container={container}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Banner;
