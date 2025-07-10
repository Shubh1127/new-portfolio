'use client'
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    liveUrl?: string;
    codeUrl?: string;
}

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [activeFilter] = useState('All');
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    console.log('Hovered Project:', hoveredProject);
        const projects: Project[] = [
            {
                id: 1,
                title: 'chat-Bot',
                description: 'A chatbot build with langChain and integration of Google Gemini ',
                tags: ['Next.js', 'TypeScript', 'LangChain', 'FastApi', 'Tailwind'],
                imageUrl: '/chat-bot.png',
                liveUrl: 'https://chat-bot-one-pink.vercel.app/',
                codeUrl: 'https://github.com/Shubh1127/Chat-bot'
            },
            {
                id: 2,
                title: 'Supply chain',
                description: 'The project aims to provide businesses with a digital platform for managing the end-to-end processes.Including Farmer dashboard and buyer e-commerce',
                tags: ['React', 'Framer-motion', 'Node.js', 'ContextAPI'],
                imageUrl: '/supply-chain.png',
                liveUrl: 'https://supply-chain-1.onrender.com/',
                codeUrl: 'https://github.com/Shubh1127/Supply-Chain'
            },
            {
                id: 3,
                title: 'AirLite',
                description: 'Web application that generates custom images using AI based on text prompts.',
                tags: ['EJS', 'Node.js', 'Mapbox', 'express'],
                imageUrl: '/airlite.png',
                liveUrl: 'https://airbnb-ainl.onrender.com/',
                codeUrl: 'https://github.com/Shubh1127/AirLite'
            },
            {
                id: 4,
                title: 'CabEase',
                description: "CabEase is a next-generation cab booking platform designed to simplify transportation. This full-stack application provides a seamless user experience for booking rides and managing bookings—all with just a few clicks. ",
                tags: ['React', 'Firebase', 'MongoDB', 'Express'],
                imageUrl: '/cab-ease.png',
                liveUrl: 'https://cab-ease.vercel.app/',
                codeUrl: 'https://github.com/Shubh1127/CabEase'
            },
            {
                id: 5,
                title: 'TradeWave',
                description: 'TradeWave is a user-friendly trading platform designed to provide seamless access to the stock market. With intuitive tools, and secure trading features, it empowers users to make informed decisions and efficiently manage their investments, much like Zerodha.',
                tags: ['TypeScript', 'Next.js', 'Tailwind', 'API'],
                imageUrl: '',
                liveUrl: '',
                codeUrl: 'https://github.com/Shubh1127/TradeWave'
            },
            {
                id: 6,
                title: 'Attire',
                description: 'created a e-commerce and a supplier dashboard for a client',
                tags: ['React', 'Cloudinary', 'Supabase', 'Node.js'],
                imageUrl: '/attire.png',
                liveUrl: 'https://attire-buyer.onrender.com/',
                codeUrl: 'https://github.com/Shubh1127/Attire'
            }
        ];

    // const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];
    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.tags.includes(activeFilter));

    useEffect(() => {
        // Simple animation for all projects
        projectsRef.current.forEach((project, i) => {
            if (!project) return;

            // Set initial state
            gsap.set(project, { 
                x: i < 3 ? 100 : -100, 
                opacity: 0 
            });

            // Animate on scroll
            gsap.to(project, {
                scrollTrigger: {
                    trigger: project,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                delay: i < 3 ? i * 0.1 : (i - 3) * 0.1
            });
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
        >
            <div className="max-w-7xl mx-auto font-semibold ">
                <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-4">
                    My <span className="text-purple-400">Projects</span>
                </h2>

                <p className="text-xl text-gray-300 mb-12 max-w-3xl">
                    Here are some of my featured works. Each project represents unique challenges and solutions.
                </p>

                {/* Filter buttons */}
                {/* <div className="flex flex-wrap gap-3 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`filter-btn px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === tag
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div> */}
                

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={(el) => { projectsRef.current[index] = el; }}
                            className="relative group overflow-hidden rounded-xl border border-gray-700 bg-white/10 backdrop-blur-md shadow-[0_0_50px_rgba(150,100,255,0.5)] hover:shadow-[0_0_100px_rgba(255,255,255,0.7)] hover:border-purple-500 transition-all duration-500 hover:-translate-y-4 hover:scale-105 transform-gpu"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            style={{ transform: 'translateZ(0)' }}
                        >
                            {/* 🔄 Animated border ring */}
                            <div className="absolute inset-0 rounded-xl animated-border pointer-events-none z-0"></div>

                            {/* Project image */}
                            <div className="relative z-10 h-48 overflow-hidden flex items-center justify-center bg-gray-700">
                                {project.imageUrl ? (
                                    <div
                                        className="w-full h-full bg-cover object-contain bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${project.imageUrl})` }}
                                    />
                                ) : (
                                    <span className="text-gray-400 text-sm">No preview available at the moment</span>
                                )}
                            </div>

                            {/* Project info */}
                            <div className="relative z-10 p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs rounded bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3">
                                    {project.liveUrl ? (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-sm font-medium transition duration-300"
                                        >
                                            Live Demo
                                        </a>
                                    ) : (
                                        <span className="px-4 py-2 bg-gray-600 text-white rounded-md text-sm font-medium opacity-70 cursor-not-allowed">
                                            Available soon
                                        </span>
                                    )}
                                    {project.codeUrl && (
                                        <a
                                            href={project.codeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 border border-gray-600 hover:border-purple-500 hover:text-purple-400 text-gray-300 rounded-md text-sm font-medium transition duration-300"
                                        >
                                            View Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}