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

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <LargeTestimonial />
      <FeaturesPlanet />
      <Feature/>
      <LargeTestimonial />
      <Description/>
      <Testimonial/>
      <Cta />
      <GetInTouch/>
    </>
  );
}
