import React from "react";
import { writingData } from "./data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Essays from "./components/Essays";
import Fiction from "./components/Fiction";
import Poetry from "./components/Poetry";
import Contact from "./components/Contact";
import PullQuote from "./components/PullQuote";

export default function App() {
  return (
    <div className="min-h-screen bg-editorial-paper selection:bg-editorial-orange selection:text-white font-sans antialiased text-editorial-dark overflow-x-hidden">
      {/* Dynamic Header / Navigation */}
      <Header substackUrl={writingData.substack} />

      {/* Hero Section */}
      <Hero
        name={writingData.name}
        tagline={writingData.tagline}
        substack={writingData.substack}
      />

      {/* Chapter 01: About Me */}
      <About bioPlaceholder={writingData.bioPlaceholder} />

      {/* transitional Breather Quote 1 */}
      <PullQuote
        quote="I care more than I let on, more than I say."
        source='Little Miss Not-So-Aware, innit? (Personal Essay)'
        bgColor="bg-editorial-orange"
        textColor="text-white"
        accentColor="#FFFFFF"
      />

      {/* Chapter 02: Personal Essays */}
      <Essays essays={writingData.essays} />

      {/* transitional Breather Quote 2 */}
      <PullQuote
        quote="What a bittersweet gift it is, to feel deeply enough to grieve 🤍."
        source='This Thing Called Grief (Personal Essay)'
        bgColor="bg-editorial-dark"
        textColor="text-editorial-orange"
        accentColor="#F0EFEB"
      />

      {/* Chapter 03: Short Fiction ("Am I Delusional?") */}
      <Fiction fiction={writingData.fiction} />

      {/* transitional Breather Quote 3 */}
      <PullQuote
        quote="This love is carried in the sincerity of his eyes, in the quiet gentleness with which he cares for me."
        source='Love? (Poem)'
        bgColor="bg-editorial-beige"
        textColor="text-editorial-dark"
        accentColor="#FF4E00"
      />

      {/* Chapter 04: Poetry */}
      <Poetry poems={writingData.poems} />

      {/* Chapter 05: Contact & Closing */}
      <Contact
        email={writingData.email}
        substack={writingData.substack}
        phone={writingData.phone}
        location={writingData.location}
      />
    </div>
  );
}
