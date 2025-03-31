// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { X, Mail } from "lucide-react"

// export default function NewsletterPopup() {
//     const [showPopup, setShowPopup] = useState(false)

//     // Show popup after 5 seconds
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowPopup(true)
//         }, 5000)

//         return () => clearTimeout(timer)
//     }, [])

//     return (
//         <>
//             {showPopup && (
//                 <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative"
//                     >
//                         <button
//                             onClick={() => setShowPopup(false)}
//                             className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
//                             aria-label="Close newsletter popup"
//                         >
//                             <X size={20} />
//                         </button>

//                         <div className="grid md:grid-cols-5">
//                             <div className="md:col-span-2 bg-amber-100 p-6 hidden md:flex items-center justify-center">
//                                 <div className="text-center">
//                                     <div className="w-16 h-16 mx-auto bg-amber-200 rounded-full flex items-center justify-center mb-3">
//                                         <Mail size={24} className="text-amber-600" />
//                                     </div>
//                                     <p className="text-amber-800 font-medium">Join our community</p>
//                                 </div>
//                             </div>

//                             <div className="md:col-span-3 p-6">
//                                 <h3 className="text-xl font-bold text-gray-900 mb-2">Get 10% Off Your First Order</h3>
//                                 <p className="text-gray-600 mb-4">
//                                     Sign up for our newsletter to receive exclusive offers and interior design tips.
//                                 </p>

//                                 <form className="space-y-3">
//                                     <div>
//                                         <input
//                                             type="email"
//                                             placeholder="Your email address"
//                                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                                             required
//                                         />
//                                     </div>
//                                     <button
//                                         type="submit"
//                                         className="w-full bg-amber-600 text-white font-medium py-2 rounded-md hover:bg-amber-700 transition-colors"
//                                     >
//                                         Subscribe & Save
//                                     </button>
//                                     <p className="text-xs text-gray-500 text-center">
//                                         By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
//                                     </p>

//                                     <div className="mt-4 p-2 bg-blue-50 rounded-md border border-blue-200">
//                                         <p className="text-xs text-blue-700 text-center font-medium">
//                                             ⓘ This is a practice project for demonstration purposes only. Not a real e-commerce website.
//                                         </p>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             )}
//         </>
//     )
// }

