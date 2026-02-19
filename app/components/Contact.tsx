"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    main: "07459 530293",
    sub: "Mon–Fri: 8am – 6pm\nWeekend: On-call support",
    href: "tel:+447459530293",
    color: "#6B2D8B",
  },
  {
    icon: Mail,
    title: "Email",
    main: "info@caccou.co.uk",
    sub: "We'll respond within 24 hours",
    href: "mailto:info@caccou.co.uk",
    color: "#E91E63",
  },
  {
    icon: MapPin,
    title: "Location",
    main: "Harlow, Essex",
    sub: "Serving Harlow and surrounding areas",
    href: undefined,
    color: "#2E8B57",
  },
  {
    icon: Clock,
    title: "Emergency Care",
    main: "24/7 Support",
    sub: "For urgent care needs, contact us anytime",
    href: "tel:+447459530293",
    color: "#F5A623",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const { ref, isInView } = useInView();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAFAFE]">
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
            Contact Us
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#2D1B4E] mb-4"
            style={{ fontWeight: 700 }}
          >
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our care services? We&apos;re here to help.
            Contact us today for a free, no-obligation consultation.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm border border-purple-50 hover:shadow-md transition-shadow">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${card.color}15` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: card.color }} />
                  </div>
                  <h4
                    className="text-[#2D1B4E] mb-2"
                    style={{ fontWeight: 600 }}
                  >
                    {card.title}
                  </h4>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-[#6B2D8B] hover:underline block mb-1"
                      style={{ fontWeight: 500 }}
                    >
                      {card.main}
                    </a>
                  ) : (
                    <p
                      className="text-[#2D1B4E] mb-1"
                      style={{ fontWeight: 500 }}
                    >
                      {card.main}
                    </p>
                  )}
                  <p className="text-sm text-gray-400 whitespace-pre-line">
                    {card.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-purple-50">
            <div className="grid md:grid-cols-5">
              {/* Left decoration */}
              <div
                className="md:col-span-2 p-8 md:p-10 text-white flex flex-col justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #4A1D6B 0%, #6B2D8B 50%, #8B3DAB 100%)",
                }}
              >
                <MessageSquare className="h-10 w-10 text-[#F5A623] mb-6" />
                <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>
                  Send Us a Message
                </h3>
                <p className="text-purple-200 leading-relaxed mb-8">
                  Fill out the form and our team will get back to you as soon as
                  possible. We&apos;re here to answer any questions you may
                  have.
                </p>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[#F5A623]" />
                    <span>07459 530293</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#F5A623]" />
                    <span>info@caccou.co.uk</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[#F5A623]" />
                    <span>Harlow, Essex, UK</span>
                  </div>
                </div>
              </div>

              {/* Right form */}
              <div className="md:col-span-3 p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm text-gray-700"
                        style={{ fontWeight: 500 }}
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="border-gray-200 focus:border-[#6B2D8B] rounded-xl"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-sm text-gray-700"
                        style={{ fontWeight: 500 }}
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="07123 456789"
                        className="border-gray-200 focus:border-[#6B2D8B] rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm text-gray-700"
                      style={{ fontWeight: 500 }}
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.smith@example.com"
                      className="border-gray-200 focus:border-[#6B2D8B] rounded-xl"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="service"
                      className="text-sm text-gray-700"
                      style={{ fontWeight: 500 }}
                    >
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-xl border border-gray-200 bg-[#F9F5FC] text-sm focus:border-[#6B2D8B] focus:outline-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="personal-care">Personal Care</option>
                      <option value="home-care">Home Care</option>
                      <option value="companionship">Companionship</option>
                      <option value="live-in-care">24/7 Live-in Care</option>
                      <option value="dementia-care">Dementia Care</option>
                      <option value="respite-care">Respite Care</option>
                      <option value="other">Other / General Enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm text-gray-700"
                      style={{ fontWeight: 500 }}
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please tell us about your care needs or any questions you have..."
                      rows={5}
                      className="border-gray-200 focus:border-[#6B2D8B] rounded-xl"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#6B2D8B] hover:bg-[#4A1D6B] text-white rounded-full"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 rounded-3xl p-3 text-center text-white max-w-4xl mx-auto"
          style={{
            background:
              "linear-gradient(135deg, #4A1D6B 0%, #6B2D8B 50%, #8B3DAB 100%)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Google Maps embed — replace with real embed URL */}
          <iframe
            title="CACCOU Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.0!2d0.1!3d51.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s28+Bishopsfield%2C+Harlow!5e0!3m2!1sen!2suk!4v1"
            width="100%"
            height="200"
            className="rounded-2xl border-0"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}

// "use client";
// import { useState } from "react";

// type FormState = {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// };

// type InputField = {
//   name: keyof FormState;
//   label: string;
//   type: string;
//   placeholder: string;
// };

// export default function Contact() {
//   const [form, setForm] = useState<FormState>({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   // For production: wire this up to Formspree, Resend, or a Next.js API route
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
//     setSubmitted(true);
//   };

//   return (
//     <section id="contact" className="py-20 bg-purple-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="text-center mb-14">
//           <span className="text-purple-700 font-bold text-sm uppercase tracking-widest">
//             Get In Touch
//           </span>
//           <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
//             Contact Us
//           </h2>
//         </div>
//         <div className="flex flex-col lg:flex-row gap-10">
//           <div className="flex-1 flex flex-col gap-6">
//             {[
//               {
//                 icon: "📍",
//                 label: "Address",
//                 value: "28 Bishopsfield, Harlow, Essex, CM18 6UJ",
//               },
//               { icon: "📞", label: "Phone", value: "07960 604002" },
//               { icon: "✉️", label: "Email", value: "info@caccou.co.uk" },
//               {
//                 icon: "🕐",
//                 label: "Hours",
//                 value: "Monday – Sunday: 8:00am – 8:00pm",
//               },
//             ].map((c) => (
//               <div
//                 key={c.label}
//                 className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-sm"
//               >
//                 <span className="text-3xl">{c.icon}</span>
//                 <div>
//                   <div className="font-bold text-gray-700 text-sm">
//                     {c.label}
//                   </div>
//                   <div className="text-gray-500 text-sm mt-0.5">{c.value}</div>
//                 </div>
//               </div>
//             ))}
//             {/* Google Maps embed — replace with real embed URL */}
//             <iframe
//               title="CACCOU Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.0!2d0.1!3d51.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s28+Bishopsfield%2C+Harlow!5e0!3m2!1sen!2suk!4v1"
//               width="100%"
//               height="200"
//               className="rounded-2xl border-0"
//               allowFullScreen
//               loading="lazy"
//             />
//           </div>

//           <div className="flex-1 bg-white rounded-3xl shadow-sm p-8">
//             {submitted ? (
//               <div className="flex flex-col items-center justify-center h-full text-center py-12">
//                 <div className="text-6xl mb-4">🎉</div>
//                 <h3 className="text-2xl font-black text-gray-800 mb-2">
//                   Thank You!
//                 </h3>
//                 <p className="text-gray-500">
//                   We have received your message and will be in touch shortly.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 <h3 className="text-xl font-black text-gray-800 mb-2">
//                   Send us a message
//                 </h3>
//                 {(
//                   [
//                     {
//                       name: "name",
//                       label: "Full Name",
//                       type: "text",
//                       placeholder: "Your full name",
//                     },
//                     {
//                       name: "email",
//                       label: "Email Address",
//                       type: "email",
//                       placeholder: "your@email.com",
//                     },
//                     {
//                       name: "phone",
//                       label: "Phone Number",
//                       type: "tel",
//                       placeholder: "07xxx xxxxxx",
//                     },
//                   ] as InputField[]
//                 ).map((f) => (
//                   <div key={f.name}>
//                     <label className="block text-sm font-semibold text-gray-700 mb-1">
//                       {f.label}
//                     </label>
//                     <input
//                       type={f.type}
//                       placeholder={f.placeholder}
//                       required
//                       value={form[f.name]}
//                       onChange={(e) =>
//                         setForm({ ...form, [f.name]: e.target.value })
//                       }
//                       className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
//                     />
//                   </div>
//                 ))}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-1">
//                     Message
//                   </label>
//                   <textarea
//                     rows={4}
//                     required
//                     placeholder="Tell us about your care needs..."
//                     value={form.message}
//                     onChange={(e) =>
//                       setForm({ ...form, message: e.target.value })
//                     }
//                     className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 resize-none"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-purple-700 text-white font-black py-3 rounded-xl hover:bg-purple-800 transition-colors text-sm mt-2"
//                 >
//                   Send Message →
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
