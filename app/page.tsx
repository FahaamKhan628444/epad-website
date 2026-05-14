import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import GalleryPreview from "@/components/GalleryPreview";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChoose />
      {/* <GalleryPreview /> */}
      <CTA />
    </main>
  );
}