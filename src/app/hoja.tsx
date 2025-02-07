// "use client"

// import { useState, useEffect, useMemo } from "react"
// import { motion, useAnimation, AnimatePresence } from "framer-motion"
// import ParticleBackground from "./agentia/background-particles"

// const AdvancedAIHero = () => {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//     const [isDarkMode, setIsDarkMode] = useState(true)
//     const controls = useAnimation()

//     useEffect(() => {
//         const handleMouseMove = (event: MouseEvent): void => {
//             setMousePosition({
//                 x: event.clientX / window.innerWidth,
//                 y: event.clientY / window.innerHeight,
//             })
//         }

//         window.addEventListener("mousemove", handleMouseMove)
//         return () => window.removeEventListener("mousemove", handleMouseMove)
//     }, [])

//     useEffect(() => {
//         controls.start({
//             x: -50 + mousePosition.x * 100,
//             y: -50 + mousePosition.y * 100,
//             transition: { type: "spring", stiffness: 50, damping: 30 },
//         })
//     }, [mousePosition, controls])

//     const memoizedTransform = useMemo(
//         () => ({
//             rotateX: mousePosition.y * 20,
//             rotateY: mousePosition.x * 20,
//         }),
//         [mousePosition.x, mousePosition.y],
//     )

//     const toggleTheme = () => {
//         setIsDarkMode(!isDarkMode)
//     }

//     return (
//         <div
//             className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}
//         >
//             <ParticleBackground />

//             {/* Interactive Background */}
//             <motion.div
//                 className={`absolute inset-0 ${isDarkMode ? "bg-gradient-to-br from-black via-gray-900 to-black" : "bg-gradient-to-br from-white via-gray-100 to-white"} opacity-90`}
//                 animate={controls}
//             />

//             {/* Holographic Grid */}
//             <div
//                 className={`absolute inset-0 ${isDarkMode ? "bg-grid-white/[0.02]" : "bg-grid-black/[0.02]"} opacity-50 pointer-events-none`}
//             />

//             {/* Content Container */}
//             <div className="relative container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
//                 {/* Left Content */}
//                 <div className="space-y-8 z-10">
//                     <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//                         <h1 className="text-4xl md:text-7xl font-black tracking-tight">
//                             <AnimatePresence>
//                                 {["A", "g", "e", "n", "t", "i", "a"].map((letter, index) => (
//                                     <motion.span
//                                         key={index}
//                                         initial={{ opacity: 0, y: 20 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         exit={{ opacity: 0, y: -20 }}
//                                         transition={{ delay: index * 0.1 }}
//                                     >
//                                         {letter}
//                                     </motion.span>
//                                 ))}
//                             </AnimatePresence>
//                             <span
//                                 className={`text-transparent bg-clip-text ${isDarkMode ? "bg-gradient-to-r from-cyan-400 to-purple-600" : "bg-gradient-to-r from-cyan-600 to-purple-800"} ml-4`}
//                             >
//                                 AI
//                             </span>
//                         </h1>

//                         <p className={`text-xl md:text-2xl ${isDarkMode ? "text-gray-300" : "text-gray-700"} mt-6 leading-relaxed`}>
//                             Intelligent solutions that transform complexity into breakthrough innovations.
//                         </p>

//                         <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
//                             <motion.button
//                                 whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(0,255,255)" }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className={`${isDarkMode ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white" : "bg-gradient-to-r from-cyan-600 to-purple-800 text-white"} py-4 px-8 rounded-full font-bold transition-all duration-300`}
//                             >
//                                 Explore AI
//                             </motion.button>
//                             <motion.button
//                                 whileHover={{ scale: 1.05, backgroundColor: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className={`border-2 ${isDarkMode ? "border-white/20 text-gray-300" : "border-black/20 text-gray-700"} py-4 px-8 rounded-full backdrop-blur-sm transition-all duration-300`}
//                             >
//                                 Contact
//                             </motion.button>
//                         </div>
//                     </motion.div>
//                 </div>

//                 {/* AI Visualization */}
//                 <div className="hidden md:flex justify-center items-center">
//                     <div
//                         className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] relative"
//                         style={{
//                             perspective: "1000px",
//                             transformStyle: "preserve-3d",
//                         }}
//                     >
//                         <motion.div
//                             className={`absolute inset-0 rounded-full ${isDarkMode ? "bg-gradient-to-br from-cyan-500/30 to-purple-500/30" : "bg-gradient-to-br from-cyan-600/30 to-purple-600/30"} animate-blob`}
//                             style={memoizedTransform}
//                         />

//                         <motion.div
//                             className={`absolute inset-12 ${isDarkMode ? "bg-black/70" : "bg-white/70"} rounded-full blur-2xl`}
//                             style={{
//                                 rotateX: memoizedTransform.rotateX / 2,
//                                 rotateY: memoizedTransform.rotateY / 2,
//                             }}
//                         />

//                         <motion.div
//                             className={`relative z-10 w-full h-full border-4 ${isDarkMode ? "border-white/10" : "border-black/10"} rounded-full overflow-hidden`}
//                             animate={{ scale: [1, 1.05, 1] }}
//                             transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
//                         >
//                             <div className={`absolute inset-0 ${isDarkMode ? "bg-black/60" : "bg-white/60"}`} />
//                             <div className="absolute inset-0 flex items-center justify-center">
//                                 <span
//                                     className={`text-6xl lg:text-8xl font-black text-transparent bg-clip-text ${isDarkMode ? "bg-gradient-to-r from-cyan-300 to-purple-600" : "bg-gradient-to-r from-cyan-500 to-purple-800"}`}
//                                 >
//                                     AI
//                                 </span>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>

//             {/* Theme Toggle */}
//             <button
//                 onClick={toggleTheme}
//                 className={`fixed top-4 right-4 p-2 rounded-full ${isDarkMode ? "bg-white text-black" : "bg-black text-white"}`}
//             >
//                 {isDarkMode ? "☀️" : "🌙"}
//             </button>

//             {/* Scroll Indicator */}
//             <motion.div
//                 className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
//             >
//                 <svg
//                     className={`w-6 h-6 ${isDarkMode ? "text-white" : "text-black"}`}
//                     fill="none"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                 >
//                     <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//                 </svg>
//             </motion.div>
//         </div>
//     )
// }

// export default AdvancedAIHero

