import BrowseTheImage from "@/components/ui/browse-the-image";
import Hero from "../components/ui/hero";
import Products from "@/components/ui/our-products";

export default function Home() {
  return (
    <section>
      <Hero />
      <BrowseTheImage/>
      <Products/>
    </section>
  );
}
