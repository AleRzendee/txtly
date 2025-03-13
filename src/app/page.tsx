import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import HowItWorks from "@/app/components/HowItWorks";
import Testimonials from "@/app/components/Testimonials";
import CallToAction from "@/app/components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
