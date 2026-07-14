import React from "react";
import { motion } from "motion/react";

interface PullQuoteProps {
  quote: string;
  source: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
}

export default function PullQuote({
  quote,
  source,
  bgColor,
  textColor,
  accentColor,
}: PullQuoteProps) {
  // Determine border style dynamically for editorial vibe
  const borderStyle =
    bgColor === "bg-editorial-orange"
      ? "border-y-8 border-black"
      : bgColor === "bg-editorial-dark"
      ? "border-y-8 border-editorial-orange"
      : "border-y-8 border-black";

  return (
    <div
      className={`w-full min-h-[50vh] flex flex-col items-center justify-center px-6 md:px-12 py-16 text-center relative overflow-hidden ${borderStyle} ${bgColor}`}
    >
      {/* Decorative large quotation mark in background */}
      <div
        className="absolute -top-12 left-10 text-[26rem] font-serif select-none pointer-events-none opacity-10"
        style={{ color: accentColor }}
      >
        “
      </div>

      <div className="max-w-4xl mx-auto z-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-bold leading-tight ${textColor} tracking-tight`}
        >
          {quote}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <span className="w-12 h-[2px]" style={{ backgroundColor: accentColor }}></span>
          <p
            className="font-mono text-xs tracking-widest uppercase font-bold"
            style={{ color: accentColor }}
          >
            {source}
          </p>
          <span className="w-12 h-[2px]" style={{ backgroundColor: accentColor }}></span>
        </motion.div>
      </div>

      {/* Another decorative quotation mark */}
      <div
        className="absolute -bottom-48 right-10 text-[26rem] font-serif select-none pointer-events-none opacity-10"
        style={{ color: accentColor }}
      >
        ”
      </div>
    </div>
  );
}
