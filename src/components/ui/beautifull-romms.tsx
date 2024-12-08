"use client"
import { useEffect, useRef } from 'react';
import Head from "next/head";
import Carousel from "@/components/ui/carousel";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);


export default function Home() {
  // Refs for animating elements
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const carouselRef = useRef(null);
  const mainSectionRef = useRef(null);
  const headerRef = useRef(null);

  
  useEffect(() => {
    // Cursor effect
    const cursor = gsap.to('.cursor', {
      opacity: 0,
      ease: 'power2.inOut',
      repeat: -1
    });

    // Mouse move parallax and depth effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Parallax effect with depth
      gsap.to([titleRef.current, descriptionRef.current], {
        transform: `translate(${-clientX / 100}px, ${-clientY / 100}px)`,
        duration: 0.5,
        ease: 'power1.out'
      });

      gsap.to(carouselRef.current, {
        transform: `translate(${-clientX / 50}px, ${-clientY / 50}px)`,
        duration: 0.5,
        ease: 'power1.out'
      });

      // Subtle rotation effect
      gsap.to(mainSectionRef.current, {
        rotationX: (clientY - window.innerHeight / 2) / 50,
        rotationY: -(clientX - window.innerWidth / 2) / 50,
        transformPerspective: 400,
        duration: 0.5,
        ease: 'power1.out'
      });
    };

    // Add mouse move listener
    window.addEventListener('mousemove', handleMouseMove);

    // Typing effect for description
    gsap.to(titleRef.current, {
      text: "50+ Beautiful Rooms to Inspire You",
      duration: 2,
      ease: 'none'
    });

    // Header animation
    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    headerTimeline.to(headerRef.current, {
      backgroundColor: '#f3f4f6', // Subtle color change
      scale: 0.98,
      boxShadow: '0 10px 15px rgba(0,0,0,0.1)'
    });

    // Scroll-triggered main section animations
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: mainSectionRef.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });

    // Stagger and complex animations
    mainTimeline
      .fromTo(titleRef.current,
        { opacity: 0, y: 50, clipPath: 'inset(0 100% 0 0)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0% 0 0)',
          duration: 1,
          ease: 'power3.out'
        }
      )
      .fromTo(descriptionRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)'
        },
        '-=0.5'
      )
      .fromTo(buttonRef.current,
        { opacity: 0, y: 50, rotation: -10 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.3)'
        },
        '-=0.5'
      )
      .fromTo(carouselRef.current,
        { opacity: 0, scale: 0.6, rotation: -5 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: 'back.out(1.7)'
        },
        '-=0.5'
      );

    // Button hover effect
    if (buttonRef.current) {
      gsap.set(buttonRef.current, { transformOrigin: 'center' });
      (buttonRef.current as HTMLElement).addEventListener('mouseenter', () => {

        gsap.to(buttonRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power1.inOut'
        });
      });

      (buttonRef.current as HTMLElement).addEventListener('mouseleave', () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          duration: 0.3,
          ease: 'power1.inOut'
        });
      });
    }


    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
      <div className="bg-gray-50 min-h-screen overflow-hidden">
        <header
          ref={headerRef}
          className="p-6 bg-white shadow-md sticky top-0 z-50"
        >
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Beautiful Room Inspiration
          </h1>
        </header>

        <main
          ref={mainSectionRef}
          className="max-w-7xl mx-auto py-8 px-4 relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2
                ref={titleRef}
                className="text-4xl font-bold leading-tight text-gray-800 relative"
              >
                <span className="cursor absolute right-0 top-0 inline-block">|</span>
              </h2>
              <p
                ref={descriptionRef}
                className="text-gray-600"
              >
                Our designer has created numerous stunning room prototypes to
                help inspire your next project.
              </p>
              <button
                ref={buttonRef}
                className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 transition-all duration-300"
              >
                Explore More
              </button>
            </div>
            <div ref={carouselRef}>
              <Carousel images={images} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}