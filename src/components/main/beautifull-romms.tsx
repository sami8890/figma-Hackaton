"use client"
import { useEffect, useRef, useState } from 'react';
import Head from "next/head";
import Carousel from "@/components/ui/carousels";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { ChevronUp } from 'lucide-react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const carouselRef = useRef(null);
  const mainSectionRef = useRef(null);
  const headerRef = useRef(null);
  const cursorRef = useRef(null);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Enhanced cursor effect
    const cursor = gsap.to('.cursor', {
      opacity: 0,
      ease: 'steps(1)',
      repeat: -1,
      duration: 0.8,
      yoyo: true
    });

    // Refined parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX - window.innerWidth / 2) / window.innerWidth;
      const yPos = (clientY - window.innerHeight / 2) / window.innerHeight;

      gsap.to([titleRef.current, descriptionRef.current], {
        x: xPos * 20,
        y: yPos * 20,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.to(carouselRef.current, {
        x: xPos * 30,
        y: yPos * 30,
        duration: 1,
        ease: 'power2.out'
      });
    };

    // Scroll top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Enhanced header animation
    gsap.to(headerRef.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top top',
        end: '+=100',
        scrub: 0.5
      },
      backgroundColor: '#f8f9fa',
      boxShadow: '0 8px 15px rgba(0,0,0,0.06)',
      ease: 'none'
    });

    // Main content animations
    const scrollTrigger = {
      trigger: mainSectionRef.current,
      start: 'top center+=100',
      end: 'bottom center',
      toggleActions: 'restart none none reverse',
      scrub: false,
    };

    const mainTimeline = gsap.timeline({ scrollTrigger });

    // Enhanced title animation
    mainTimeline
      .set(titleRef.current, {
        text: '',
        letterSpacing: '0.2em',
        opacity: 0
      })
      .to(titleRef.current, {
        duration: 0.4,
        opacity: 1,
        letterSpacing: '0em',
        ease: 'power2.out'
      })
      .to(titleRef.current, {
        text: "50+ Beautiful Rooms to Inspire You",
        duration: 2,
        ease: 'none'
      });

    // Content reveal
    const contentTimeline = gsap.timeline({
      scrollTrigger: {
        ...scrollTrigger,
        start: 'top center+=150'
      }
    });

    contentTimeline
      .fromTo(descriptionRef.current,
        {
          opacity: 0,
          y: 30,
          clipPath: 'inset(0 0 100% 0)'
        },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.2,
          ease: 'power3.out'
        }
      )
      .fromTo(buttonRef.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.2)'
        },
        '-=0.6'
      )
      .fromTo(carouselRef.current,
        {
          opacity: 0,
          scale: 0.9,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power2.out'
        },
        '-=0.8'
      );

    // Button hover effect
    if (buttonRef.current) {
      gsap.set(buttonRef.current, { transformOrigin: 'center' });

      const buttonHover = gsap.to(buttonRef.current, {
        scale: 1.03,
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
        duration: 0.3,
        paused: true,
        ease: 'power2.out'
      });

      (buttonRef.current as HTMLElement).addEventListener('mouseenter', () => buttonHover.play());
      (buttonRef.current as HTMLElement).addEventListener('mouseleave', () => buttonHover.reverse());
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(t => t.kill());
      cursor.kill();
    };
  }, []);

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

      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen overflow-hidden">
        <header
          ref={headerRef}
          className="p-6 bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-40 transition-all duration-300"
        >
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Beautiful Room Inspiration
          </h1>
        </header>

        <main
          ref={mainSectionRef}
          className="max-w-7xl mx-auto py-12 px-4 relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2
                ref={titleRef}
                className="text-4xl font-bold leading-tight text-gray-800 relative"
                aria-live="polite"
              >
                <span ref={cursorRef} className="cursor absolute right-0 top-0 inline-block">|</span>
              </h2>
              <p
                ref={descriptionRef}
                className="text-lg text-gray-600"
              >
                Our designer has created numerous stunning room prototypes to
                help inspire your next project.
              </p>
              <button
                ref={buttonRef}
                className="px-8 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-all duration-300"
                aria-label="Explore more room designs"
              >
                Explore More
              </button>
            </div>
            <div ref={carouselRef} className="transform">
              <Carousel images={images} />
            </div>
          </div>
        </main>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            }`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}