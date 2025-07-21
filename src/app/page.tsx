'use client';

import Header from "./components/Header";
import UpperSection from "./components/upperSection";
import { useEffect, useState } from "react";
import Projects from './components/Projects'
import Skills from "./components/Skills";
import About from "./components/About";
import { Footer } from "./components/Footer";
declare global {
  interface Window {
    liquidGlass?: { destroy: () => void };
  }
}

export default function Home() {
  const [showGlass] = useState(true);

  useEffect(() => {
    if (!showGlass) {
      if (window.liquidGlass) window.liquidGlass.destroy();
      return;
    }
    const script = document.createElement("script");
    script.src = "/liquid-glass.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
      if (window.liquidGlass) window.liquidGlass.destroy();
    };
  }, [showGlass]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#18181b] via-[#23233a] to-[#18181b] grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Space Background */}
      {/* <iframe
        src="https://shubh1127.github.io/Space/"
        className="video-background col-span-full row-span-full absolute inset-0 w-full h-full -z-9"
        frameBorder="0"
        allowFullScreen
      /> */}
      <div className="col-span-full">
        <Header />
      </div>
      <div className="md:col-start-2 md:col-end-12 col-span-full h-max">
        <UpperSection/>
      </div>
      <div className="md:col-start-2 md:col-end-12 col-span-full h-max">
        <About/>
      </div>
      <div className="md:col-start-2 md:col-end-12 col-span-full px-6 py-10">
        <Projects/>
      </div>
      <div className="md:col-start-2 md:col-end-12 col-span-full">
        <Skills/>
      </div>
      <div className="col-span-full">
        <Footer/>
      </div>
    </div>
  );
}
