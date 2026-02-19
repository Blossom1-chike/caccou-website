"use client";
import React, { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "About Us", id: "about" },
    { label: "Contact", id: "contact" },
  ];
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/**Top Bar */}
        <div className="bg-primary text-white py-2">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
            <div className="flex items-center gap-4 text-sm">
              <a
                href="tel:+447960604002"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>07960 604002</span>
              </a>
              <a
                href="mailto:info@caccou.co.uk"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@caccou.co.uk</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-purple-200">
              <MapPin className="w-4 h-4" />
              <span>Harlow, Essex</span>
            </div>
          </div>
        </div>

        {/**Main Nav bar */}
        <motion.nav
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg"
              : "bg-white shadow-sm"
          }`}
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <motion.button
                onClick={() => scrollToSection("home")}
                className="flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/logo.png"
                  width={180}
                  height={60}
                  className="w-auto"
                  alt="Caccou Family Services Logo"
                  priority
                />
              </motion.button>
              {/**Desktop Navbar */}
              <div className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative text-gray-700 hover:text-[#6B2D8B] transition-colors py-1"
                    whileHover={{ y: -1 }}
                  >
                    {item.label}
                    <motion.div
                      className="absolute botton-0 left-0 right-0 h-0.5 bg-[#6B2D8B] origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ))}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-[#6B2D8B] hover:bg-primary rounded-full px-6 text-white"
                  >
                    Get in Touch
                  </Button>
                </motion.div>
              </div>
              {/**Mobile Hamburger */}

              <button
                className="lg:hidden p-2 text-[#6B2D8B] hover:bg-purple-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden border-t border-purple-100"
              >
                <div className="container mx-auto px-4 py-4">
                  <div className="flex flex-col gap-1">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-center text-gray-700 hover:text-[#6B2D8B] hover:bg-purple-50 transition-colors px-4 py-3"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                    <Button
                      className="bg-[#6B2D8B] hover:bg-primary text-white w-full rounded-full mt-2"
                      onClick={() => scrollToSection("contact")}
                    >
                      Get in Touch
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>
    </div>
  );
};

export default Header;
