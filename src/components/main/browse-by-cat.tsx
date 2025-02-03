"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define type for category
interface Category {
  title: string;
  image: string;
}

export default function Categories(): React.JSX.Element {
  // Create refs for section and individual category elements
  const sectionRef = useRef<HTMLElement | null>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  const categories: Category[] = [
    { title: "Dining", image: "/browse-images/bed.png" },
    { title: "Living", image: "/browse-images/browse.png" },
    { title: "Bedroom", image: "/browse-images/guldasta.png" },
  ];

  useEffect(() => {
    // Ensure refs are not null before animating
    if (!sectionRef.current) return;

    // Animate section title
    const titleElement = sectionRef.current.querySelector("h2");
    const descriptionElement = sectionRef.current.querySelector("p");

    if (titleElement) {
      gsap.fromTo(
        titleElement,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate section description
    if (descriptionElement) {
      gsap.fromTo(
        descriptionElement,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate category items
    categoryRefs.current.forEach((categoryEl, index) => {
      if (!categoryEl) return;

      gsap.fromTo(
        categoryEl,
        {
          opacity: 0,
          scale: 0.8,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: categoryEl,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Add hover and mouse interaction
      const imageContainer = categoryEl.querySelector(".image-container");
      const categoryTitle = categoryEl.querySelector("h3");

      if (imageContainer && categoryTitle) {
        // Hover effect
        gsap.set(imageContainer, { transformOrigin: "center center" });

        imageContainer.addEventListener("mouseenter", () => {
          gsap.to(imageContainer, {
            scale: 1.05,
            rotation: 2,
            duration: 0.3,
            ease: "power1.inOut",
          });
          gsap.to(categoryTitle, {
            color: "#007bff",
            scale: 1.1,
            duration: 0.3,
          });
        });

        imageContainer.addEventListener("mouseleave", () => {
          gsap.to(imageContainer, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power1.inOut",
          });
          gsap.to(categoryTitle, {
            color: "inherit",
            scale: 1,
            duration: 0.3,
          });
        });
      }
    });

    // Cleanup function
    return () => {
      // Remove any event listeners or kill animations if needed
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="p-6 mt-24 max-w-[80vw] mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 text-center opacity-0">
        Browse The Range
      </h2>
      <p className="text-center text-gray-500 opacity-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null) => {
              categoryRefs.current[index] = el;
            }}
            className="flex flex-col items-center text-center space-y-4 opacity-0"
          >
            {/* Image Container */}
            <div className="image-container w-full h-[480px] flex items-center justify-center rounded-lg overflow-hidden shadow-md bg-gray-100 cursor-pointer">
              <Image
                src={category.image}
                alt={`${category.title} category`}
                width={381}
                height={480}
                className="rounded-lg transition-transform duration-300"
              />
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold transition-colors duration-300">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
