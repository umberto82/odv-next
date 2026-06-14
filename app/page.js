import IntroSection from "@/components/IntroSection";
import HeroFeatures from "@/components/HeroFeatures";
import HeroHome from "@/components/HeroHome";
import PropertyStory from "@/components/PropertyStory";
import Reviews from "@/components/Reviews";
import PerfectStay from "@/components/PerfectStay";
import Location from "@/components/Location";

export default function Page() {
  return (
    <main>
      <HeroHome />
      {/* <IntroSection /> la teniamo per altre parti del sito*/}
      <PropertyStory />
      <PerfectStay />
      <Location />
      <Reviews />
    </main>
  );
}