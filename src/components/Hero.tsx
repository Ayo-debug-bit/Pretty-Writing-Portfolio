import React from "react";
import { motion } from "motion/react";
import { ArrowDown, CornerDownRight, Send } from "lucide-react";

interface HeroProps {
  name: string;
  tagline: string;
  substack: string;
}

export default function Hero({ name, tagline, substack }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen w-full bg-editorial-paper flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* Decorative vertical texts - Broadstreet Magazine style */}
      <div className="absolute left-6 lg:left-8 top-40 hidden lg:flex flex-col gap-2 items-center rotate-180 [writing-mode:vertical-lr] font-mono text-[9px] tracking-[0.3em] text-slate-600 uppercase">
        <span>EST. 2026</span>
        <span className="w-12 h-[1px] bg-black/30 my-2"></span>
        <span>WRITER & STORYTELLER</span>
      </div>

      <div className="absolute right-12 top-40 hidden xl:block font-mono text-[9px] tracking-[0.4em] uppercase text-slate-600 [writing-mode:vertical-lr]">
        AYOMIDE OLUYEMI // ISSUE NO. 01
      </div>

      <div className="flex-grow flex flex-col justify-center relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Short kicker line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[2px] bg-editorial-orange"></span>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-editorial-orange font-bold">
                Chapter 00 // Prelude
              </p>
            </motion.div>

            {/* Giant Name Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-editorial-dark leading-[0.85] select-none uppercase"
            >
              {name.split(" ").map((word, i) => (
                <span key={i} className="block first:text-editorial-dark last:text-editorial-orange">
                  {word}
                </span>
              ))}
            </motion.h1>

            {/* Accent sub-heading / Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-serif text-2xl sm:text-3xl md:text-4xl text-editorial-dark italic mt-8 font-light max-w-2xl leading-tight border-l-4 border-editorial-orange pl-6"
            >
              {tagline}
            </motion.p>

            {/* Short paragraph detailing the narrative scroll */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 max-w-xl flex items-start gap-3 border-t border-black/10 pt-6"
            >
              <CornerDownRight className="text-editorial-orange shrink-0 mt-1" size={18} />
              <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
                This is a narrative journey through my evolution as a storyteller.
                Scroll down to travel through my personal essays, explore my short fiction,
                and sit with my poetry. Each section is a new chapter.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-6 items-center"
            >
              <a
                href="#about"
                className="bg-editorial-dark text-white hover:bg-editorial-orange hover:text-white px-8 py-4 rounded-none text-xs font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] flex items-center gap-2 group font-mono"
              >
                Begin Journey
                <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href={`https://${substack}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-editorial-dark hover:bg-editorial-beige px-8 py-4 rounded-none text-xs font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] transition-all flex items-center gap-2 font-mono"
              >
                Subscribe on Substack
                <Send size={14} />
              </a>
            </motion.div>
          </div>

          {/* Decorative Right Side - Artistic visual block */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotate: -3 }}
              animate={{ scale: 1, opacity: 1, rotate: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-72 h-[420px] bg-editorial-beige border-4 border-black rounded-none shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] p-6 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-[10rem] font-serif font-black text-black/5 pointer-events-none select-none">
                A
              </div>
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-black text-editorial-dark uppercase tracking-wider">CHAPTER 00</span>
                <span className="w-6 h-6 bg-editorial-orange border-2 border-black"></span>
              </div>
              <div className="my-auto z-10">
                <p className="font-serif text-2xl md:text-3xl font-extrabold text-editorial-dark leading-snug">
                  “I write to name what's usually left unspoken.”
                </p>
              </div>
              <div className="flex justify-between items-end border-t border-black/10 pt-4">
                <p className="font-mono text-[9px] tracking-widest text-editorial-dark uppercase font-bold">
                  Ayo's Thoughts
                </p>
                <p className="font-mono text-[9px] text-editorial-dark font-bold">2026</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Footer Scroll indicator */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center relative z-10 border-t-2 border-black pt-6">
        <div className="flex gap-4">
          <a
            href={`https://${substack}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-editorial-dark hover:text-editorial-orange font-bold transition-colors uppercase tracking-widest"
          >
            {substack}
          </a>
        </div>
        <div className="flex items-center gap-2 text-editorial-dark font-bold">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] animate-pulse">Scroll Down</span>
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
