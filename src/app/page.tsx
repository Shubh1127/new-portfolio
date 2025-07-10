'use client';
import Image from "next/image";
// import SplineRobot from "./components/robot";
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
    <div>
      {/* Space Background */}
      <iframe
        src="https://shubh1127.github.io/Space/"
        className="video-background"
        frameBorder="0"
        allowFullScreen
      />
      
      <div
        className=""
      >
        <Header />
      </div>
      <div className="h-max">
        <UpperSection/>
      </div>
      <div className="h-max">
        <About/>
      </div>
      <div className="px-6 py-10">
        <Projects/>
      </div>
      <div>
        <Skills/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
