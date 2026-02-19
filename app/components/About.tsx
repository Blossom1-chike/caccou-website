"use client";
import ImageWithFallback from "@/components/fall-back-components/ImageWithFallBack";
import { Award, Users, Heart, CheckCircle, Star } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    desc: "We treat every individual with genuine care and empathy",
    color: "#E91E63",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Committed to the highest standards of professional care",
    color: "#F5A623",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Proudly serving families across Harlow and Essex",
    color: "#2E8B57",
  },
  {
    icon: CheckCircle,
    title: "Trust",
    desc: "Building lasting relationships through reliability",
    color: "#6B2D8B",
  },
];

const testimonials = [
  {
    text: "We were recommended to Care Genius in July 2025 by a family friend when it was becoming increasingly difficult for my mum to carry out some activities of daily living by herself. The carers are very professional, the kindness, compassion and thoughtfulness shown to my mum has been outstanding. They are very punctual and have adapted to changes in her care as required, and are very helpful. They have also built a good relationship with my mum and she always looks forward to their visit.",
    name: "Review from L A.",
    role: "Daughter of Client, Harlow",
  },
  {
    text: "We've been using Caccou's respite care for my father and the difference it has made to our whole family is immeasurable. The carers are always punctual, caring, and go above and beyond.",
    name: "James R.",
    role: "Son of Client, Essex",
  },
  {
    text: "Finding reliable dementia care was stressful until we found Caccou. Their specialist team truly understands the condition and provides support that brings us real peace of mind.",
    name: "Margaret L.",
    role: "Wife of Client, Harlow",
  },
];

export default function About() {
  const { ref, isInView } = useInView();
  const { ref: testimonialRef, isInView: testimonialInView } = useInView();

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-1.5 bg-[#F3E8F9] text-[#6B2D8B] rounded-full text-sm mb-4"
            style={{ fontWeight: 500 }}
          >
            Who We Are
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#2D1B4E] mb-4"
            style={{ fontWeight: 700 }}
          >
            About Caccou Family Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted care partner in Harlow, dedicated to enhancing lives
            through compassionate, professional domiciliary care services.
          </p>
        </motion.div>
        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center p-7 bg-[#FAFAFE] rounded-2xl border border-purple-50 hover:shadow-md transition-shadow group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -4 }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${value.color}15` }}
              >
                <value.icon
                  className="h-8 w-8"
                  style={{ color: value.color }}
                />
              </div>
              <h4
                className="text-lg text-[#2D1B4E] mb-2"
                style={{ fontWeight: 600 }}
              >
                {value.title}
              </h4>
              <p className="text-gray-500 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="text-2xl md:text-3xl text-[#2D1B4E] mb-6"
              style={{ fontWeight: 700 }}
            >
              Committed to <span className="text-[#6B2D8B]">Excellence</span> in
              Care
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At Caccou Family Services, we understand that choosing a care
                provider for yourself or a loved one is one of the most
                important decisions you&apos;ll make. That&apos;s why we&apos;re
                committed to delivering the highest standard of domiciliary care
                with dignity, respect, and compassion at the heart of everything
                we do.
              </p>
              <p>
                Based in Harlow, Essex, we serve our local community and
                surrounding areas, building lasting relationships with our
                clients and their families. Our team of experienced, trained
                caregivers are carefully selected for their skills, empathy, and
                dedication to making a positive difference in people&apos;s
                lives.
              </p>
              <p>
                We believe that everyone deserves to live life to the fullest,
                regardless of age or ability. Our person-centred approach
                ensures that each care plan is uniquely tailored to individual
                needs, preferences, and goals — promoting independence while
                providing the support needed.
              </p>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: "100%", label: "DBS Checked Staff" },
                { number: "24/7", label: "Care Available" },
                { number: "5★", label: "Client Rating" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-[#F9F0FD] rounded-xl py-4 px-2"
                >
                  <div
                    className="text-2xl text-[#6B2D8B]"
                    style={{ fontWeight: 700 }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-3xl h-[500px] overflow-hidden shadow-xl">
              <ImageWithFallback
                fill
                src="https://images.unsplash.com/photo-1592392821486-71f028a00581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY2FyZSUyMHRlYW0lMjBoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMGdyb3VwfGVufDF8fHx8MTc3MTUwNDk3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional healthcare team"
                className="rounded-3xl w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F5A623] rounded-2xl opacity-20 -z-10 hidden md:block" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#6B2D8B] rounded-2xl opacity-15 -z-10 hidden md:block" />
          </motion.div>
        </div>

        {/* Testimonials */}
        <div ref={testimonialRef}>
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block px-4 py-1.5 bg-[#F3E8F9] text-[#6B2D8B] rounded-full text-sm mb-4"
              style={{ fontWeight: 500 }}
            >
              Testimonials
            </span>
            <h3
              className="text-2xl md:text-3xl text-[#2D1B4E]"
              style={{ fontWeight: 700 }}
            >
              What Families Say About Us
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                className="bg-gradient-to-br from-[#F9F0FD] to-white rounded-2xl p-8 border border-purple-100"
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#F5A623] text-[#F5A623]"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic line-clamp-9">
                  &quot;{t.text}&quot;
                </p>
                <div>
                  <p className="text-[#2D1B4E]" style={{ fontWeight: 600 }}>
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
