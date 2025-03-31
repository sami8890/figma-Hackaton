"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Star, ShoppingBag, Clock } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 100])

  const slides = [
    {
      image: "/hero-section-image.png",
      title: "Artisan Crafted Furniture",
      subtitle: "Spring Collection 2025",
      description: "Discover handcrafted pieces that blend modern aesthetics with timeless comfort.",
      badge: "New Season",
      discount: "20% OFF",
      category: "Living Room",
      rating: 4.9,
      reviews: 128,
      lookProducts: [],
    },
    {
      image: "/hero-section-second.png",
      title: "Luxury Home Office",
      subtitle: "Work From Home Edition",
      description: "Ergonomic designs that transform your workspace into a productive sanctuary.",
      badge: "Limited Edition",
      discount: "Buy 2 Get 1 Free",
      category: "Office",
      rating: 4.7,
      reviews: 76,
      lookProducts: [],
    },
  ]

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }

    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 6000)
    }
  }

  useEffect(() => {
    resetAutoplay()
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [isAutoplay, slides.length])

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
    resetAutoplay()
  }

  const handlePause = () => {
    setIsAutoplay(!isAutoplay)
  }

  

  return (
    <section ref={heroRef} className="relative w-full bg-[#f9f5f0] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-50 rounded-bl-[100px] opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-50 rounded-tr-[100px] opacity-70"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-10"></div>
      </div>
              {/* under development banner */}
      <div className="sticky top-16 left-1/2 transform -translate-x-1/2 z-40 bg-amber-100 border border-amber-500 text-amber-700 px-4 py-2 rounded-lg shadow-md text-sm font-medium inline-flex items-center mx-auto my-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        This is under development
      </div>


      {/* Category Navigation */}
      {/* <div className="relative container mx-auto px-4">
        <div className="hidden lg:flex justify-center py-4 mb-4">
          <div className="bg-white rounded-full shadow-md flex items-center p-1">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`flex items-center px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${slides[currentSlide].category === category.name
                    ? "bg-amber-600 text-white"
                    : "text-gray-700 hover:bg-amber-50"
                  }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div> */}

      {/* Main Hero Content */}
      <div className="relative container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-5 z-10 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-xl"
              >
                {/* Badge & Discount */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold tracking-wide"
                  >
                    {slides[currentSlide].badge}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold tracking-wide"
                  >
                    {slides[currentSlide].discount}
                  </motion.span>
                </div>

                {/* Subtitle */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-lg md:text-xl text-gray-600 font-medium mb-2"
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>

                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 leading-tight"
                >
                  <span className="inline-block relative">
                    {slides[currentSlide].title}
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "33%" }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="absolute -bottom-2 left-0 h-1 bg-amber-500"
                    ></motion.span>
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-gray-600 text-lg mb-4"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex items-center mb-6"
                >
                  <div className="flex items-center mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${i < Math.floor(slides[currentSlide].rating) ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-700 font-medium">{slides[currentSlide].rating}</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-gray-600">{slides[currentSlide].reviews} reviews</span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="ml-2 text-xs text-amber-600 font-medium"
                  >
                    Verified Buyers
                  </motion.span>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex flex-wrap gap-4 mb-8"
                >
                  <Link
                    href="/shop"
                    className="group relative overflow-hidden rounded-md bg-amber-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:bg-amber-700 hover:shadow-xl"
                  >
                    <span className="relative z-10 flex items-center font-medium">
                      Shop Collection
                      <ShoppingBag className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </Link>

                  <Link
                    href="/shop"
                    className="group relative overflow-hidden rounded-md border border-amber-600 bg-transparent px-6 py-3 text-amber-600 transition-all duration-300 hover:bg-amber-50"
                  >
                    <span className="relative z-10 flex items-center font-medium">View Lookbook</span>
                    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-50 to-amber-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </Link>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="grid grid-cols-3 gap-4"
                >
                  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <span className="text-xs font-medium text-gray-800">Premium Quality</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <Clock size={20} className="text-amber-600 mb-2" />
                    <span className="text-xs font-medium text-gray-800">2-Day Delivery</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="text-amber-600 mb-2"
                    >
                      <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    </svg>
                    <span className="text-xs font-medium text-gray-800">5-Year Warranty</span>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
              {/* Main Image Carousel */}
              <div className="relative h-full w-full overflow-hidden rounded-[30px] shadow-2xl">
                <AnimatePresence initial={false}>
                  {slides.map(
                    (slide, index) =>
                      currentSlide === index && (
                        <motion.div
                          key={`slide-${index}`}
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.7 }}
                          className="absolute inset-0"
                          style={{ y: parallaxY }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
                          <Image
                            src={slide.image || "/placeholder.svg"}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                            priority={index === 0}
                          />
                        </motion.div>
                      ),
                  )}
                </AnimatePresence>

                {/* Slide Controls */}
                <div className="absolute bottom-6 right-6 z-20 flex items-center space-x-3">
                  <button
                    onClick={handlePause}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    aria-label={isAutoplay ? "Pause slideshow" : "Play slideshow"}
                  >
                    {isAutoplay ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21" fill="currentColor" />
                      </svg>
                    )}
                  </button>

                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideChange(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-amber-100 -z-10"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-amber-200 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Quick Links */}
      <div className="relative container mx-auto px-4 pb-8 md:pb-12">
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/new-arrivals"
              className="group flex items-center justify-between p-3 rounded-lg hover:bg-amber-50 transition-colors"
            >
              <div>
                <h3 className="font-medium text-gray-900">New Arrivals</h3>
                <p className="text-sm text-gray-500">Spring 2025</p>
              </div>
              <ArrowRight
                size={18}
                className="text-amber-600 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/best-sellers"
              className="group flex items-center justify-between p-3 rounded-lg hover:bg-amber-50 transition-colors"
            >
              <div>
                <h3 className="font-medium text-gray-900">Best Sellers</h3>
                <p className="text-sm text-gray-500">Top rated items</p>
              </div>
              <ArrowRight
                size={18}
                className="text-amber-600 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/special-offers"
              className="group flex items-center justify-between p-3 rounded-lg hover:bg-amber-50 transition-colors"
            >
              <div>
                <h3 className="font-medium text-gray-900">Special Offers</h3>
                <p className="text-sm text-gray-500">Limited time deals</p>
              </div>
              <ArrowRight
                size={18}
                className="text-amber-600 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/design-services"
              className="group flex items-center justify-between p-3 rounded-lg hover:bg-amber-50 transition-colors"
            >
              <div>
                <h3 className="font-medium text-gray-900">Design Services</h3>
                <p className="text-sm text-gray-500">Free consultation</p>
              </div>
              <ArrowRight
                size={18}
                className="text-amber-600 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

