import BrowseTheImage from "@/components/ui/browse-by-cat";
import Hero from "../components/ui/hero";
import Products from "@/components/ui/our-products";
import Rooms from "@/components/ui/beautifull-romms";

export default function Home() {
  return (
    <section className="bg-[#fcfcfc] max-w-[80vw] mx-auto  ">
      <Hero />
      <BrowseTheImage/>
      <Products/>
      <Rooms/>
    </section>
  );
}
