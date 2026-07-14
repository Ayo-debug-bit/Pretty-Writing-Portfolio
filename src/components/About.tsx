import React, { useState } from "react";
import { motion } from "motion/react";
import { Upload, Info, Heart, Award, ArrowRight } from "lucide-react";

interface AboutProps {
  bioPlaceholder: string;
}

export default function About({ bioPlaceholder }: AboutProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="min-h-screen w-full bg-editorial-orange text-white flex flex-col justify-center py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden border-b-8 border-black"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section title */}
        <div className="flex flex-col items-start mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-black font-black flex items-center gap-2">
            <span>CHAPTER 01</span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span>THE ORIGIN</span>
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mt-3 uppercase">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with dynamic fallback */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-none p-2 bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(26,26,26,1)]">
              <div className="w-full h-full rounded-none overflow-hidden bg-editorial-dark relative flex items-center justify-center">
                {!imgError ? (
                  <img
                    src="/assets/profile.jpg"
                    alt="Ayomide Oluyemi"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  // Highly styled placeholder prompting user upload
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-center bg-editorial-dark text-white">
                    <div className="flex justify-between items-center w-full">
                      <span className="font-mono text-[9px] tracking-widest text-editorial-orange font-bold">PORTRAIT_FEED</span>
                      <span className="w-2.5 h-2.5 bg-editorial-orange animate-pulse"></span>
                    </div>

                    <div className="my-auto flex flex-col items-center gap-4 px-2">
                      <div className="p-4 bg-editorial-orange text-white border-2 border-white rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                        <Upload size={28} />
                      </div>
                      <p className="font-serif text-xl font-bold uppercase tracking-wide">
                        Photo Placeholder
                      </p>
                      <p className="font-sans text-xs text-slate-300 leading-relaxed">
                        To display your actual photo pixel-for-pixel here, upload/drag an image named{" "}
                        <span className="font-mono text-white underline decoration-editorial-orange decoration-2 font-bold">profile.jpg</span> into
                        the <span className="font-mono text-white underline decoration-editorial-orange decoration-2 font-bold">/assets/</span> folder.
                      </p>
                    </div>

                    <div className="font-mono text-[9px] text-editorial-orange/80 flex items-center justify-center gap-1.5 border border-white/15 py-1.5 bg-black/20 font-bold uppercase tracking-wider">
                      <Info size={10} />
                      <span>Ready to render statically</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative accent stamp */}
              <div className="absolute -bottom-4 -right-4 bg-black text-white px-5 py-2.5 rounded-none font-mono text-[10px] tracking-widest uppercase font-black border-2 border-white shadow-[4px_4px_0px_0px_#FF4E00] transform rotate-2">
                Lagos, Nigeria
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography (Clearly Marked Placeholder) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial notice showing this is a customizable placeholder */}
            <div className="mb-6 inline-flex self-start items-center gap-2 border-2 border-black bg-white px-4 py-2 rounded-none text-xs font-mono text-black font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="w-2 h-2 bg-editorial-orange"></span>
              <span>About Me Content</span>
            </div>

            {/* Custom styled container with thick borders */}
            <div className="border-4 border-black p-6 sm:p-8 rounded-none bg-editorial-paper text-editorial-dark shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] relative">
              <span className="absolute -top-3.5 left-6 font-mono text-[10px] tracking-widest font-black text-white bg-black px-3 py-1 border border-white uppercase">
                EDITABLE IN DATA.TS
              </span>

              {/* Bio content loaded from data.ts */}
              <div className="space-y-6 font-serif text-base sm:text-lg md:text-xl text-editorial-dark leading-relaxed font-medium">
                {bioPlaceholder.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Visual badges to showcase design detail */}
              <div className="mt-8 pt-6 border-t-2 border-black/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-editorial-orange text-white shrink-0 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <Heart size={14} />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-black text-editorial-dark uppercase tracking-wider">
                      Core Subjects
                    </h4>
                    <p className="font-sans text-xs text-slate-600 mt-1">
                      Emotional awareness, grief, longing, crush comedies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-black text-white shrink-0 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <Award size={14} />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-black text-editorial-dark uppercase tracking-wider">
                      Other Expertise
                    </h4>
                    <p className="font-sans text-xs text-slate-600 mt-1">
                      Graphic design, communications, digital PR.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Down-scroll cue */}
            <div className="mt-8 flex items-center gap-3">
              <p className="font-mono text-xs uppercase tracking-wider text-black font-black">
                Continue scrolling to read the reflective essays verbatim
              </p>
              <ArrowRight size={14} className="text-black animate-pulse shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
