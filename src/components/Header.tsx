import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { BookOpen, User, FileText, Compass, Phone, Send, Menu, X } from "lucide-react";

interface HeaderProps {
  substackUrl: string;
}

export default function Header({ substackUrl }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // IntersectionObserver to watch sections
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };

    const sectionIds = ["hero", "about", "essays", "fiction", "poetry", "contact"];
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        }, observerOptions);
        observer.observe(element);
        return { observer, element };
      }
      return null;
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "essays", label: "Essays" },
    { id: "fiction", label: "Fiction" },
    { id: "poetry", label: "Poetry" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 flex justify-between items-center border-b border-black bg-editorial-paper/95 backdrop-blur-md"
      >
        {/* Brand logo / Editorial Name */}
        <div className="flex items-center gap-2">
          <a
            href="#hero"
            className="font-serif font-bold text-base md:text-lg tracking-wider text-editorial-dark hover:text-editorial-orange transition-colors flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 bg-editorial-orange"></span>
            AYOMIDE OLUYEMI
          </a>
          <span className="hidden md:inline font-mono text-[9px] tracking-widest text-slate-400 uppercase border-l border-slate-300 pl-3">
            Portfolio / 2026
          </span>
        </div>

        {/* Desktop Navigation (Editorial Style) */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-editorial-dark">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-colors duration-200 relative py-1 hover:text-editorial-orange ${
                  isActive
                    ? "text-editorial-orange font-extrabold border-b-2 border-editorial-orange"
                    : "text-editorial-dark"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href={`https://${substackUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white hover:bg-editorial-orange transition-colors px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5"
          >
            <Send size={10} />
            Substack
          </a>
        </div>

        {/* Mobile Nav Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-black hover:bg-black/5 text-editorial-dark transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer (Editorial Fullscreen Overlay) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-editorial-paper z-40 pt-24 px-6 flex flex-col justify-between border-8 border-black">
          <div className="flex flex-col gap-6 text-2xl font-serif font-bold">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`border-b border-black/10 pb-4 flex justify-between items-center ${
                  activeSection === item.id ? "text-editorial-orange" : "text-editorial-dark"
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-slate-400">/ 0{navItems.indexOf(item) + 1}</span>
              </a>
            ))}
          </div>

          <div className="mb-8 space-y-4">
            <a
              href={`https://${substackUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-editorial-orange text-white py-3 font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 border border-black shadow-[4px_4px_0px_0px_#1A1A1A]"
            >
              <Send size={14} />
              Subscribe on Substack
            </a>
            <div className="text-center font-mono text-[9px] tracking-widest uppercase text-slate-500">
              Ayomide Oluyemi © 2026
            </div>
          </div>
        </div>
      )}
    </>
  );
}
