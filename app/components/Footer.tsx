"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        background:
          "linear-gradient(135deg, #2D1B4E 0%, #4A1D6B 50%, #3A1560 100%)",
      }}
      className="text-white"
    >
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                width={180}
                height={60}
                className="w-auto"
                alt="Caccou Family Services Logo"
                priority
              />
            </div>
            <p className="text-purple-300 text-sm leading-relaxed mb-5">
              Supporting families into a better future. Providing compassionate,
              professional domiciliary care services to the Harlow community and
              surrounding areas across Essex.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F5A623] hover:text-[#2D1B4E] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-5" style={{ fontWeight: 600 }}>
              Quick Links
            </h4>
            <ul className="space-y-3 text-purple-300">
              {[
                { label: "Home", id: "home" },
                { label: "Our Services", id: "services" },
                { label: "About Us", id: "about" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-[#F5A623] transition-colors text-left text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-5" style={{ fontWeight: 600 }}>
              Our Services
            </h4>
            <ul className="space-y-3 text-purple-300 text-sm">
              {[
                "Personal Care",
                "Home Care",
                "Companionship",
                "24/7 Live-in Care",
                "Dementia Care",
                "Respite Care",
              ].map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-5" style={{ fontWeight: 600 }}>
              Contact Us
            </h4>
            <ul className="space-y-4 text-purple-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#F5A623]" />
                <span>
                  Harlow, Essex
                  <br />
                  United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-[#F5A623]" />
                <a
                  href="tel:+447459530293"
                  className="hover:text-[#F5A623] transition-colors"
                >
                  07459 530293
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#F5A623]" />
                <a
                  href="mailto:info@caccou.co.uk"
                  className="hover:text-[#F5A623] transition-colors break-all"
                >
                  info@caccou.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-purple-400">
            <p className="flex items-center gap-1">
              &copy; {currentYear} Caccou Family Services. Made with
              <Heart className="h-3.5 w-3.5 text-[#E91E63] fill-[#E91E63]" />
              in Harlow.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#F5A623] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#F5A623] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#F5A623] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
