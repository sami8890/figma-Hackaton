"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Calendar, Dumbbell, Flame, Target, ChevronDown, Play } from 'lucide-react'

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => setScrollPosition(window.scrollY)
    window.addEventListener("scroll", updatePosition, { passive: true })
    return () => window.removeEventListener("scroll", updatePosition)
  }, [])

  return scrollPosition
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavLink = ({ href, children, isActive }: NavLinkProps) => (
  <Link
    href={href}
    className={`${isActive ? 'text-red-500' : 'text-white'
      } hover:text-red-400 transition-colors text-sm font-semibold tracking-wider`}
  >
    {children}
  </Link>
)

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="flex items-start space-x-6 group p-6 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-red-500/20">
    <div className="bg-red-500/10 p-4 rounded-xl group-hover:bg-red-500/20 transition-colors shrink-0">
      <Icon className="w-8 h-8 text-red-500" />
    </div>
    <div>
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
)

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => (
  <div className="bg-black/50 backdrop-blur-sm px-8 py-4 rounded-xl border border-white/10">
    <p className="text-red-500 font-bold text-4xl mb-1">{value}</p>
    <p className="text-gray-400 text-sm font-medium">{label}</p>
  </div>
)

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6">
      <div className="relative w-full max-w-5xl aspect-video bg-gray-900 rounded-xl">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
          aria-label="Close video"
        >
          <X size={24} />
        </button>
        <div className="w-full h-full flex items-center justify-center rounded-xl border border-white/10">
          <p className="text-white/70">Video player placeholder</p>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const scrollPosition = useScrollPosition()

  const navLinks = [
    { href: "/", label: "HOME", isActive: true },
    { href: "/facilities", label: "FACILITIES" },
    { href: "/packages", label: "PACKAGES" },
    { href: "/programs", label: "PROGRAMS" },
    { href: "/blog", label: "BLOG" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/shop", label: "SHOP" },
    { href: "/elements", label: "ELEMENTS" }
  ]

  const features = [
    {
      icon: Dumbbell,
      title: "State-of-the-art Equipment",
      description: "Access premium equipment and facilities designed to maximize your workout effectiveness and results."
    },
    {
      icon: Flame,
      title: "High-Intensity Classes",
      description: "Join energetic group sessions led by expert trainers to push your limits and achieve better results faster."
    },
    {
      icon: Target,
      title: "Personalized Training",
      description: "Get customized workout plans and one-on-one guidance from certified personal trainers."
    }
  ]

  const stats = [
    { label: "Active Members", value: "2,000+" },
    { label: "Expert Trainers", value: "50+" },
    { label: "Weekly Classes", value: "100+" }
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      <Image
        src="/placeholder.svg?height=1080&width=1920&text=Intense+Workout+Scene"
        alt="Intense workout scene"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
        className="z-0 opacity-40"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

      <nav className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${scrollPosition > 50 ? "bg-black/90 backdrop-blur-md shadow-xl border-b border-white/5" : ""
        }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-red-500 p-2.5 hexagon transform transition-transform group-hover:scale-110">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">MARUTHI</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ href, label, isActive }) => (
                <NavLink key={href} href={href} isActive={isActive}>
                  {label}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <Button
                className="bg-red-500 hover:bg-red-600 text-white rounded-lg hidden md:flex font-semibold px-6 py-2.5"
                size="lg"
              >
                JOIN NOW
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white hover:text-red-400 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/98 overflow-y-auto">
            <div className="container mx-auto px-6 py-8">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col space-y-6 mt-16">
                {navLinks.map(({ href, label, isActive }) => (
                  <NavLink key={href} href={href} isActive={isActive}>
                    {label}
                  </NavLink>
                ))}
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold mt-4 w-full py-3"
                  size="lg"
                >
                  JOIN NOW
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="container mx-auto px-6 relative z-10">
        <div className="min-h-screen flex items-center py-32">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="flex flex-wrap gap-6 mb-12">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white mb-8 tracking-tight leading-none">
              FORGE YOUR<br />
              <span className="text-red-500 inline-block animate-pulse">ULTIMATE</span><br />
              PHYSIQUE
            </h1>
            <p className="text-2xl sm:text-3xl text-white mb-12 font-bold tracking-wide">
              UNLEASH YOUR POTENTIAL
            </p>
            <div className="space-y-10">
              <div className="flex flex-wrap items-center gap-8">
                <a
                  href="tel:+881234567901"
                  className="group flex items-center text-2xl sm:text-3xl text-red-500 font-bold hover:text-red-400 transition-colors"
                >
                  <Phone className="mr-3 h-8 w-8 group-hover:animate-bounce" />
                  <span aria-label="Call us at">(-881) 234-5678-901</span>
                </a>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="group flex items-center space-x-4 text-white hover:text-red-400 transition-colors"
                >
                  <div className="bg-red-500 rounded-full p-3 group-hover:bg-red-600 transition-colors">
                    <Play className="w-6 h-6" />
                  </div>
                  <span className="font-medium">Watch Video</span>
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white text-lg px-10 py-6 rounded-xl transform transition hover:scale-105 focus:ring-2 focus:ring-red-400 focus:outline-none shadow-lg font-semibold"
                >
                  START TRANSFORMING NOW
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-lg px-10 py-6 rounded-xl focus:ring-2 focus:ring-red-400 focus:outline-none shadow-lg font-semibold"
                >
                  <Calendar className="mr-3 h-6 w-6" />
                  EXPLORE PROGRAMS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md py-12 z-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-red-500" />
      </div>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

      <style jsx>{`
        .hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  )
}