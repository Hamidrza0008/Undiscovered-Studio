import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <WhyUs />
      <Process />
      {/* <Team /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}
