import GetInTouch from "@/components/get-in-touch";
import VideoBackground from "@/components/video-background";
import {
  ArrowRight,
  CupSodaIcon,
  FlagIcon,
  GoalIcon,
  HandshakeIcon,
  Milestone,
  Trophy,
  UserRoundPlus,
} from "lucide-react";
import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import AboutHeroSection from "./_components/about-hero-section";
import OurValuesSection from "./_components/our-values-section";
import VisionSection from "./_components/vision-section";
import AboutDescriptionSection from "./_components/about-description-section";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import OurClientSection from "@/components/our-clients-section";

type Props = {};

const AboutPage = (props: Props) => {
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
