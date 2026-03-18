import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Treatments from "@/components/sections/Treatments";
import Team from "@/components/sections/Team";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import Agreements from "@/components/sections/Agreements";
import Booking from "@/components/sections/Booking";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/sections/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Treatments />
        <Team />
        <Experience />
        <Testimonials />
        <Agreements />
        <Booking />
        <Contact />
        <WhatsAppButton />
       
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}