import { Reveal } from "@/components/ui/reveal";
import { Hero } from "@/components/sections/home/hero";
import { Partners } from "@/components/sections/home/partners";
import { AboutIntro } from "@/components/sections/home/about-intro";
import { Solutions } from "@/components/sections/home/solutions";
import { ServicesGrid } from "@/components/sections/home/services-grid";
import { Process } from "@/components/sections/home/process";
import { Testimonials } from "@/components/sections/home/testimonials";
import { WhyChooseUs } from "@/components/sections/home/why-choose-us";
import { ProjectsBooking } from "@/components/sections/home/projects-booking";
import { Faq } from "@/components/sections/home/faq";
import { Cta } from "@/components/sections/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Moved up: Immediate trust signal right after the hook */}
      <Reveal><Partners /></Reveal>
      
      <Reveal><AboutIntro /></Reveal>
      
      {/* NEW: Agitate the pain point before offering the solution */}
      <Reveal><Solutions /></Reveal>
      
      <Reveal><ServicesGrid /></Reveal>
      <Reveal><Process /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><WhyChooseUs /></Reveal>
      <Reveal><ProjectsBooking /></Reveal>
      <Reveal><Faq /></Reveal>
      <Reveal><Cta /></Reveal>
    </>
  );
}