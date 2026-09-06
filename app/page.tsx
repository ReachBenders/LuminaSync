import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PositioningStrip } from "@/components/sections/PositioningStrip";
import { Services } from "@/components/sections/Services";
import { SystemFlow } from "@/components/sections/SystemFlow";
import { Multilingual } from "@/components/sections/Multilingual";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { DemoConcepts } from "@/components/sections/DemoConcepts";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <PositioningStrip />
        <Services />
        <SystemFlow />
        <Multilingual />
        <Process />
        <Pricing />
        <DemoConcepts />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
