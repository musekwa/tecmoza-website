// "use client";
import React from "react";
import AboutHeroSection from "./_components/about-hero-section";
import OurValuesSection from "./_components/our-values-section";
import VisionSection from "./_components/vision-section";
import AboutDescriptionSection from "./_components/about-description-section";
import GetInTouch from "@/get-in-touch";
import OurClientSection from "@/our-clients-section";


type Props = {};

const AboutPage = async (props: Props) => {

  return (
    <div className="">
      <AboutHeroSection />

      <div className="h-full w-full">
        <AboutDescriptionSection />
        <div className="p-6 lg:px-24 ">
          <VisionSection />
        </div>
        <div className="my-6 bg-white">
          <div className="p-6 lg:px-24 ">
            <OurValuesSection />
          </div>
        </div>
        <OurClientSection />
        <GetInTouch />
      </div>
    </div>
  );
};

export default AboutPage;
