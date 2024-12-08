import Head from "next/head";
import Carousel from "@/components/ui/carousel";

export default function Home() {
  const images = [
    "/carousel-pics/care.png",
    "/carousel-pics/dynaning.png",
    "/carousel-pics/last.png",
  ];

  return (
    <>
      <Head>
        <title>Beautiful Room Inspiration</title>
        <meta
          name="description"
          content="Discover beautiful room inspirations for your home."
        />
      </Head>
      <div className="bg-gray-50 min-h-screen">
        <header className="p-6 bg-white shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Beautiful Room Inspiration
          </h1>
        </header>

        <main className="max-w-7xl mx-auto py-8 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight text-gray-800">
                50+ Beautiful Rooms to Inspire You
              </h2>
              <p className="text-gray-600">
                Our designer has created numerous stunning room prototypes to
                help inspire your next project.
              </p>
              <button className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700">
                Explore More
              </button>
            </div>
            <div>
              <Carousel images={images} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
