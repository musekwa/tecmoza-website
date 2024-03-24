import Link from "next/link";
import FirstSection from "./_components/first-section";
import FourthSection from "./_components/fourth-section";
import SecondSection from "./_components/second-section";
import ThirdSection from "./_components/third-section";
import { Button } from "@/components/ui/button";
import GetInTouch from "@/components/get-in-touch";

export default function LandingPage() {
  return (
    <main className="  pb-12 ">
      <div className="px-4 lg:px-24  my-6 py-6 ">
        <FirstSection />
      </div>

      <div className="px-4 lg:px-24 bg-sky-100 my-6 py-6 ">
        <SecondSection />
      </div>
      <div className="px-4 lg:px-24  ">
        <ThirdSection />
      </div>
      <div className="px-4 lg:px-24  ">
        <FourthSection />
      </div>

      <GetInTouch />
    </main>
  );
}
