'use client'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import SplineRobot from "./robot";

export default function UpperSection() {
    const textRef = useRef<HTMLDivElement>(null);
    const robotRef = useRef<HTMLDivElement>(null);
    const flipContainerRef = useRef<HTMLDivElement>(null);
    const flipFrontRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Text animation - comes from left
        gsap.from(flipFrontRef.current, {
            x: -100,
            opacity: 0,
            duration: 2.5,
            ease: 'power3.out',
            delay: 0.2
        });

        // Robot animation - comes from right
        gsap.from(robotRef.current, {
            x: 100,
            opacity: 0,
            duration: 2.5,
            ease: 'power3.out',
            delay: 0.4
        });
    }, []);

    return (
        <section id="about" className="relative flex items-center justify-center px-2 py-12 mx-auto min-h-[500px]">
            {/* Robot Background */}
            <div 
                ref={robotRef} 
                className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
                <div className="w-full h-full max-w-3xl">
                    <SplineRobot />
                </div>
            </div>

            {/* Centered Content */}
            <div className="relative z-10 w-full">
                {/* Flip Card Section */}
                <div 
                    ref={flipContainerRef}
                    className="w-full h-full min-h-[350px] relative"
                    style={{ perspective: "1000px" }}
                >
                    {/* Front of the card */}
                    <div
                        ref={flipFrontRef}
                        className="bg-transparent rounded-3xl p-8 shadow-xl h-full flex flex-col justify-center w-full relative"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight text-center">
                            <p className="text-4xl text-purple-400 mb-2 font-semibold">
                                <span className="inline-block">Hey 👋</span>
                            </p>
                            I'm{' '}
                            <span className="text-red-400 inline-block">SHUBHAM</span>
                            <br />
                            <span className="text-purple-400 inline-block"> A Full Stack Developer</span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}