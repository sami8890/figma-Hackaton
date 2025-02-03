"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const leftImages: GalleryImage[] = [
  {
    src: "/gallery-section/left1.jpg",
    alt: "Workspace setup with laptop and vintage radio",
    width: 600,
    height: 500,
    className: "col-span-2",
  },
  {
    src: "/gallery-section/left2.png",
    alt: "Decorative items on wooden stools",
    width: 300,
    height: 400,
  },
  {
    src: "/gallery-section/left3.png",
    alt: "Vintage leather armchair",
    width: 300,
    height: 400,
  },
  {
    src: "/gallery-section/left4.jpg",
    alt: "Modern dining area",
    width: 600,
    height: 500,
    className: "col-span-2",
  },
];

const rightImages: GalleryImage[] = [
  {
    src: "/gallery-section/right1.png",
    alt: "Bedroom with neutral tones",
    width: 600,
    height: 500,
    className: "col-span-2",
  },
  {
    src: "/gallery-section/right2.png",
    alt: "Framed artwork with vase",
    width: 300,
    height: 400,
  },
  {
    src: "/gallery-section/right3.png",
    alt: "Kitchen with tiled backsplash",
    width: 300,
    height: 400,
  },
  {
    src: "/gallery-section/right3.png",
    alt: "Workspace corner",
    width: 600,
    height: 500,
    className: "col-span-2",
  },
];

const centerImage: GalleryImage = {
  src: "/gallery-section/center.jpg",
  alt: "Large central furniture piece",
  width: 800,
  height: 1200,
};

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-medium mb-2">Share your setup with</h2>
        <p className="text-4xl font-bold text-gray-800">#FuniroFurniture</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {/* Left Column Grid */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4 auto-rows-min">
          {leftImages.map((image, index) => (
            <GalleryItem
              key={`left-${index}`}
              image={image}
              onSelect={setSelectedImage}
            />
          ))}
        </div>

        {/* Center Column - Large Image */}
        <div className="lg:col-span-3 relative h-[calc(100vh-200px)] min-h-[600px] max-h-[1200px]">
          <GalleryItem
            image={centerImage}
            onSelect={setSelectedImage}
            isCenterImage
          />
        </div>

        {/* Right Column Grid */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4 auto-rows-min">
          {rightImages.map((image, index) => (
            <GalleryItem
              key={`right-${index}`}
              image={image}
              onSelect={setSelectedImage}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}

function GalleryItem({
  image,
  onSelect,
  isCenterImage = false,
}: {
  image: GalleryImage;
  onSelect: (image: GalleryImage) => void;
  isCenterImage?: boolean;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className={`relative ${
        image.className || ""
      } cursor-pointer overflow-hidden rounded-lg ${
        isCenterImage ? "h-full" : "h-[200px] md:h-[300px]"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onSelect(image)}
    >
      {imageError ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
          {image.alt}
        </div>
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={`object-cover transition-transform duration-300 hover:scale-110 ${
            isCenterImage ? "object-center" : ""
          }`}
          quality={isCenterImage ? 95 : 90}
          loading="lazy"
          sizes={
            isCenterImage
              ? "(max-width: 1024px) 100vw, 40vw"
              : "(max-width: 1024px) 50vw, 20vw"
          }
          onError={() => setImageError(true)}
        />
      )}
    </motion.div>
  );
}

function Lightbox({
  image,
  onClose,
}: {
  image: GalleryImage;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          quality={100}
        />
        <button
          className="absolute top-4 right-4 text-white text-xl"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          ×
        </button>
      </div>
    </motion.div>
  );
}
