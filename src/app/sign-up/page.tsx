"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  AlertCircle,
  Loader2,
  Github,
  Twitter,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

const SuccessCheck = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3"
  >
    <CheckCircle2 className="h-5 w-5 text-green-500" />
  </motion.div>
);

const AuthComponent = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const [validations, setValidations] = useState({
    email: false,
    password: false,
    name: false,
    confirmPassword: false,
  });

  // Email validation on change
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidations((prev) => ({
      ...prev,
      email: emailRegex.test(formData.email),
    }));
  }, [formData.email]);

  // Password validation on change
  useEffect(() => {
    const passwordValidation =
      formData.password.length >= 8 &&
      /[A-Z]/.test(formData.password) &&
      /[a-z]/.test(formData.password) &&
      /[0-9]/.test(formData.password);
    setValidations((prev) => ({
      ...prev,
      password: passwordValidation,
      confirmPassword: formData.password === formData.confirmPassword,
    }));
  }, [formData.password, formData.confirmPassword]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full"
      >
        {/* Logo and Brand */}
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <div className="relative inline-block">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B88E2F] to-[#A67D20] flex items-center justify-center shadow-lg"
            >
              <Lock className="h-8 w-8 text-white" />
            </motion.div>
            {isSuccess && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -right-2 -top-2 bg-green-500 rounded-full p-1"
              >
                <CheckCircle2 className="h-4 w-4 text-white" />
              </motion.div>
            )}
          </div>
          <motion.h2
            className="mt-6 text-3xl font-bold text-gray-900"
            variants={itemVariants}
          >
            {isLogin ? "Welcome back" : "Join us today"}
          </motion.h2>
          <motion.p
            className="mt-2 text-sm text-gray-600"
            variants={itemVariants}
          >
            {isLogin
              ? "Enter your credentials to access your account"
              : "Complete the sign up process in just a few steps"}
          </motion.p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm backdrop-filter"
          variants={itemVariants}
        >
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <>
                {/* Progress Steps */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    {["Account", "Personal", "Complete"].map((step, index) => (
                      <motion.div
                        key={step}
                        className={`flex flex-col items-center ${index + 1 === currentStep ? "text-[#B88E2F]" : "text-gray-400"}`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                            index + 1 === currentStep
                              ? "bg-[#B88E2F] text-white"
                              : "bg-gray-100"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <span className="text-xs">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                  <Progress value={(currentStep / 3) * 100} className="h-1" />
                </div>
              </>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Input Fields */}
                {!isLogin && currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          className={`form-input block w-full pl-10 pr-10 py-3 rounded-xl border ${
                            validations.email
                              ? "border-green-500"
                              : "border-gray-300"
                          } focus:ring-2 focus:ring-[#B88E2F] focus:border-[#B88E2F] transition-all duration-200`}
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        {validations.email && <SuccessCheck />}
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          className={`form-input block w-full pl-10 pr-10 py-3 rounded-xl border ${
                            validations.password
                              ? "border-green-500"
                              : "border-gray-300"
                          } focus:ring-2 focus:ring-[#B88E2F] focus:border-[#B88E2F] transition-all duration-200`}
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                        />
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {!isLogin && currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          className="form-input block w-full pl-10 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#B88E2F] focus:border-[#B88E2F] transition-all duration-200"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                )}

                {isLogin && (
                  <div className="space-y-4">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          className="form-input block w-full pl-10 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#B88E2F] focus:border-[#B88E2F] transition-all duration-200"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-input block w-full pl-10 pr-10 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#B88E2F] focus:border-[#B88E2F] transition-all duration-200"
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                        />
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-4">
                  {!isLogin ? (
                    <div className="flex justify-between gap-4">
                      {currentStep > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1"
                          onClick={() => setCurrentStep(currentStep - 1)}
                        >
                          Back
                        </Button>
                      )}
                      <Button
                        type="button"
                        className="flex-1 bg-[#B88E2F] hover:bg-[#A67D20]"
                        onClick={() => {
                          if (currentStep < 3) {
                            setCurrentStep(currentStep + 1);
                          }
                        }}
                      >
                        {currentStep === 3 ? (
                          isLoading ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                          ) : (
                            "Complete Sign Up"
                          )
                        ) : (
                          <span className="flex items-center">
                            Next
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </div>
                  ) : (
                    <Button
                      type="submit"
                      className="w-full bg-[#B88E2F] hover:bg-[#A67D20]"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        "Sign in"
                      )}
                    </Button>
                  )}
                </div>

                {isLogin && (
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="relative inline-block w-10 h-6 cursor-pointer">
                        <input
                          type="checkbox"
                          className="peer sr-only"
                          id="remember"
                        />
                        <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-[#B88E2F]"></span>
                        <span className="absolute inset-y-1 start-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:start-5"></span>
                      </div>
                      <label
                        htmlFor="remember"
                        className="text-gray-600 cursor-pointer"
                      >
                        Remember me
                      </label>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      className="text-[#B88E2F] hover:text-[#A67D20] font-medium"
                    >
                      Forgot password?
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Social Login Section */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Github,
                    name: "GitHub",
                    bgHover: "hover:bg-gray-800 hover:text-white",
                  },
                  {
                    icon: Twitter,
                    name: "Twitter",
                    bgHover: "hover:bg-blue-400 hover:text-white",
                  },
                ].map((provider) => (
                  <motion.button
                    key={provider.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className={`relative inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-white border border-gray-300 rounded-xl shadow-sm ${provider.bgHover} transition-all duration-200`}
                  >
                    <provider.icon className="h-5 w-5" />
                    <span>{provider.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Switch between Login/Signup */}
            <div className="mt-6 text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="text-sm text-gray-600 hover:text-[#B88E2F] transition-colors duration-200"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setCurrentStep(1);
                }}
              >
                {isLogin ? (
                  <span>
                    Don &apos;t have an account?{" "}
                    <span className="text-[#B88E2F] font-medium">Sign up</span>
                  </span>
                ) : (
                  <span>
                    Already have an account?{" "}
                    <span className="text-[#B88E2F] font-medium">Sign in</span>
                  </span>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          className="mt-8 text-center text-xs text-gray-500"
          variants={itemVariants}
        >
          <p>
            By continuing, you agree to our{" "}
            <button className="text-[#B88E2F] hover:underline">
              Terms of Service
            </button>{" "}
            and{" "}
            <button className="text-[#B88E2F] hover:underline">
              Privacy Policy
            </button>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthComponent;
