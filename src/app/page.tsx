import BrowseTheImage from "@/components/main/browse-by-cat";
import Hero from "../components/main/hero";
import Products from "@/components/main/our-products";
import Rooms from "@/components/main/beautifull-romms";
import FeaturesSection from "@/components/ui/why-choose-us";
import GallerySection from "@/components/main/Gallery-section";

export default function Home() {
  return (
    <section className="bg-[#fcfcfc]">
      <Hero />
      <BrowseTheImage/>
      <Products/>
      <Rooms/>
      <GallerySection/>
      <FeaturesSection/>
    </section>
  );
}
