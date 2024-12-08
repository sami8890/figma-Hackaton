"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const heroImageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroImageRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );

    // Animate each line in the text block
    const lines = gsap.utils.toArray(".heroText > *"); // Select all direct children of .heroText
    gsap.fromTo(
      lines,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <>
      <div className="heroImage mb-44" ref={heroImageRef}>
        <Image
          src="/hero-section-image.png"
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        <div className="heroText bg-[#FFF3E3] border-2 border-[#B88E2F]">
          <h6>New Arrival</h6>
          <h3>
            Discover Our <br /> New Collection
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolore
          </p>
          <button className="buyBtn">
            <Link href="/shop">BUY NOW</Link>
          </button>
        </div>
      </div>
    </>
  );
}
