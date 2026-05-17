import Slider from "@/components/slider";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Insta from "@/components/Insta";
import WhyChoose from "@/components/WhyChoose";
import GalleryPreview from "@/components/GalleryPreview";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Slider />
      <Hero />
      <Services />
      <WhyChoose />
      <Insta />
      {/* <GalleryPreview /> */}
      <CTA />
    </main>
  );
}