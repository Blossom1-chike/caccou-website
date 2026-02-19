"use client";
import React from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowDown, Heart, Shield, Users } from "lucide-react";
import ImageWithFallback from "@/components/fall-back-components/ImageWithFallBack";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #4A1D6B 0%, #6B2D8B 40%, #8B3DAB 70%, #6B2D8B 100%)",
      }}
    >
      {/**Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-secondary/10"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/3 -left-16 w-64 h-64 rounded-full bg-white/5"
          animate={{ scale: [1, 1.2, 1.2], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-40 h-40 rounded-full bg-[#E91E63]/10"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-24 h-24 rounded-full bg-[#2E8B57]/10"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="container mx-auto px-4 md:mt-20 mt-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 gap-5 md:gap-16 items-center">
          {/**Left Column */}
          <div className="text-white min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm border border border-white/20">
                {" "}
                Supporting Families into a Better Future
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight break-words"
              style={{ fontWeight: 700 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Compassionate <span className="text-secondary">Care</span> for
              Your <span className="text-secondary">Loved Ones</span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl mb-8 text-purple-100 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Caccou Family Services delivers exceptional domiciliary care in
              Harlow and across Essex. Our dedicated team ensures dignity,
              independence, and quality of life for every individual we support.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 min-w-0"
              >
                <Button
                  //   size="lg"
                  style={{ fontWeight: 600 }}
                  className="w-full bg-[#F5A623] hover:bg-[#E09000] text-[#2D1B4E] lg:text-lg text-sm px-6 lg:px-8 rounded-full"
                  onClick={() => scrollToSection("services")}
                >
                  Explore Our Services
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 min-w-0"
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  //   size="lg"
                  variant="outline"
                  className="w-full border-2 bg-transparent border-white/70 text-white hover:bg-white px-4 sm:px-6 lg:px-8 hover:text-[#6B2D8B] lg:text-lg rounded-full"
                >
                  Free Consultation
                </Button>
              </motion.div>
            </motion.div>
            {/* Trust indicators */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                {
                  icon: Heart,
                  label: "Person-Centred",
                  sublabel: "Care Approach",
                },
                {
                  icon: Shield,
                  label: "CQC Registered",
                  sublabel: "& Regulated",
                },
                {
                  icon: Users,
                  label: "24/7 Support",
                  sublabel: "Always Available",
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  whileHover={{
                    y: -4,
                    backgroundColor: "rgba(255,255,255,0.15)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="h-6 w-6 text-[#F5A623] mb-2" />
                  <div className="text-sm" style={{ fontWeight: 600 }}>
                    {item.label}
                  </div>
                  <div className="text-xs text-purple-200">{item.sublabel}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="rounded-3xl h-[400px] overflow-hidden shadow-2xl ring-4 ring-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1765896387387-0538bc9f997e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZSUyMGhvbWUlMjBjYXJlZ2l2ZXIlMjBzbWlsaW5nfGVufDF8fHx8MTc3MTUwNDk3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional caregiver with elderly person"
                  fill
                  className="rounded-3xl object-cover aspect-[4/3] "
                  sizes="100vw"
                  preload
                />
                {/**Floating card */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 hidden md:flex items-center gap-3"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-12 h-12 bg-[#2E8B57] rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div
                      className="text-sm text-gray-800"
                      style={{ fontWeight: 600 }}
                    >
                      Trusted Care
                    </div>
                    <div className="text-xs text-gray-500">
                      Since establishment
                    </div>
                  </div>
                </motion.div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F5A623] rounded-full opacity-20 hidden md:block" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#E91E63] rounded-full opacity-15 hidden md:block" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
};

export default Hero;
