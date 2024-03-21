import Link from "next/link";
import FirstSection from "../../components/navbar/_components/first-section";
import FourthSection from "../../components/navbar/_components/fourth-section";
import SecondSection from "../../components/navbar/_components/second-section";
import ThirdSection from "../../components/navbar/_components/third-section";
import { Button } from "@/components/ui/button";
import GetInTouch from "@/components/get-in-touch";

export default function LandingPage() {
  return (
    <main className="  py-12 ">
      <div className="px-4 lg:px-24 ">
        <FirstSection />
      </div>
      <div className="px-4 lg:px-24 bg-sky-100 py-6 ">
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
