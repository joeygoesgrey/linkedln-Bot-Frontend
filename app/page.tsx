"use client";

import Hero from "@/components/hero";
import Features from "@/components/features";
import WhatWeDo from "@/components/what-we-do";
import WhoWeHelp from "@/components/who-we-help";
import Proof from "@/components/proof";
import Transformation from "@/components/transformation";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatWeDo />
      <WhoWeHelp />
      <Features />
      <Proof />
      <Transformation />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
