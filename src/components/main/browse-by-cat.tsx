"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function BrowseRangeSection() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  const categories = [
    {
      name: "Dining",
      description: "Elegant dining sets for memorable gatherings",
      image: "/browse-images/bed.png",
      itemCount: 124,
      featured: "Artisan Crafted Tables",
    },
    {
      name: "Living",
      description: "Comfortable sofas and accent pieces for your living space",
      image: "/browse-images/browse.png",
      featured: "Designer Sofas",
    },
    {
      name: "Bedroom",
      description: "Serene bedroom furniture for restful nights",
      image: "/browse-images/guldasta.png",
      featured: "Luxury Bed Frames",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="relative w-full bg-[#f9f5f0] py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-1/4 h-1/4 bg-amber-50 rounded-bl-[100px] opacity-70"></div>
        <div className="absolute bottom-1/4 left-0 w-1/5 h-1/5 bg-amber-50 rounded-tr-[100px] opacity-70"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-10"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold tracking-wide mb-3">
              Our Collections
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Browse The Range</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Discover carefully curated furniture collections designed to transform your space with style and comfort.
            </p>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative"
            >
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg">
                {/* Category Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div>
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className={`object-cover transition-transform duration-700 ${hoveredCategory === index ? "scale-110" : "scale-100"
                    }`}
                />

                {/* Category Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                   
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-white/80 mb-4 max-w-xs">{category.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-amber-300 text-sm font-medium">{category.featured}</span>
                      <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-amber-600 transition-colors duration-300">
                        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-amber-100 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <button className="group relative overflow-hidden rounded-md bg-white border border-amber-200 px-8 py-3 text-amber-600 shadow-md transition-all duration-300 hover:bg-amber-600 hover:text-white hover:border-amber-600">
            <span className="relative z-10 flex items-center font-medium">
              View All Collections
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-50 to-amber-100 opacity-0 transition-opacity duration-300 group-hover:opacity-0"></span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

