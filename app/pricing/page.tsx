import React from "react";
import Pricing from "@/components/pricing";
import PageIllustration from "@/components/page-illustration";
import Header from "@/components/ui/header";
import Testimonial from "@/components/testimonial";
import Cta from "@/components/cta";
import Footer from "@/components/ui/footer";
import FAQSection from "@/components/faq";

const PricingPage = () => {
  return (
    <div className="relative">
      <Header />
      <PageIllustration />
      <Pricing />
      <Testimonial />
      {/* <Cta /> */}
      <FAQSection/>
      <Footer/>
    </div>
  );
};

export default PricingPage;
