import IntroSection from "@/components/IntroSection";
import HeroFeatures from "@/components/HeroFeatures";
import HeroHome from "@/components/HeroHome";
import PropertyStory from "@/components/PropertyStory";
import Reviews from "@/components/Reviews";
import PerfectStay from "@/components/PerfectStay";
import Location from "@/components/Location";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  description:
    "Affitta villa con piscina privata, campo da tennis e WiFi a Lozzo Atestino sui Colli Euganei. Ideale per famiglia, relax e smart working. A 30 min da Venezia, Verona e Vicenza. Prenota il tuo soggiorno a Oasi Dolce Vita.",
  openGraph: {
    title: "Oasi Dolce Vita — Villa con piscina privata sui Colli Euganei",
    description:
      "Affitta villa con piscina privata, campo da tennis e WiFi a Lozzo Atestino sui Colli Euganei. Ideale per famiglia e relax. A 30 min da Venezia, Verona e Vicenza.",
    url: "https://oasidolcevita.com",
  },
};

const vacationRental = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  name: "Oasi Dolce Vita",
  description:
    "Affitta villa con piscina privata, campo da tennis e WiFi a Lozzo Atestino sui Colli Euganei. A 30 min da Venezia, Verona e Vicenza. Ideale per relax, famiglia e smart working.",
  image: [
    "https://oasidolcevita.com/imgs/home/property-story/piscina-oasi-dolce-vita-lozzo-atestino.jpg",
    "https://oasidolcevita.com/imgs/home/property-story/oasi-dolce-vita-tennis.jpg",
    "https://oasidolcevita.com/imgs/home/property-story/oasi-dolce-vita-portico.jpg",
    "https://oasidolcevita.com/imgs/home/property-story/oasi-dolce-vita-camera-da-letto.jpg",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Pegorile 17/A",
    addressLocality: "Lozzo Atestino",
    addressRegion: "Padova",
    postalCode: "35034",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.2879201,
    longitude: 11.620232,
  },
  telephone: "+39 376 005 1382",
  email: "info@oasidolcevita.com",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Piscina privata" },
    { "@type": "LocationFeatureSpecification", name: "Campo da tennis" },
    { "@type": "LocationFeatureSpecification", name: "WiFi fibra" },
    { "@type": "LocationFeatureSpecification", name: "Aria condizionata" },
    { "@type": "LocationFeatureSpecification", name: "TV con Sky" },
    { "@type": "LocationFeatureSpecification", name: "Parcheggio privato" },
    { "@type": "LocationFeatureSpecification", name: "Ping pong" },
    { "@type": "LocationFeatureSpecification", name: "Vista Colli Euganei" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    ratingCount: "5",
  },
};

export default function Page() {
  return (
    <main>
      <JsonLd data={vacationRental} />
      <HeroHome />
      {/* <IntroSection /> la teniamo per altre parti del sito*/}
      <PropertyStory />
      <PerfectStay />
      <Location />
      <Reviews />
    </main>
  );
}