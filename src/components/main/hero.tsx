"use client";
import { useLayoutEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Memoized hover handler
  const handleHover = useCallback((isHover: boolean) => {
    setIsHovered(isHover);
  }, []);

  useLayoutEffect(() => {
    if (!imageWrapperRef.current || !contentRef.current || !buttonRef.current)
      return;

    // Initial animation timeline
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    // Set initial states
    gsap.set([imageWrapperRef.current, contentRef.current.children], {
      opacity: 0,
      y: 50,
    });

    gsap.set(buttonRef.current, {
      scale: 0,
      opacity: 0,
    });

    // Main animation sequence
    tl.to(imageWrapperRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
    })
      .to(
        contentRef.current.children,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
        },
        "-=0.8"
      )
      .to(
        buttonRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

    // Add parallax effect
    const parallax = gsap.to(imageWrapperRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tl.kill();
      parallax.kill();
    };
  }, []);

  useLayoutEffect(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const hoverTl = gsap.timeline({ paused: true });

    hoverTl.to(button, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });

    if (isHovered) {
      hoverTl.play();
    } else {
      hoverTl.reverse();
    }

    return () => {
      hoverTl.kill();
    };
  }, [isHovered]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[400px] mb-20 md:mb-32 lg:mb-44 overflow-hidden"
    >
      <div
        ref={imageWrapperRef}
        className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
      >
        <Image
          src="/hero-section-image.png"
          alt="Showcase of our latest furniture collection"
          className={`object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setImageLoaded(true)}
          priority
          fill
          sizes="100vw"
          // onLoad={() => ScrollTrigger.refresh()}
        />
      </div>

      <div
        ref={contentRef}
        className="absolute top-1/2 left-4 right-4 md:left-auto md:right-8 lg:right-16 
                 transform -translate-y-1/2 
                 w-auto md:w-[26rem] lg:w-[29rem] 
                 bg-[#FFF3E3]/90 backdrop-blur-sm
                 border-2 rounded-lg 
                 p-6 md:p-10 lg:p-14 
                 flex flex-col gap-4 md:gap-6 lg:gap-8"
      >
        <span className="block font-bold text-xs md:text-sm tracking-wider text-gray-700">
          NEW ARRIVAL
        </span>

        <h1 className="text-2xl md:text-3xl lg:text-[2.5rem] font-extrabold text-[#B88E2F] leading-tight">
          Discover Our <br className="hidden md:block" /> New Collection
        </h1>

        <p className="text-sm md:text-base leading-relaxed text-gray-700">
          Explore premium quality with our latest designs. Find the perfect
          pieces to elevate your space.
        </p>

        <Link
          ref={buttonRef}
          href="/shop"
          aria-label="Shop the new collection"
          className="inline-flex items-center justify-center
                   bg-[#B88E2F] text-white 
                   px-6 md:px-8 lg:px-12 py-3 md:py-4
                   text-sm md:text-base
                   transition-all duration-300
                   hover:bg-[#9E7B2A]
                   focus:ring-2 focus:ring-offset-2 focus:ring-[#B88E2F]
                   rounded-md"
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          <span className="inline-block">BUY NOW</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
