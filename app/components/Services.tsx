"use client";
import { Heart, Home, Users, Clock, HandHeart, Shield } from "lucide-react";
import ImageWithFallback from "@/components/fall-back-components/ImageWithFallBack";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const services = [
  {
    icon: Heart,
    title: "Personal Care",
    description:
      "Assistance with daily activities including bathing, dressing, grooming, and personal hygiene — always delivered with respect and dignity.",
    color: "#E91E63",
  },
  {
    icon: Home,
    title: "Home Care",
    description:
      "Support with household tasks, meal preparation, medication management, and creating a safe, comfortable living environment.",
    color: "#6B2D8B",
  },
  {
    icon: Users,
    title: "Companionship",
    description:
      "Meaningful social interaction, emotional support, and engaging activities to combat loneliness and enhance quality of life.",
    color: "#2E8B57",
  },
  {
    icon: Clock,
    title: "24/7 Live-in Care",
    description:
      "Round-the-clock care and support from dedicated caregivers who live in your home, ensuring constant personalised assistance.",
    color: "#F5A623",
  },
  {
    icon: HandHeart,
    title: "Dementia Care",
    description:
      "Specialised care for those living with dementia, Alzheimer's, and memory conditions with trained, compassionate staff.",
    color: "#9C27B0",
  },
  {
    icon: Shield,
    title: "Respite Care",
    description:
      "Temporary relief for family caregivers, providing professional care while you take a much-needed and well-deserved break.",
    color: "#00838F",
  },
];

export default function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAFAFE]">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-1.5 bg-[#F3E8F9] text-[#6B2D8B] rounded-full text-sm mb-4"
            style={{ fontWeight: 500 }}
          >
            What We Offer
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#2D1B4E] mb-4"
            style={{ fontWeight: 700 }}
          >
            Our Care Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of domiciliary care services tailored
            to meet the unique needs of each individual, delivered with
            compassion and professionalism.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-shadow border border-purple-50 group cursor-default"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon
                      className="h-7 w-7"
                      style={{ color: service.color }}
                    />
                  </div>
                  <h3
                    className="text-xl text-[#2D1B4E] mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Section */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg overflow-hidden border border-purple-50"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-72 md:h-auto">
              <ImageWithFallback
                fill
                src="https://images.unsplash.com/photo-1743956242693-cc024361ae9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBzdXBwb3J0JTIwY2FyaW5nJTIwaGFuZHMlMjBlbGRlcmx5fGVufDF8fHx8MTc3MTUwNDk3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Caring support for families"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B2D8B]/20 to-transparent" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3
                className="text-2xl md:text-3xl text-[#2D1B4E] mb-6"
                style={{ fontWeight: 700 }}
              >
                Why Choose{" "}
                <span className="text-[#6B2D8B]">Caccou Family Services?</span>
              </h3>
              <ul className="space-y-5">
                {[
                  {
                    title: "CQC Registered & Regulated",
                    desc: "Fully compliant with Care Quality Commission standards",
                  },
                  {
                    title: "Experienced & Trained Social Workers",
                    desc: "All staff are DBS checked, trained, and passionate about care",
                  },
                  {
                    title: "Personalised Care Plans",
                    desc: "Tailored to meet individual needs and preferences",
                  },
                  {
                    title: "Local to Harlow & Essex",
                    desc: "Based in Harlow, proudly serving the local community",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#2E8B57]">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <p
                        className="text-[#2D1B4E] mb-0.5"
                        style={{ fontWeight: 600 }}
                      >
                        {item.title}
                      </p>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
