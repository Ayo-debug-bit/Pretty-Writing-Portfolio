import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Essay } from "../data";
import { BookOpen, Calendar, ArrowRight, AlignLeft, Sparkles } from "lucide-react";

interface EssaysProps {
  essays: Essay[];
}

export default function Essays({ essays }: EssaysProps) {
  const [selectedEssayId, setSelectedEssayId] = useState<string>(essays[0].id);
  const readerRef = useRef<HTMLDivElement>(null);

  const activeEssay = essays.find((e) => e.id === selectedEssayId) || essays[0];

  const handleEssaySelect = (id: string) => {
    setSelectedEssayId(id);
    // Smooth scroll the reader pane into view on mobile
    if (window.innerWidth < 1024 && readerRef.current) {
      readerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="essays"
      className="min-h-screen w-full bg-editorial-paper text-editorial-dark flex flex-col justify-center py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden border-b-8 border-black"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section title */}
        <div className="flex flex-col items-start mb-16 border-b-4 border-black pb-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-editorial-orange font-black flex items-center gap-2">
            <span>CHAPTER 02</span>
            <span className="w-6 h-[2px] bg-editorial-orange"></span>
            <span>REFLECTIVE ESSAYS</span>
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4 mt-3">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-editorial-dark uppercase">
              Personal Essays
            </h2>
            <p className="font-mono text-xs text-slate-500 max-w-sm leading-relaxed uppercase tracking-wider font-bold">
              Full unedited reflections on emotional sensitivity, overthinking, and deep-seated grief.
            </p>
          </div>
        </div>

        {/* Master-Detail Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Essay Selector Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-2">
              <AlignLeft className="text-editorial-orange" size={16} />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-editorial-dark font-black">
                Table of Contents
              </p>
            </div>

            <div className="space-y-6">
              {essays.map((essay, index) => {
                const isSelected = essay.id === selectedEssayId;
                return (
                  <motion.button
                    key={essay.id}
                    onClick={() => handleEssaySelect(essay.id)}
                    whileHover={{ x: isSelected ? 0 : 4 }}
                    className={`w-full text-left p-6 rounded-none border-2 transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                      isSelected
                        ? "bg-editorial-dark text-white border-black shadow-[6px_6px_0px_0px_#FF4E00]"
                        : "bg-white text-editorial-dark border-black shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] hover:shadow-[6px_6px_0px_0px_#FF4E00] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                    }`}
                  >
                    <div>
                      {/* Numeric indicator */}
                      <span
                        className={`font-mono text-[10px] font-bold tracking-widest uppercase mb-3 block ${
                          isSelected ? "text-editorial-orange" : "text-slate-400"
                        }`}
                      >
                        VOLUME 01 // PIECE 0{index + 1}
                      </span>

                      <h3 className="font-serif text-2xl md:text-3xl font-extrabold leading-tight tracking-tight">
                        {essay.title}
                      </h3>

                      <p
                        className={`font-sans text-xs mt-3 leading-relaxed ${
                          isSelected ? "text-slate-200" : "text-slate-500"
                        }`}
                      >
                        {essay.intro}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-current/10 flex justify-between items-center w-full">
                      <div className="flex items-center gap-1.5 font-mono text-[10px]">
                        <Calendar size={12} className="opacity-75" />
                        <span>{essay.date}</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest font-mono">
                        <span>{isSelected ? "Reading" : "Read Essay"}</span>
                        <ArrowRight
                          size={14}
                          className={`transition-transform duration-300 ${
                            isSelected ? "translate-x-1" : "group-hover:translate-x-1"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Left edge colored border when selected */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-editorial-orange"></div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Custom interactive tip badge */}
            <div className="p-4 rounded-none bg-editorial-beige border-2 border-black flex items-start gap-3 mt-4 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
              <Sparkles className="text-editorial-orange shrink-0 mt-0.5" size={16} />
              <p className="font-sans text-[11px] text-editorial-dark leading-relaxed">
                <span className="font-black uppercase font-mono text-[10px] block mb-1">Visual Hint:</span> Click on either card above to immediately load and read the full text word-for-word in the reader window.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Reading Pane (lg:col-span-7) */}
          <div ref={readerRef} className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="text-editorial-orange" size={16} />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-editorial-dark font-black">
                Verbatim Editorial Reader
              </p>
            </div>

            {/* Editorial Sheet */}
            <div className="w-full bg-white border-4 border-black rounded-none shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] min-h-[500px] overflow-hidden relative">
              {/* Top border decorative bar */}
              <div className="h-3 w-full bg-editorial-orange border-b-2 border-black"></div>

              {/* Page texture overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-[0.03]"></div>

              <div className="p-8 sm:p-12 relative z-10">
                <AnimatePresence mode="wait">
                  <motion.article
                    key={activeEssay.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="prose prose-slate max-w-none"
                  >
                    {/* Essay Header */}
                    <div className="mb-8 pb-6 border-b-2 border-black/10">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-bold">
                        <span>Ayo's Thoughts</span>
                        <span>•</span>
                        <span>{activeEssay.subtitle.split("·")[0].trim()}</span>
                      </div>

                      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-editorial-dark leading-tight">
                        {activeEssay.title}
                      </h1>

                      <p className="font-sans italic text-slate-600 text-sm md:text-base mt-4 pl-4 border-l-4 border-editorial-orange leading-relaxed font-medium">
                        {activeEssay.intro}
                      </p>
                    </div>

                    {/* Essay Body Text */}
                    <div className="space-y-6 text-editorial-dark font-sans text-sm sm:text-base md:text-lg leading-relaxed antialiased">
                      {activeEssay.paragraphs.map((paragraph, i) => {
                        // First paragraph has custom dropcap styling
                        if (i === 1) {
                          const firstChar = paragraph.charAt(0);
                          const remainingText = paragraph.slice(1);
                          return (
                            <p key={i} className="first-letter:text-6xl first-letter:font-serif first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:text-editorial-orange first-letter:leading-none">
                              {firstChar}
                              {remainingText}
                            </p>
                          );
                        }
                        return <p key={i}>{paragraph}</p>;
                      })}
                    </div>

                    {/* Essay footer decorative element */}
                    <div className="mt-12 pt-8 border-t-2 border-black/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-slate-400 font-mono text-[10px] uppercase tracking-widest font-bold">
                      <span>VERBATIM TRANSCRIPT • NO EDITS</span>
                      <span>© {activeEssay.date.split(" ").pop()} Ayomide Oluyemi</span>
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
