import BrowseTheImage from "@/components/main/browse-by-cat";
import Products from "@/components/main/our-products";
import Rooms from "@/components/main/beautifull-romms";
import FeaturesSection from "@/components/ui/why-choose-us";
import GallerySection from "@/components/main/Gallery-section";
import HeroSection from "../components/main/hero";
export default function Home() {
  return (
    <section className="bg-[#fcfcfc]">
      <HeroSection />
      <BrowseTheImage />
      <Products />
      <Rooms />
      <GallerySection />
      <FeaturesSection />
      
    </section>
  );
}
