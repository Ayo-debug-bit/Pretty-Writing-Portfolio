import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, ExternalLink, Copy, Check, Send, Sparkles } from "lucide-react";

interface ContactProps {
  email: string;
  substack: string;
  phone: string;
  location: string;
}

export default function Contact({ email, substack, phone, location }: ContactProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-editorial-orange text-white flex flex-col justify-between py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Huge CTA (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-12 h-[3px] bg-white"></span>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white font-black">
                The Next Chapter
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none mb-6 text-white uppercase"
            >
              Let's craft the next story together.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-base sm:text-lg md:text-xl text-white/95 max-w-xl leading-relaxed font-medium mb-10"
            >
              I am open to editorial roles, agency writing collaborations, creative direction,
              and freelance opportunities. If you're looking for a storyteller who captures
              what others leave unsaid, let's connect.
            </motion.p>

            {/* Huge Substack Poster Billboard Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full bg-editorial-dark border-4 border-black rounded-none p-8 sm:p-10 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] text-left relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300"
            >
              {/* Star badge */}
              <div className="absolute top-6 right-6 text-editorial-orange">
                <Sparkles size={24} className="animate-pulse" />
              </div>

              <span className="font-mono text-[10px] font-black tracking-widest text-editorial-orange uppercase bg-editorial-orange/10 px-3 py-1.5 border border-editorial-orange/20 rounded-none">
                My Primary Publication
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl font-extrabold mt-6 mb-3 text-white leading-tight uppercase">
                Ayo's Thoughts on Substack
              </h3>

              <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed mb-8 font-medium">
                Subscribe to get my latest essays, short stories, and reflective poems delivered straight to your inbox. It's the best way to track my ongoing journey.
              </p>

              <a
                href={`https://${substack}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-editorial-orange text-white hover:bg-white hover:text-editorial-dark border-2 border-black px-8 py-4 rounded-none text-xs font-bold tracking-widest uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] flex items-center justify-center sm:inline-flex gap-2 group transition-all duration-200"
              >
                Read & Subscribe on Substack
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Contact Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Send className="text-white" size={16} />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white font-black">
                Get In Touch
              </p>
            </div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white text-editorial-dark border-4 border-black rounded-none p-6 shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-editorial-beige text-editorial-dark border-2 border-black">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] font-black uppercase tracking-widest text-editorial-orange">
                      Email Address
                    </h4>
                    <p className="font-sans text-sm sm:text-base font-extrabold mt-0.5">
                      {email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(email, "email")}
                  className="p-2 rounded-none border border-transparent hover:border-black hover:bg-editorial-beige text-editorial-dark transition-colors"
                  title="Copy to Clipboard"
                >
                  {copiedEmail ? <Check size={16} className="text-green-600 font-bold" /> : <Copy size={16} />}
                </button>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white text-editorial-dark border-4 border-black rounded-none p-6 shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-editorial-beige text-editorial-dark border-2 border-black">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] font-black uppercase tracking-widest text-editorial-orange">
                      Phone Number
                    </h4>
                    <p className="font-sans text-sm sm:text-base font-extrabold mt-0.5">
                      {phone}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(phone, "phone")}
                  className="p-2 rounded-none border border-transparent hover:border-black hover:bg-editorial-beige text-editorial-dark transition-colors"
                  title="Copy to Clipboard"
                >
                  {copiedPhone ? <Check size={16} className="text-green-600 font-bold" /> : <Copy size={16} />}
                </button>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white text-editorial-dark border-4 border-black rounded-none p-6 shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-editorial-beige text-editorial-dark border-2 border-black">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-mono text-[10px] font-black uppercase tracking-widest text-editorial-orange">
                    Current Location
                  </h4>
                  <p className="font-sans text-sm sm:text-base font-extrabold mt-0.5">
                    {location}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center relative z-10 border-t-4 border-black pt-6 mt-16 text-xs text-white font-mono uppercase tracking-widest font-bold">
        <span>© 2026 Ayomide Oluyemi. All Rights Reserved.</span>
        <span className="mt-2 sm:mt-0">DESIGNED FOR CREATIVE OUTREACH</span>
      </div>
    </section>
  );
}
