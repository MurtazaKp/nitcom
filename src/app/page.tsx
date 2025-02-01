import AboutSection from "@/components/about-us";
import ClientsSection from "@/components/client";
import Contact from "@/components/contact";
import Cta from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";

import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/herosection";
import Services from "@/components/services";
import StatsSection from "@/components/stats";
import Testimonial from "@/components/testimonial";



export default function Home() {
  return (
    <>
   
  <Header/>
  <HeroSection/>
  <ClientsSection/>
  <AboutSection/>
  <StatsSection/>
  <Services/>
  <Features/>
  <FAQ/>
  <Cta/>
  <Testimonial/>
  <Contact/>
  <Footer/>
   </>
  );
}
