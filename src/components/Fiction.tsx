import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FictionChapter } from "../data";
import { Book, ChevronRight, MessageCircle, Heart, ArrowLeft, ArrowRight, CornerDownRight } from "lucide-react";

interface FictionProps {
  fiction: {
    title: string;
    description: string;
    chapters: FictionChapter[];
  };
}

export default function Fiction({ fiction }: FictionProps) {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const activeChapter = fiction.chapters[activeChapterIndex];

  const handleChapterSelect = (index: number) => {
    setActiveChapterIndex(index);
    if (textContainerRef.current) {
      textContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const nextChapter = () => {
    if (activeChapterIndex < fiction.chapters.length - 1) {
      handleChapterSelect(activeChapterIndex + 1);
    }
  };

  const prevChapter = () => {
    if (activeChapterIndex > 0) {
      handleChapterSelect(activeChapterIndex - 1);
    }
  };

  // Human friendly names for the story navigation
  const getChapterName = (id: string, index: number) => {
    switch (id) {
      case "part-1":
        return "I: The Spark";
      case "part-2":
        return "II: The Walk";
      case "part-3":
        return "III: The Meet";
      case "fola-pov":
        return "Epilogue: Fola's Perspective";
      default:
        return `Part ${index + 1}`;
    }
  };

  return (
    <section
      id="fiction"
      className="min-h-screen w-full bg-editorial-dark text-white flex flex-col justify-center py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden border-b-8 border-black"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section title */}
        <div className="flex flex-col items-start mb-16 border-b-2 border-white/10 pb-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-editorial-orange font-black flex items-center gap-2">
            <span>CHAPTER 03</span>
            <span className="w-6 h-[2px] bg-editorial-orange"></span>
            <span>SHORT FICTION</span>
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mt-3 uppercase">
            {fiction.title}
          </h2>
          <p className="font-sans italic text-slate-300 text-sm md:text-base mt-4 max-w-2xl leading-relaxed font-medium">
            {fiction.description}
          </p>
        </div>

        {/* Narrative Workspace - Left: chapter index, Right: pages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Vertical Book Index (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Book className="text-editorial-orange" size={16} />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">
                  Story Index
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {fiction.chapters.map((chapter, index) => {
                  const isActive = index === activeChapterIndex;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => handleChapterSelect(index)}
                      className={`w-full text-left p-4.5 rounded-none border-2 transition-all duration-200 flex items-center justify-between group ${
                        isActive
                          ? "bg-editorial-orange text-white border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                          : "bg-white/5 text-slate-300 border-white/15 hover:border-white hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`font-mono text-xs font-bold w-6 h-6 rounded-none flex items-center justify-center ${
                            isActive ? "bg-white text-editorial-orange border border-black" : "bg-white/10 text-slate-400"
                          }`}
                        >
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-serif text-sm font-bold tracking-wide">
                            {getChapterName(chapter.id, index)}
                          </p>
                          <p className={`font-sans text-[9px] uppercase tracking-wider mt-0.5 ${isActive ? "text-white/80 font-bold" : "text-slate-400"}`}>
                            {chapter.id === "fola-pov" ? "Fola's POV" : `Mojola's POV • Part ${index + 1}`}
                          </p>
                        </div>
                      </div>
                      <ChevronRight
                        size={16}
                        className={`transition-transform duration-300 ${
                          isActive ? "translate-x-1" : "group-hover:translate-x-1 text-slate-500"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Micro Story details block */}
            <div className="hidden lg:block mt-8 p-6 rounded-none bg-white/5 border border-white/10 shadow-[4px_4px_0px_0px_rgba(255,78,0,0.15)]">
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle size={14} className="text-editorial-orange" />
                <h4 className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-300">
                  Author's Liner Notes
                </h4>
              </div>
              <p className="font-sans text-xs text-slate-300 leading-relaxed font-medium">
                “Am I Delusional?” explores the hyper-internalized reality of modern romance. Mojola's chapters dive deep into self-doubt, over-analysis, and vulnerability, before Fola's epilogue turns the camera around entirely.
              </p>
              <div className="flex items-center gap-2 mt-4 text-editorial-orange">
                <Heart size={12} fill="currentColor" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-editorial-orange font-bold">
                  A crush from uncertainty to mutual reveal
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Book Page (lg:col-span-8) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            {/* Book Page Container */}
            <div className="w-full bg-[#0F0F0F] border-4 border-black rounded-none p-6 sm:p-10 lg:p-12 shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] flex-grow flex flex-col justify-between relative min-h-[480px]">
              {/* Reading corner style */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-editorial-orange/30 to-transparent"></div>

              {/* Page Content */}
              <div>
                {/* Header row */}
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-8">
                  <div className="font-mono text-[10px] tracking-widest text-editorial-orange uppercase font-bold">
                    Chapter {activeChapterIndex + 1} of {fiction.chapters.length}
                  </div>
                  <div className="font-mono text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                    {activeChapter.id === "fola-pov" ? "Perspective Shift" : "Mojola's Diary"}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeChapter.id}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.4 }}
                    ref={textContainerRef}
                    className="max-h-[380px] overflow-y-auto pr-2"
                  >
                    <h3 className="font-serif text-3xl md:text-4xl font-extrabold mb-3 text-white tracking-tight">
                      {activeChapter.title}
                    </h3>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-editorial-orange mb-6 font-bold">
                      {activeChapter.subtitle || "Short fiction epilogue · 2026"}
                    </p>

                    {activeChapter.intro && (
                      <p className="font-serif italic text-slate-300 text-sm sm:text-base border-l-4 border-editorial-orange pl-4 mb-6 leading-relaxed">
                        {activeChapter.intro}
                      </p>
                    )}

                    <div className="space-y-6 text-slate-200 font-serif text-base sm:text-lg leading-relaxed font-light">
                      {activeChapter.paragraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Book footer / Page navigation */}
              <div className="border-t border-white/10 pt-6 mt-8 flex justify-between items-center w-full">
                {/* Progress dot indicators */}
                <div className="flex gap-2">
                  {fiction.chapters.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 transition-all duration-300 ${
                        i === activeChapterIndex ? "w-8 bg-editorial-orange" : "w-2 bg-slate-700"
                      }`}
                    ></div>
                  ))}
                </div>

                {/* Arrow selectors */}
                <div className="flex gap-2">
                  <button
                    onClick={prevChapter}
                    disabled={activeChapterIndex === 0}
                    className={`p-2.5 rounded-none border-2 border-white/20 bg-black text-white transition-opacity ${
                      activeChapterIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:border-white hover:bg-white/5"
                    }`}
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={nextChapter}
                    disabled={activeChapterIndex === fiction.chapters.length - 1}
                    className={`p-2.5 rounded-none border-2 border-white/20 bg-black text-white transition-opacity ${
                      activeChapterIndex === fiction.chapters.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:border-white hover:bg-white/5"
                    }`}
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
