import React from "react";
import { motion } from "motion/react";
import { Poem } from "../data";
import { Sparkles, Calendar, Quote, Compass } from "lucide-react";

interface PoetryProps {
  poems: Poem[];
}

export default function Poetry({ poems }: PoetryProps) {
  // Container variants for staggered child line animations
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="poetry"
      className="min-h-screen w-full bg-editorial-beige text-editorial-dark flex flex-col justify-center py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden border-b-8 border-black"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-20 border-b-4 border-black pb-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-editorial-orange font-black flex items-center gap-2">
            <Compass size={12} className="text-editorial-orange" />
            <span>CHAPTER 04</span>
            <span className="w-6 h-[2px] bg-editorial-orange"></span>
            <span>RHYTHM & SPACE</span>
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-editorial-dark mt-3 uppercase">
            Poetry & Verse
          </h2>
          <p className="font-mono text-[10px] tracking-widest text-slate-500 uppercase mt-4 max-w-sm leading-relaxed font-bold">
            Where language slows down. Please read with pause, taking in the silence between lines.
          </p>
        </div>

        {/* Poems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {poems.map((poem, index) => {
            return (
              <motion.div
                key={poem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="w-full bg-white border-4 border-black rounded-none p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:shadow-[12px_12px_0px_0px_#FF4E00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Visual marker */}
                <div className="absolute top-6 right-8 text-slate-100 select-none pointer-events-none font-serif text-9xl font-black opacity-30">
                  ”
                </div>

                <div>
                  {/* Metadata */}
                  <div className="flex items-center gap-2 mb-6 text-slate-400 font-mono text-[10px] uppercase tracking-widest border-b-2 border-black/10 pb-4 font-bold">
                    <span>Poem 0{index + 1}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={10} />
                      <span>{poem.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-editorial-dark tracking-tight leading-tight mb-2 uppercase">
                    {poem.title}
                  </h3>

                  {/* Intro descriptor */}
                  <p className="font-sans italic text-slate-600 text-xs sm:text-sm mb-10 max-w-md leading-relaxed border-l-4 border-editorial-orange pl-3 font-medium">
                    {poem.intro}
                  </p>

                  {/* Staggered Poem lines */}
                  <motion.div
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-4 pl-2 sm:pl-4"
                  >
                    {poem.lines.map((line, lineIdx) => {
                      // Check for empty line or stanza break
                      if (!line.trim()) {
                        return <div key={lineIdx} className="h-6"></div>;
                      }

                      // Check stylistic offsets
                      const isIndented = line.startsWith("   ") || line.startsWith("\t");
                      const cleanLine = line.trim();

                      return (
                        <motion.p
                          key={lineIdx}
                          variants={lineVariants}
                          className={`font-serif text-base sm:text-lg lg:text-xl text-editorial-dark leading-relaxed tracking-wide antialiased font-medium ${
                            isIndented ? "pl-8 sm:pl-10 italic text-slate-500" : ""
                          }`}
                        >
                          {cleanLine}
                        </motion.p>
                      );
                    })}
                  </motion.div>
                </div>

                {/* Poetry Footer Accent */}
                <div className="mt-12 pt-6 border-t-2 border-black/10 flex justify-between items-center text-slate-400 font-mono text-[9px] uppercase tracking-widest font-bold">
                  <span>Ayo's Thoughts</span>
                  <span>Verbatim Verse</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative central accent line */}
        <div className="mt-20 flex justify-center items-center gap-3">
          <span className="w-2 h-2 bg-editorial-orange"></span>
          <span className="w-16 h-[2px] bg-black"></span>
          <Sparkles size={12} className="text-editorial-orange animate-pulse" />
          <span className="w-16 h-[2px] bg-black"></span>
          <span className="w-2 h-2 bg-editorial-orange"></span>
        </div>
      </div>
    </section>
  );
}
