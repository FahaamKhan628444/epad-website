import Slider from "@/components/slider";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Insta from "@/components/Insta";
import WhyChoose from "@/components/WhyChoose";
import GalleryPreview from "@/components/GalleryPreview";
import CTA from "@/components/CTA";
import HowWeWork from "@/components/HowWeWork";

export default function Home() {
  return (
    <main>
      <Hero />
      <Slider />
      <Services />
      <HowWeWork />
      <WhyChoose />   
      <Insta />
      {/* <GalleryPreview /> */}
      <CTA />
    </main>
  );
}