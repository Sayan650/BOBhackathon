export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Feature from "@/components/features";
import Testimonial from "@/components/testimonial";
import GetInTouch from "@/components/contact";
import Description from "@/components/description";
import Manifesto from "@/components/manifesto";
import ReverseManifesto from "@/components/reverseManifesto";

const points = [
  "Ensure transparency in governance.",
  "Promote sustainable development.",
  "Enhance educational opportunities.",
  "Strengthen healthcare infrastructure.",
  "Ensure transparency in governance.",
  "Promote sustainable development.",
  "Enhance educational opportunities.",
  "Strengthen healthcare infrastructure.",
];

const imageUrl = "https://via.placeholder.com/640x480";

export default function Home() {
  return (
    <>
      <Manifesto
        candidateName="John Doe"
        manifestoTitle="A Vision for the Future"
        points={points}
        imageUrl={imageUrl}
      />
      <ReverseManifesto
      candidateName="John Doe"
      manifestoTitle="A Vision for the Future"
      points={points}
      imageUrl={imageUrl}
      />
      <Testimonial />
      {/* <BusinessCategories />
      <LargeTestimonial />
      <FeaturesPlanet /> */}
      {/* <Feature /> */}
      <LargeTestimonial />
      {/* <Description /> */}
      {/* <Cta /> */}
      <GetInTouch />
    </>
  );
}
